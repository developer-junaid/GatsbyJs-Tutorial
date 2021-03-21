import React from "react";

interface product1PropTypes {
  path: string;
}

const Product1: React.FC<product1PropTypes> = () => {
  return (
    <div>
      <h1>Product 1</h1>
    </div>
  );
};

export default Product1;
