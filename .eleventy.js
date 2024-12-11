const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("code/css");
  eleventyConfig.addPassthroughCopy("code/js");
  eleventyConfig.addPassthroughCopy("code/assets/img");
  
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    dir: {
      input: "code",
      output: "docs",
    },
	  pathPrefix: "/proyecto-final/"
  };
};
