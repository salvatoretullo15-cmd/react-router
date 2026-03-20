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
                <div>
                    <div className="row row-cols-1 row-cols-md-5 g-5">
                        {products.map(product => (
                            <div className="col" key={product.id}>
                                <div className="card h-100">
                                    <div className="img-card">
                                        <img src={product.image} class="card-img-top" alt={product.text}/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.price}</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary">
                                            Last updated 3 mins ago
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}