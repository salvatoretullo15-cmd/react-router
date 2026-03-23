import { useParams } from "react-router-dom"

export default function Prodotto(){
    const {id} = useParams()
    console.log(id);
    

    return(
        <>
        <div>
            <h2>id prodotto: {id}</h2>
        </div>
        </>
    )
}