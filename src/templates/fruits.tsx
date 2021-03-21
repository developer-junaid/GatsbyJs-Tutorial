import React from "react";

// Fruit Template
export default function Fruit({ pageContext }) {
  // Data recieved
  console.log(pageContext);
  let { name, desc } = pageContext; // Destructure data

  // Render Data
  return (
    <div>
      <h1>Fruits Data</h1>
      <hr />
      <p>Name: {name}</p>
      <p>Description: {desc}</p>
    </div>
  );
}
