function cutTheSticks(arr) {
  const result = [];

  while (arr.length > 0) {
    result.push(arr.length);
    arr.sort((a, b) => a - b);
    const minLen = arr[0];
    arr = arr.filter((len) => len > minLen);
  }

  return result;
}
