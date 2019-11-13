// Convert feedback into star ratings
const starScale = (num, scale='') => {
  if (num >= 15) {
    return starScale(num - 20, scale+='★');
  } else if (num >= 5) {
    return scale+= '½';
  } else {
    return scale;
  }
}

exports.starScale = starScale;