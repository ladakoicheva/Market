import { authorize } from "../../middlewares/auth.js";
import { Router } from "express";
import { addProduct } from "./productsController.js";
import { getUserProducts } from "./productsController.js";
import { getFile } from "../../utils/fs.js";
import { getErrorReq } from "../../utils/responseHelpers.js";


export const productRouter = Router();

productRouter.post('/add', authorize, addProduct);
productRouter.get('/get', authorize, getUserProducts)
productRouter.get('/categories', async (req,res) => {
  const categories = await getFile('datas', 'categories', 'categories.json');
  if (categories.ok) return res.status(200).json(categories);
  return res.status(500).json(getErrorReq(null));
})


// data, fileName, ...url