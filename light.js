
import emojies_defs from './lib/data/light.json';
import emojies_shortcuts from './lib/data/shortcuts';
import emoji_html from './lib/render';
import create_rule from './lib/replace';
import normalize_opts from './lib/normalize_opts';


export default function emoji_plugin(md, options) {
  let defaults = {
    defs: emojies_defs,
    shortcuts: emojies_shortcuts,
    enabled: []
  };

  let opts = normalize_opts(md.utils.assign({}, defaults, options || {}));

  md.renderer.rules.emoji = emoji_html;

  md.core.ruler.push('emoji', create_rule(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE));
}
