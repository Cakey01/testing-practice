export default function caesarCipher(string, factor) {
  return shift([...string], factor);
}

const shift = (arr, factor) => {
  let shifted = [];
  arr.forEach((char) => {
    let code = char.charCodeAt(0);
    for (let i = 0; i < factor; i++) {
      if (code === 90 || code === 122) {
        code = code - 25;
      } else if ((code >= 65 && code <= 89) || (code >= 97 && code <= 122)){
        code++;
      }      
    }
    shifted.push(String.fromCharCode(code));
  })
  return shifted.join('');
}

