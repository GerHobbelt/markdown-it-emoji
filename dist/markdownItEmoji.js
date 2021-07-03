/*! markdown-it-emoji 2.0.0-13 https://github.com//GerHobbelt/markdown-it-emoji @license MIT */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Emoticons -> Emoji mapping.
//
// (!) Some patterns skipped, to avoid collisions
// without increase matcher complicity. Than can change in future.
//
// Places to look for more emoticons info:
//
// - http://en.wikipedia.org/wiki/List_of_emoticons#Western
// - https://github.com/wooorm/emoticon/blob/master/Support.md
// - http://factoryjoe.com/projects/emoticons/
//
var emojies_shortcuts = {
  angry: ['>:(', '>:-('],
  blush: [':")', ':-")'],
  broken_heart: ['</3', '<\\3'],
  // :\ and :-\ not used because of conflict with markdown escaping
  confused: [':/', ':-/'],
  // twemoji shows question
  cry: [":'(", ":'-(", ':,(', ':,-('],
  frowning: [':(', ':-('],
  heart: ['<3'],
  imp: [']:(', ']:-('],
  innocent: ['o:)', 'O:)', 'o:-)', 'O:-)', '0:)', '0:-)'],
  joy: [":')", ":'-)", ':,)', ':,-)', ":'D", ":'-D", ':,D', ':,-D'],
  kissing: [':*', ':-*'],
  laughing: ['x-)', 'X-)'],
  neutral_face: [':|', ':-|'],
  open_mouth: [':o', ':-o', ':O', ':-O'],
  rage: [':@', ':-@'],
  smile: [':D', ':-D'],
  smiley: [':)', ':-)'],
  smiling_imp: [']:)', ']:-)'],
  sob: [":,'(", ":,'-(", ';(', ';-('],
  stuck_out_tongue: [':P', ':-P'],
  sunglasses: ['8-)', 'B-)'],
  sweat: [',:(', ',:-('],
  sweat_smile: [',:)', ',:-)'],
  unamused: [':s', ':-S', ':z', ':-Z', ':$', ':-$'],
  wink: [';)', ';-)']
};

function emoji_html(tokens, idx
/*, options, env */
) {
  return tokens[idx].content;
}

// Emojies & shortcuts replacement logic.
//
// Note: In theory, it could be faster to parse :smile: in inline chain and
// leave only shortcuts here. But, who care...
//
function create_rule(md, emojies, shortcuts, scanRE, replaceRE) {
  let arrayReplaceAt = md.utils.arrayReplaceAt,
      ucm = md.utils.ucmicro,
      ZPCc = new RegExp([ucm.Z.source, ucm.P.source, ucm.Cc.source].join('|'));

  function splitTextToken(text, level, Token) {
    let token,
        last_pos = 0,
        nodes = [];
    text.replace(replaceRE, function (match, offset, src) {
      let emoji_name; // Validate emoji name

      if (shortcuts.hasOwnProperty(match)) {
        // replace shortcut with full name
        emoji_name = shortcuts[match]; // Don't allow letters before any shortcut (as in no ":/" in http://)

        if (offset > 0 && !ZPCc.test(src[offset - 1])) {
          return;
        } // Don't allow letters after any shortcut


        if (offset + match.length < src.length && !ZPCc.test(src[offset + match.length])) {
          return;
        }
      } else {
        emoji_name = match.slice(1, -1);
      } // Add new tokens to pending list


      if (offset > last_pos) {
        token = new Token('text', '', 0);
        token.content = text.slice(last_pos, offset);
        nodes.push(token);
      }

      token = new Token('emoji', '', 0);
      token.markup = emoji_name;
      token.content = emojies[emoji_name];
      nodes.push(token);
      last_pos = offset + match.length;
    });

    if (last_pos < text.length) {
      token = new Token('text', '', 0);
      token.content = text.slice(last_pos);
      nodes.push(token);
    }

    return nodes;
  }

  return function emoji_replace(state) {
    let i,
        j,
        l,
        tokens,
        token,
        blockTokens = state.tokens,
        autolinkLevel = 0;

    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== 'inline') {
        continue;
      }

      tokens = blockTokens[j].children; // We scan from the end, to keep position when new tags added.
      // Use reversed logic in links start/end match

      for (i = tokens.length - 1; i >= 0; i--) {
        token = tokens[i];

        if (token.type === 'link_open' || token.type === 'link_close') {
          if (token.info === 'auto') {
            autolinkLevel -= token.nesting;
          }
        }

        if (token.type === 'text' && autolinkLevel === 0 && scanRE.test(token.content)) {
          // replace current node
          blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, splitTextToken(token.content, token.level, state.Token));
        }
      }
    }
  };
}

// Convert input options to more useable format
// and compile search regexp
function quoteRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}

function normalize_opts(options) {
  let emojies = options.defs,
      shortcuts; // Filter emojies by whitelist, if needed

  if (options.enabled.length) {
    emojies = Object.keys(emojies).reduce(function (acc, key) {
      if (options.enabled.indexOf(key) >= 0) {
        acc[key] = emojies[key];
      }

      return acc;
    }, {});
  } // Flatten shortcuts to simple object: { alias: emoji_name }


  shortcuts = Object.keys(options.shortcuts).reduce(function (acc, key) {
    // Skip aliases for filtered emojies, to reduce regexp
    if (!emojies[key]) {
      return acc;
    }

    if (Array.isArray(options.shortcuts[key])) {
      options.shortcuts[key].forEach(function (alias) {
        acc[alias] = key;
      });
      return acc;
    }

    acc[options.shortcuts[key]] = key;
    return acc;
  }, {});
  let keys = Object.keys(emojies);
  let names; // If no definitions are given, return empty regex to avoid replacements with 'undefined'.

  if (keys.length === 0) {
    names = '^$';
  } else {
    // Compile regexp
    names = keys.map(function (name) {
      return ':' + name + ':';
    }).concat(Object.keys(shortcuts)).sort().reverse().map(function (name) {
      return quoteRE(name);
    }).join('|');
  }

  let scanRE = RegExp(names);
  let replaceRE = RegExp(names, 'g');
  return {
    defs: emojies,
    shortcuts: shortcuts,
    scanRE: scanRE,
    replaceRE: replaceRE
  };
}

function emoji_plugin$1(md, options) {
  let defaults = {
    defs: {},
    shortcuts: {},
    enabled: []
  };
  let opts = normalize_opts(md.utils.assign({}, defaults, options || {}));
  md.renderer.rules.emoji = emoji_html;
  md.core.ruler.push('emoji', create_rule(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE));
}

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const emojies_defs = JSON.parse(fs.readFileSync(path.normalize(path.join(__dirname, '../lib/data/full.json')), 'utf8'));
function emoji_plugin(md, options) {
  let defaults = {
    defs: emojies_defs,
    shortcuts: emojies_shortcuts,
    enabled: []
  };
  let opts = md.utils.assign({}, defaults, options || {});
  emoji_plugin$1(md, opts);
}

export default emoji_plugin;
//# sourceMappingURL=markdownItEmoji.modern.js.map
