import type { productI } from "../../features/product/types"
import style from './ProductCard.module.css'

type props ={
  product:productI
}

export default function ProductCard({product}:props) {
  return (
    <div className={style.card }>
      <h1>{product.name}</h1>
      <p>{product.category}</p>
      <p>{product.price}</p>
    </div>
  )
}
