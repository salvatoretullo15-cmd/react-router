import { useState, useEffect } from "react";

export default function Prodotti() {

    const [products, setProducts] = useState([])

    useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => {
                    setProducts(data); 
                    console.log(data); 
                })
                .catch(error => console.error("Errore fetch:", error));
    }, []);
    
    return(
        <>
            <div className="container">
                <h1>I nostri prodotti</h1>
                <div className="products d-flex justify-content-center row">
                    {products.map(product => (
                        <div key={product.id} className="card col-md-2 m-3">
                            <img src={product.image} alt={product.title} />
                            <h2 className="fs-6">{product.title}</h2>
                            <p className="">{product.price}$</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}