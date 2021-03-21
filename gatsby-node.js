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
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions; // Destructure the function

  // Only update '/product' page
  if (page.path.match(/^\/products/)) {
    page.matchPath = "/products/*";
    createPage(page);
  }
};
