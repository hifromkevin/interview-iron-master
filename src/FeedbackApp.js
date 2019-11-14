module.exports = class FeedbackApp {

  formatFeedback(feedback) {
    /* Start here */

    // Moved rating and library functions to library files to reduce code in formatFeedback function
    let lib = require('./library/index.js');

    // Get the lengths of each block of text to anticipate 80 character maximum
    let formattedDate = lib.formatDate(feedback.date);
    let dateLength = formattedDate.length;

    let rating = feedback.rating ? lib.starScale(feedback.rating) : '';
    let ratingLength = rating.length;

    let formattedFeedback = `${feedback.word}: ${feedback.comment}`;
    let feedbackLength = formattedFeedback.length;

    return `${formattedFeedback} ${rating} ${formattedDate}`;
  }
};
