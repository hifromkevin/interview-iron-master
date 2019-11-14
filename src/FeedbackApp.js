module.exports = class FeedbackApp {

  formatFeedback(feedback) {
    // Moved rating and library functions to library files to reduce code in formatFeedback function
    let lib = require('./library');

    // Get the lengths of each block of text to anticipate 80 character maximum
    let formattedDate = lib.formatDate(feedback.date);
    let dateLength = formattedDate.length;

    let rating = feedback.rating ? lib.starScale(feedback.rating) : '';
    let ratingLength = rating.length;

    let formattedFeedback = `${feedback.word}: ${feedback.comment}`;
    let feedbackLength = formattedFeedback.length;

    // Checks length of string
    // Uses 78 to account for spaces between sections
    if (dateLength + ratingLength + feedbackLength < 78) {
      return rating ? `${formattedFeedback} ${rating} ${formattedDate}` : `${formattedFeedback} ${formattedDate}`;
    } else {
      return (feedbackLength + ratingLength > 79) ? `${lib.stopOnWord(formattedFeedback, ratingLength)} ${rating}` : `${formattedFeedback} ${rating}`;
    };
  };
};