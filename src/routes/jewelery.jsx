import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";


export async function loader() {
    const url = 'https://fakestoreapi.com/products/category/jewelery'
    const productList = await fetch(url)
        .then(response => response.json());

    return { productList }
}



export default function Jewelery() {
    const {productList} = useLoaderData();
    console.log("PRODUCT LIST: ", productList);

    return(
        <>
            <h2>Jewelery</h2>

            <div className="productDiv">
                {productList.map(product => {
                    return <p className="products jeweleryProducts" key={product.id}>
                        <img src={product.image} alt="productImage"/>
                        <br />
                        {product.title}
                        <br />
                        ${product.price}
                    </p>
                })}
            </div>
            <Link className="refreshLink" to="/">refresh page</Link>
        </>
    )
}
