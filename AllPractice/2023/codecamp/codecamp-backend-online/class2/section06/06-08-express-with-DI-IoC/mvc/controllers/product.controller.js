import { CashService } from "./services/cash.service.js";
import { ProductService } from "./services/product.service.js";

export class ProductController {
  cashService;
  productService;

  constructor(cashService, productService) {
    this.cashService = cashService;
    this.productService = productService;
  }

  buyProduct = (req, res) => {
    // 1. 가진 돈 검증하는 코드 (대략 10줄 => 2줄 => 1줄)
    // const cashService = new CashService();
    const hasMoney = this.cashService.checkValue();

    // 2. 판매여부 검증하는 코드 (대략 10줄 => 2줄로 줄임)
    // const productService = new ProductService();
    const isSoldout = this.productService.checkSoldout();

    // 3. 상품 구매하는 코드
    if (hasMoney && !isSoldout) {
      res.send("상품 구매 성공!!");
    }
  };

  refundProduct = (req, res) => {
    // 1. 판매여부 검증하는 코드 (대략 10줄 => 2줄로 줄임)
    // const productService = new ProductService();
    const isSoldout = this.productService.checkSoldout();

    // 2. 상품 환불하는 코드
    if (isSoldout) {
      res.send("상품 환불 완료!!");
    }
  };
}
