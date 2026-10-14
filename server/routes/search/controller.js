import { setFileJSON } from "../../utils/fs.js";
import { getErrorReq,getSuccessReq } from "../../utils/responseHelpers.js";
import { getFile } from "../../utils/fs.js";
import categories from '../../datas/categories/categories.json' with {type:'json'}

export const addProductCategories = async (id, email, category) => {
  const categ = category.trim()
  // if exist category (categories)
  const categoriesFile = await getFile('datas', 'products', categ + '.json');
  if (!categoriesFile.ok) return null;
  const data = { id, email };
  
  categoriesFile.data.push(data)
  const res = await setFileJSON(categoriesFile.data, 'datas', 'products', categ + '.json');
  console.log(res);
}

// { "id": "901e4618-4c58-406d-8505-f1e3e2ab8dd8", "email": "koichevalada@gmail.com" }