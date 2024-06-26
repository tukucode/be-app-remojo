import express from "express";
import Create from "../controllers/product/create.post.js";
import All from "../controllers/product/all.get.js";
import Detail from "../controllers/product/detail.get.js";
import Update from "../controllers/product/update.put.js";
import Restore from "../controllers/product/restore.patch.js";
import Remove from "../controllers/product/remove.delete.js";

import List from "../controllers/product/customer/list.get.js";
import ProductDetail from "../controllers/product/customer/detail.get.js";

import UploadImg from "../middleware/uploadImg.js";
import { authentication, admin, customer } from "../middleware/auth.js";

const productRoute = express.Router();

productRoute.post("/product/new", authentication, admin, UploadImg, Create);
productRoute.get("/product", authentication, admin, All);
productRoute.get("/product/:_id", authentication, admin, Detail);
productRoute.put("/product/:_id", authentication, admin, UploadImg, Update);
productRoute.patch("/product/restore/:_id", authentication, admin, Restore);
productRoute.delete("/product/remove/:_id", authentication, admin, Remove);

productRoute.get("/customer/product", List); // customer
productRoute.get(
  "/customer/product/:_id",
  authentication,
  customer,
  ProductDetail
); // customer

export default productRoute;
