module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src");
  eleventyConfig.addCollection("haiku", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./_haiku/*.md");
    });
  eleventyConfig.addFilter("shuffle", function(arr) {
    let array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  });
};
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data"
    }
  };
  