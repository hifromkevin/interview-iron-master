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

exports.formatDate = formatDate;