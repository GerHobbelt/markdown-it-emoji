/* eslint-env mocha, es6 */

import path from 'path';
import fs from 'fs';
import assert from 'assert';

import markdownit from '@gerhobbelt/markdown-it';
import generate from '@gerhobbelt/markdown-it-testgen';

import emoji_bare from '../bare.js';
import emoji_full from '../index.js';
import emoji_light from '../light.js';

import emojies_shortcuts from '../lib/data/shortcuts.js';

import { fileURLToPath } from 'url';
// see https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_no_require_exports_module_exports_filename_dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const emojies_defs = JSON.parse(fs.readFileSync(path.normalize(path.join(__dirname, '../lib/data/full.json')), 'utf8'));
const emojies_defs_light = JSON.parse(fs.readFileSync(path.normalize(path.join(__dirname, '../lib/data/light.json')), 'utf8'));



describe('markdown-it-emoji', function () {
  let md;

  md = markdownit().use(emoji_full);
  generate(path.join(__dirname, 'fixtures/default'), { header: true }, md);

  generate(path.join(__dirname, 'fixtures/full.txt'), { header: true }, md);


  md = markdownit().use(emoji_full, {
    defs: {
      one: '!!!one!!!',
      fifty: '!!50!!'
    },
    shortcuts: {
      fifty: [ ':50', '|50' ],
      one: ':uno'
    }
  });
  generate(path.join(__dirname, 'fixtures/options.txt'), { header: true }, md);

  md = markdownit().use(emoji_full, { enabled: [ 'smile', 'grin' ] });
  generate(path.join(__dirname, 'fixtures/whitelist.txt'), { header: true }, md);

  md = markdownit({ linkify: true }).use(emoji_full);
  generate(path.join(__dirname, 'fixtures/autolinks.txt'), { header: true }, md);
});


describe('markdown-it-emoji-light', function () {
  let md;

  md = markdownit().use(emoji_light);
  generate(path.join(__dirname, 'fixtures/default'), { header: true }, md);

  generate(path.join(__dirname, 'fixtures/light.txt'), { header: true }, md);

  md = markdownit().use(emoji_light, {
    defs: {
      one: '!!!one!!!',
      fifty: '!!50!!'
    },
    shortcuts: {
      fifty: [ ':50', '|50' ],
      one: ':uno'
    }
  });
  generate(path.join(__dirname, 'fixtures/options.txt'), { header: true }, md);


  md = markdownit().use(emoji_light, { enabled: [ 'smile', 'grin' ] });
  generate(path.join(__dirname, 'fixtures/whitelist.txt'), { header: true }, md);

  md = markdownit({ linkify: true }).use(emoji_full);
  generate(path.join(__dirname, 'fixtures/autolinks.txt'), { header: true }, md);
});

describe('markdown-it-emoji-bare', function () {
  let md;

  md = markdownit().use(emoji_bare);
  generate(path.join(__dirname, 'fixtures/bare.txt'), { header: true }, md);

  md = markdownit().use(emoji_bare, {
    defs: {
      one: '!!!one!!!',
      fifty: '!!50!!'
    },
    shortcuts: {
      fifty: [ ':50', '|50' ],
      one: ':uno'
    }
  });
  generate(path.join(__dirname, 'fixtures/options.txt'), { header: true }, md);
});


describe('integrity', function () {

  it('all shortcuts should exist', function () {
    Object.keys(emojies_shortcuts).forEach(function (name) {
      assert(emojies_defs[name], "shortcut doesn't exist: " + name);
    });
  });

  it('no chars with "uXXXX" names allowed', function () {
    Object.keys(emojies_defs).forEach(function (name) {
      if (/^u[0-9a-b]{4,}$/i.test(name)) {
        throw Error('Name ' + name + ' not allowed');
      }
    });
  });

  it('all light chars should exist', function () {
    let visible = fs.readFileSync(path.join(__dirname, '../support/visible.txt'), 'utf8');

    let available = Object.keys(emojies_defs_light).map(function (k) {
      return emojies_defs_light[k].replace(/\uFE0F/g, '');
    });

    let missed = '';

    Array.from(visible).forEach(function (ch) {
      if (available.indexOf(ch) < 0) missed += ch;
    });

    if (missed) {
      throw new Error('Characters ' + missed + ' missed.');
    }
  });

});
