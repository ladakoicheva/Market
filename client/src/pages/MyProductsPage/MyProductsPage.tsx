
import { useAppSelector } from '../../redux/hooks';
import style from './MyProductsPage.module.css';
import Loader from '../../components/Loader/Loader';
import { useMemo } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

export default function MyProductsPage() {
  const { products } = useAppSelector((s) => s.productData);
  const {isLoadingApp} = useAppSelector((s)=>s.user)
console.log(products)

  const cards = useMemo(() => {
    return products.map((p)=><ProductCard product={p} key={p.id}/>)
  },[products])
  if (isLoadingApp ) return <Loader />

  console.log(products);
  return (
    <div className={style.grid_template_columns}>
      {products.length > 0 ?  cards  : <h1>No products</h1>}
    </div>
  )
}
