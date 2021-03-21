// Create pages
exports.createPages = async function ({ actions }) {
  // Create Page
  actions.createPage({
    path: "fruits", // Path or Route name
    component: require.resolve("./src/templates/fruits.tsx"), // Path of template
    context: {
      // Data to send
      name: "Orange",
      desc: "This is description of orange",
    },
  });
};
