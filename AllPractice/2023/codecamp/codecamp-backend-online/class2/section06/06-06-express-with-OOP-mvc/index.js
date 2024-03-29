// const express = require("express"); // 옛날 방식 => CommonJS 방식
import express from "express"; // 최신 방식 => ES6 방식(Module 방식)
import { ProductController } from "./mvc/controllers/product.controller.js";

const app = express();

// 상품 API
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API

// 게시판 API
// app.get('/boards/...')

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
