
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
// see https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_no_require_exports_module_exports_filename_dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const emojies_defs = JSON.parse(fs.readFileSync(path.normalize(path.join(__dirname, './lib/data/light.json')), 'utf8'));

import emojies_shortcuts from './lib/data/shortcuts.js';
import bare_emoji_plugin from './bare.js';


export default function emoji_plugin(md, options) {
  let defaults = {
    defs: emojies_defs,
    shortcuts: emojies_shortcuts,
    enabled: []
  };

  let opts = md.utils.assign({}, defaults, options || {});

  bare_emoji_plugin(md, opts);
}
