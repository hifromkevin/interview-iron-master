module.exports = class FeedbackApp {
  formatFeedback(feedback) {
    /* Start here */


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

    // Converts date string into mm/dd/yyyy string
    const formatDate = (dateString) => {
      const monthConversion = {
        'Jan': 1,
        'Feb': 2, 
        'Mar': 3, 
        'Apr': 4, 
        'May': 5,
        'Jun': 6,
        'Jul': 7,
        'Aug': 8,
        'Sep': 9,
        'Oct': 10,
        'Nov': 11,
        'Dec': 12
      }

      const splitDate = dateString.split(' ');

      return `(${monthConversion[splitDate[1]]}/${splitDate[0]}/${splitDate[2]})`;
    };

    return `${feedback.word}: ${feedback.comment} ${starScale(feedback.rating)} ${formatDate(feedback.date)}`;
  }
};
