import React from "react";
import Layout from "./../components/Layout/Layout";

// Fruit Template
export default function Product({ pageContext }) {
  // Data recieved
  console.log(pageContext);
  let { title, desc } = pageContext.productDetails; // Destructure data

  // Render Data
  return (
    <Layout>
      <h1>Products Data</h1>
      <hr />
      <p>Title: {title}</p>
      <p>Description: {desc}</p>
    </Layout>
  );
}
