export default function analyzeArray(arr) {
  console.log(findAverage(arr));
  return {
    average: findAverage(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }
}

const findAverage = (arr) => {
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}
