module.exports = class FeedbackApp {

  formatFeedback(feedback) {
    /* Start here */

    // Moved rating and library functions to library files to reduce code in formatFeedback function
    let lib = require('./library/index.js');

    return `${feedback.word}: ${feedback.comment} ${lib.starScale(feedback.rating)} ${lib.formatDate(feedback.date)}`;
  }
};
