import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <div className="container-fluid row text-center">
                <h1>Premi per i vincitori</h1>
                <div>
                    <div className="row row-cols-1 row-cols-md-5 g-5">
                        {products.map(product => (
                            <div className="col" key={product.id}>
                                <div className="card h-100 align-items-center">
                                    <div className="img-card h-50 mt-5">
                                        <img src={product.image} class="card-img-top mb-5" alt={product.text}/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">{product.title}</h4>
                                        <p className="card-text">prezzo in caso di vincita: 0.00 $ 🤑</p>
                                        <p className="card-text">prezzo in caso di perdita: {product.price} $</p>
                                        <Link to={`/prodotti/${product.id}`}>scheda prodotto</Link>
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