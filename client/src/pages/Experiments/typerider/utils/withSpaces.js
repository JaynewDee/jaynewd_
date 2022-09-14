function withSpaces(words) {
  return words.map((word) => {
    let wordArr = word.split("");
    if (words.indexOf(word) !== words.length - 1) {
      wordArr.push(" ");
    }
    let spaced = wordArr.join("");
    return spaced;
  });
}

export { withSpaces };
