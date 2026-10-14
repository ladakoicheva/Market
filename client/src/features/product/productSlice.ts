import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { stateI } from "./types";
import { addProduct } from "../../api/products";
import type { AppDispatch } from "../../redux/store";
import type { productI } from "./types";
import { getUserProducts } from "../../api/products";
import { getCategories } from "../../api/products";

const initialState:stateI = {
  
  products: [],
  categories:[],

}



const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateAddProduct: (state,action) => {
      const newProduct = action.payload;
      state.products.push(newProduct);
    },
    updateShowUserProducts: (state, action) => {
      state.products = action.payload
    },
    updateProductNoUser: (state) => {
      state.products = []
    },
    updateCategories: (state, action) => {
      state.categories = action.payload
    }
  }
})

export const getUserProductData = createAsyncThunk
  <{ ok: Boolean },
    void,
  { dispatch: AppDispatch }
>(
    'products/add',
    
  async (_,{dispatch}) => {
    const res = await getUserProducts()
    if (!res.ok) return { ok: false, e: res.e };
     dispatch(updateShowUserProducts(res.data));
    return {ok:true}
  },

)


export const addProductData = createAsyncThunk<
  { ok: boolean, data: productI }, 
  Omit<productI, "owner" | "id">,
  { dispatch: AppDispatch }
>(
  'products/add',
  async (newProduct, { dispatch, rejectWithValue }) => {
    const res = await addProduct(newProduct);
    
    if (!res.ok) {
      return rejectWithValue({ ok: false, e: res.e });
    }
    
    dispatch(updateAddProduct(newProduct));
    return { ok: true, data: res.data };
  }
);

export const getCategoriesData = createAsyncThunk(
  'products/getCategories',
  async (_, { dispatch, rejectWithValue }) => {
    const res = await getCategories()
    
    if (!res.ok) {
      return rejectWithValue({ ok: false, e: res.e });
    }
    
    dispatch(updateCategories(res.data));
    return { ok: true, data: res.data };
  }
);


export default productSlice.reducer;
export const {updateAddProduct,updateProductNoUser,updateShowUserProducts,updateCategories} = productSlice.actions