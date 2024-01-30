function workbook(n, k, arr) {
    let result = 0;
    let page = 1;
  
    for (let i of Array.from({ length: n }, (value, index) => index)) {
      const problems = arr[i];
  
      for (let j of Array.from(
        { length: problems },
        (value, index) => index + 1
      )) {
        j === page && result++;
  
        j !== problems && !(j % k) && page++;
      }
  
      page++;
    }
  
    return result;
  }