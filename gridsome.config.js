module.exports = {
  siteName: "Grossery",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
    },
  },
  plugins: [
    {
      use: "gridsome-plugin-netlify-cms",
      options: {
        publicPath: "/admin",
      },
    },
  ],
};
