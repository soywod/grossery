// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require("fs");
const path = require("path");
const showdown = require("showdown");

module.exports = function (api) {
  api.loadSource(api => {
    // About
    (() => {
      let markdown = fs.readFileSync("./src/about/text.md", "utf-8");
      let html = new showdown.Converter().makeHtml(markdown);
      const collection = api.addCollection({typeName: "About"});
      collection.addNode({html});
    })();

    // Products
    (() => {
      api.addSchemaTypes(`
        type Products implements Node {
          id: ID!
          name: String
          desc: String
          stock: Int
        }
      `);

      const collection = api.addCollection({typeName: "Products"});
      let productsDir = path.join(__dirname, "src", "products");
      if (fs.existsSync(productsDir)) {
        let files = fs.readdirSync(productsDir, "utf-8");
        files.forEach(file => {
          let json = fs.readFileSync(path.join(productsDir, file), "utf-8");
          json = JSON.parse(json);
          collection.addNode(json);
        });
      }
    })();
  });
};
