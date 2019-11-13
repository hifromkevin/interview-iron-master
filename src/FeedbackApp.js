module.exports = class FeedbackApp {

  formatFeedback(feedback) {
    /* Start here */
    let lib = require('./library/index.js');

    return `${feedback.word}: ${feedback.comment} ${lib.starScale(feedback.rating)} ${lib.formatDate(feedback.date)}`;
  }
};
