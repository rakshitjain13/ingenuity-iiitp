const fs = require('fs');
const path = require('path');
const glob = require('glob');
const pathToEntry = './build/index.html';
const bundlesRegExp = /\/static\/\w+\/\w+.[a-z0-9]+.\w{2,3}/g;
const assets = glob.sync(__dirname + '/build/static/media/*.woff*')
  .map((assetPath) => {
    return path.relative(__dirname + '/build', assetPath);
  });
const splitBy = '</title>';

const builtHTMLContent = fs.readFileSync(pathToEntry).toString();
const links = builtHTMLContent.match(bundlesRegExp);
const parts = builtHTMLContent.split(splitBy);

let fileWithPreload = [
  parts[0],
  splitBy,
];

links.forEach(link => {
  let fileType = 'script';

  if (/\.css$/.test(link)) {
    fileType = 'style';
  }
  if(!(/\.chu$/.test(link))){
  fileWithPreload = [
    ...fileWithPreload,
    `<link rel="preload" href="${link}" as="${fileType}" crossorigin="anonymous">`,
  ];
}
});
for (const link of assets) {
  fileWithPreload.push(`<link rel="preload" href="./${link}" as="font" crossorigin="anonymous">`);
}

fileWithPreload = [
  ...fileWithPreload,
  parts[1],
];

fs.writeFileSync(pathToEntry, fileWithPreload.join(''));