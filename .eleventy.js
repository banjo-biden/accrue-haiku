module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src");
  eleventyConfig.addCollection("haiku", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./_haiku/*.md");
    });
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data"
    }
  };
  
};