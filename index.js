
import emojies_defs from './lib/data/full.json';
import emojies_shortcuts from './lib/data/shortcuts';
var bare_emoji_plugin = require('./bare');


export default function emoji_plugin(md, options) {
  let defaults = {
    defs: emojies_defs,
    shortcuts: emojies_shortcuts,
    enabled: []
  };

  var opts = md.utils.assign({}, defaults, options || {});

  bare_emoji_plugin(md, opts);
};
