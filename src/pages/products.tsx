import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout/Layout";
import Product1 from "../components/products/product1/product1";
import Product2 from "../components/products/product2/product2";
import ProductLanding from "../components/products/productLanding/productLanding";
import { Link } from "gatsby";
import styles from "./products.module.css";

const Products = () => {
  return (
    <Layout>
      <div className={styles.productsContainer}>
        <Link to="/products">Main</Link>
        <Link to="/products/product1">Product 1</Link>
        <Link to="/products/product2">Product 2</Link>
      </div>

      <Router basepath="/products">
        <Product1 path="product1" />
        <Product2 path="/product2" />
        <ProductLanding path="/" />
      </Router>
    </Layout>
  );
};

export default Products;
