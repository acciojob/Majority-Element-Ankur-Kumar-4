function majorElement(arr, n) {
  const target = Math.floor(n / 2);
  const counter = {};

  arr.forEach((ele) => {
    if (counter[ele]) {
      counter[ele] += 1;
    } else {
      counter[ele] = 1;
    }
  });

  // Convert the counter object to an array of key-value pairs
  const counterArray = Object.entries(counter);

  // Sort the array by values in descending order
  counterArray.sort((a, b) => b[1] - a[1]);

  // Check if the most frequent element is a majority element
  if (counterArray[0][1] > target) {
    console.log(counterArray[0][0]);
  } else {
    
  }
}

majorElement([2, 1, 2], 3);
