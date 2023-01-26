// const { fn } = require('./develop');
// fn();
// const fn = () => console.log(process.cwd());

// process.nextTick(() => {
//   console.log('Next tick callback');
// });

(async () => {
  const fs = require('fs').promises;
  const thisDir = await fs.readdir(__dirname);
  console.log(thisDir);
  const statistics = await Promise.all(
    thisDir.map(async fileName => {
      const stats = await fs.stat(fileName);
      return {
        Name: fileName,
        Size: stats.size,
        Date: stats.mtime,
      };
    }),
  );
  console.table(statistics);
})();
