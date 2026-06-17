export default function caesarCipher(string, factor) {
  return shift([...string], factor);
}

const shift = (arr, factor) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + factor);
  }
  return arr.join('');
}