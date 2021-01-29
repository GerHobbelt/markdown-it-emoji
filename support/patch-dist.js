#!/usr/bin/env node

/* eslint-env es6 */
/* eslint-disable no-console */

import path from 'path';
import fs from 'fs';

const argv = process.argv;
//console.log({ argv });

for (let i = 2; i < argv.length; i++) {
  let f = argv[i];
  let src = fs.readFileSync(f, 'utf8');

  // find the depth within /dist/:
  let relpath = f.replace(/[\\]/g, '/').replace(/^.*\/dist\//, '');
  let a = relpath.split('/');
  let depth = a.length - 1;
  //console.log({ relpath, a, depth });

  let edited = false;

  // lines look like this:
  //     JSON.parse(fs.readFileSync(path.normalize(path.join(__dirname, './lib/data/full.json'))
  src = src.replace(/(JSON\.parse\(fs\.readFileSync\(.+__dirname, ')\.\/(lib\/data\/)/, (m, p1, p2) => {
    let a = Array(depth + 1);
    let prnt = a.join('../');
    edited = true;
    return `${p1}${prnt}${p2}`;
  });

  if (edited) {
    fs.writeFileSync(f, src, 'utf8');
    console.log(`Patched: ${f}`);
  }
}
console.log('DIST path patch: Done.');

