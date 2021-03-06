const joinCategories = (categoryList, pos = 0) => {
  if(!categoryList || !categoryList[pos]) {
    return '';
  }
  if (!categoryList[pos]) {
      return '';
  }
  if (!categoryList[pos]['itunes:category']) {
    return categoryList[pos].$.text;
  }
  return `${categoryList[pos].$.text} > ${categoryList[pos]['itunes:category'][0].$.text}`;
};

module.exports = joinCategories;
