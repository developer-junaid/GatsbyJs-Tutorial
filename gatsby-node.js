var path = require("path");

// Get Data from contentful
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Data
  const data = await graphql(`
    {
      allContentfulProduct {
        nodes {
          slug
          title
          desc
        }
      }
    }
  `);

  // Show Data
  // console.log(JSON.stringify(data));

  // Get data
  const products = data.data.allContentfulProduct.nodes;
  console.log(JSON.stringify(products));

  // Map Data
  products.forEach((product) => {
    // Create Pages
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve("./src/templates/product.tsx"), // Give template,
      context: {
        productDetails: product,
      },
    });
  });
};

// // Create pages
// exports.createPages = async function ({ actions }) {
//   // Create Page
//   actions.createPage({
//     path: "fruits", // Path or Route name
//     component: require.resolve("./src/templates/fruits.tsx"), // Path of template
//     context: {
//       // Data to send
//       name: "Orange",
//       desc: "This is description of orange",
//     },
//   });
// };

// Implement Gatsby API "onCreatePage". This is called after every page is created
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions; // Destructure the function

//   // Only update '/product' page
//   if (page.path.match(/^\/products/)) {
//     page.matchPath = "/products/*";
//     createPage(page);
//   }
// };
