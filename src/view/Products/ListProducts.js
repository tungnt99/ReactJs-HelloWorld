import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom';
import './ListProduct.css';

export default function ListProducts(){
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useState(() => {
        const getProducts = async() =>{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            console.log(response);
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
                console.log(loading);
            }
            return () => {
                componentMounted = false;
            }

        }
        getProducts();
    })

    const Loading = () => {
        return(
            <>
                <div className='col-md-12'>
                    <Skeleton height={50}/>
                </div>
            </>
        )
    }
    const ShowProducts = () => {
        return(
            <>  
                {filter && filter.length > 0 && filter.map((product, index) => {
                    return(
                        <div className="cart-item col-md-3 mb-4">
                        <div className="card cart-item-body h-100 text-center p-4" key={index}>
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title.substring(0, 12)}</h5>
                                <p className="card-price lead fw-bold">Price: {product.price}$</p>
                                <NavLink to={`/products/${product.id}`} className="btn btn-primary">Buy now</NavLink>
                            </div>
                        </div>
                    </div>
                    )
                })}
               
            </>
        )
    }
  
    return (
        <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h2 className='text-center display-6 fw-bolder'>Latest Products</h2>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>

    )
   

}
