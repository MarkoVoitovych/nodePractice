const fn = () => {
  console.log(module.exports);
  console.log(__filename);
  console.log(__dirname);
};
module.exports = {
  fn,
};
