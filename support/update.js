#!/usr/bin/env node

/* eslint-env es6 */
/* eslint-disable no-console */

import { join } from 'path';
import fs from 'fs';
import path from 'path';
import https from 'https';

import { fileURLToPath } from 'url';
// see https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_no_require_exports_module_exports_filename_dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const emojiSrc = 'https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json';


function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, function (res) {
      if (res.statusCode !== 200) reject(`Bad response code: ${res.statusCode}`);

      let data = [];

      res
        .on('data', chunk => data.push(chunk))
        .on('end', () => resolve(Buffer.concat(data)))
        .on('error', err => reject(err));
    });
  });
}

download(emojiSrc).then(data => {

  let defs = JSON.parse(data.toString());

  // Drop aliases without names (with names "uXXXX")
  defs.forEach(def => {
    def.aliases = def.aliases.filter(a => !/^u[0-9a-b]{4,}$/i.test(a));
  });

  /*// Write chars in one string, to quickly select supported in editor
  const text = defs.map(function (data) {
    return data.emoji || '';
  }).join('');
  require('fs').writeFileSync('visible.txt', text, 'utf8');*/

  //
  // Write full set
  //

  let emojies = {};

  defs.forEach(def => {
    def.aliases.forEach(alias => {
      emojies[alias] = def.emoji;
    });
  });

  fs.writeFileSync(join(__dirname, '../lib/data/full.json'), JSON.stringify(emojies, null, 2), 'utf8');

  //
  // Write light set
  //

  const visible = fs.readFileSync(join(__dirname, 'visible.txt'), 'utf8');

  let emoji_light = {};

  defs.forEach(def => {
    def.aliases.forEach(alias => {
      if (visible.includes(def.emoji.replace(/\uFE0F/g, ''))) {
        emoji_light[alias] = def.emoji;
      }
    });
  });

  fs.writeFileSync(join(__dirname, '../lib/data/light.json'), JSON.stringify(emoji_light, null, 2), 'utf8');

}).catch(err => console.error(err));
