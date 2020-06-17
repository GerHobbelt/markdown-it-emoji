#!/usr/bin/env node



/*eslint-disable no-console*/

let p        = require('path');
let fs       = require('fs');
let _        = require('lodash');
let request  = require('request');

let emojiSrc = 'https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json';

request(emojiSrc, function (err, response, body) {
  if (err || response.statusCode !== 200) {
    throw new Error('Failed to load emojies map');
  }

  let defs = JSON.parse(body);

  /*// Write chars in one string, to quickly select supported in editor
  var text = defs.map(function (data) {
    return data.emoji || '';
  }).join('');
  require('fs').writeFileSync('visible.txt', text, 'utf8');*/

  let emojies = {};

  defs.forEach(function (def) {
    if (!def.emoji) { return; }

    def.aliases.forEach(function (alias) {
      // Drop aliases without names (with names "uXXXX")
      if (/^u[0-9a-b]{4,}$/i.test(alias)) return;

      emojies[alias] = def.emoji;
    });
  });

  fs.writeFileSync(p.join(__dirname, '../lib/data/full.json'), JSON.stringify(emojies, null, 2), 'utf8');

  let visible = fs.readFileSync(p.join(__dirname, 'visible.txt'), 'utf8');

  let emoji_light = _.omitBy(emojies, function (val) {
    return visible.indexOf(val.replace(/\uFE0F/g, '')) < 0;
  });
  fs.writeFileSync(p.join(__dirname, '../lib/data/light.json'), JSON.stringify(emoji_light, null, 2), 'utf8');

  console.log({
    emojies: emojies,
    emoji_light: emoji_light
  });
});
