function shuffleOne(word) {
  // copy original to avoid mutation
  const newWord = word.slice();

  // cut and store ends
  let firstLetter = newWord.shift();
  let lastLetter = newWord.pop();

  // randomize index of in-betweens
  for (let i = newWord.length - 1; i > 0; i--) {
    const randIdx = Math.floor(Math.random() * (i + 1));
    [newWord[i], newWord[randIdx]] = [newWord[randIdx], newWord[i]];
  }
  // put back together
  newWord.unshift(firstLetter);
  newWord.push(lastLetter);
  return newWord.join("");
}

function rejoinWords(newStrings, inserts) {
  let pieces = newStrings;
  // put the scrambled and unscrambled back together
  for (let i = 0; i < inserts.length; i++) {
    let index = inserts[i].pos;
    let insert = inserts[i].item;
    pieces.splice(index, 0, insert);
  }
  return pieces;
}

// main control flow
const scrambleWords = (sentence) => {
  const shorts = [];
  let wordArray = sentence.split(" ").slice(0, 10);

  // split any word greater than 3 characters into nested array,
  // push any shorter words to dictionary/map
  const splitWords = wordArray.map((word, idx) => {
    if (word.length > 3) {
      return word.split("");
    } else {
      shorts.push({ item: word, pos: idx });
    }
    return 0;
  });
  // filter out nested arrays
  const longs = splitWords.filter((word) => Array.isArray(word));

  // shuffle each
  const shuffled = longs.map((word) => {
    return shuffleOne(word);
  });

  // recombine shuffled and unshuffled words in proper order
  const pieces = rejoinWords(shuffled, shorts);
  return pieces.join(" ");
};

export { shuffleOne, rejoinWords, scrambleWords };
