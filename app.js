const map = (arr, mapFunc) => {
  const mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = mapFunc(arr[i], i, arr);
    mapArr.push(result);
  }
  return mapArr;
};

const squareArr2 = map([1, 2, 3, 4, 5], (num) => num ** 2);
console.log(squareArr2); // prints [1, 4, 9, 16, 25]
