import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Prodotto(){
    const[product,setProduct]=useState(null)
    const {id} = useParams()
    console.log(id);

    const api_url=`https://fakestoreapi.com/products/${id}`
    
    useEffect(()=>{
      fetch(api_url)
      .then(res=>res.json())
      .then(data=> {
        console.log(data);
        setProduct(data)
        
      })
    },[])

    if (!product) {
        
        <h2>Caricamento in corso...</h2>;
        return 
    }
    
    return(
        <>
           <div class="container row">
                <div class="col">
                    <div className="card h-100 align-items-center">
                        <div className="img-card h-50 mt-5">
                           <img src={product.image} class="card-img-top mb-5" alt={product.text}/>
                        </div>
                        <div className="card-body">
                            <h3 class="card-title">{product.title}</h3>
                            <p class="card-text">{product.category}</p>
                            <p class="card-text">{product.description}</p>
                            <p class="card-text">{product.price}$</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}