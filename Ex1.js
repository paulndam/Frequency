function same(array1, array2) {
  //   const arrayOne = array1.length;
  //   const arrayTwo = array2.length;

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    let squareNumber = array2.indexOf(array1[i] ** 2);

    if (squareNumber === -1) {
      return false;
    }

    array2.splice(squareNumber, 1);
  }

  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// approach two

function same2(arr1, arr2) {
  // check of both length of the array are equal

  if (arr1.length !== arr2.length) {
    return false;
  }

  // have a count of each numbers in the array or object

  let freqCounter1 = {};
  let freqCounter2 = {};
  // then loop thru your array, if a number is there increment the count, but if not add a count
  for (let i = 0; i < arr1.length; i++) {
    freqCounter1[i] = (freqCounter1[i] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    freqCounter2[i] = (freqCounter2[i] || 0) + 1;
  }

  // next loop thru the frequency count obj and for each value in the frq obj square it by two

  for (let key in freqCounter1) {
    if (!(key ** freqCounter2)) {
      return false;
    }

    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }

    // then return the obj
  return true;
  }
  
}

console.log(same2([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(same2([1, 2, 3, 2,6], [9, 1, 4, 4,56]));
console.log(same2([1, 2, 3, 5], [1, 4, 9, 11]));

