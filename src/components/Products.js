import React, { useEffect } from 'react'
import Loading from './shared/Loading';
import Product from './shared/Product';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/products/productsAction';

// Style
import styles from "./products.module.css";


const Products = () => {

    const proData = useSelector(state => state.productsState);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!proData.products.length) dispatch(fetchProducts())
    }, [])

  return (
    <div className={styles.container}>
            {proData.loading ?
                <Loading />
                :
                proData.error ?
                <p>{proData.error}</p>
                :
                proData.products.map(item => <Product key={item.id} productData={item} />)
            }
    </div>
  )
}

export default Products