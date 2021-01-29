
import emoji_html from './lib/render.js';
import emoji_replace from './lib/replace.js';
import normalize_opts from './lib/normalize_opts.js';


export default function emoji_plugin(md, options) {
  let defaults = {
    defs: {},
    shortcuts: {},
    enabled: []
  };

  let opts = normalize_opts(md.utils.assign({}, defaults, options || {}));

  md.renderer.rules.emoji = emoji_html;

  md.core.ruler.push('emoji', emoji_replace(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE));
}
