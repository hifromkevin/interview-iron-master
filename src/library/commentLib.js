// Rather than strictly stopping AT the max number of characters, 
// this helper will keep removing words until the sentence is less than the max, 
// rather than cutting the comment mid-word
// Also, (max - 4) at 6:44 represents the maximum number of characters, less the space and ellipsis.
let stopOnWord = (sentence, ratingLength, max=80, rotation=false) => {
  return (sentence.length + ratingLength < (max - 4)) ? ((rotation) ? `${sentence} ...` : sentence) : stopOnWord(sentence.split(' ').slice(0,-1).join(' '), ratingLength, max, true);
}

exports.stopOnWord = stopOnWord;