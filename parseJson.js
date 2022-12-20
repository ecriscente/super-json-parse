const parseJson = async (string) => {
  let a = string.replace('\\', '').replace(/\\\\/g, '\\');
  let b = JSON.parse(`${a}`)
  return b
};
