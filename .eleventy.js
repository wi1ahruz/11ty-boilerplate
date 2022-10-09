module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy('assets/images');
  eleventyConfig.addPassthroughCopy('assets/js');

  eleventyConfig.setBrowserSyncConfig({
    directory: true,
    ui: false,
    ghostMode: false,
  });

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
