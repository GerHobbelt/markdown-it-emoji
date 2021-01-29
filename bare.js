


let emoji_html        = require('./lib/render');
let emoji_replace     = require('./lib/replace');
let normalize_opts    = require('./lib/normalize_opts');


module.exports = function emoji_plugin(md, options) {
  let defaults = {
    defs: {},
    shortcuts: {},
    enabled: []
  };

  let opts = normalize_opts(md.utils.assign({}, defaults, options || {}));

  md.renderer.rules.emoji = emoji_html;

  md.core.ruler.push('emoji', emoji_replace(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE));
};
