const obj = {
  x: 1,
};

const updateObj = (object) => {
  // object.x = 2;

  return { ...object, x: 2 };
};
const newObj = updateObj(obj);
console.log({ obj, newObj });
