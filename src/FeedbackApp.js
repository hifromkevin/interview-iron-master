module.exports = class FeedbackApp {
  formatFeedback(feedback) {
    /* Start here */
    return `${feedback.word}: ${feedback.comment} ${feedback.rating} ${feedback.date}`;
  }
};
