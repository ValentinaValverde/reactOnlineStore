import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";


export async function loader() {
    const url = 'https://fakestoreapi.com/products/category/electronics'
    const productList = await fetch(url)
        .then(response => response.json());

    return { productList }
}



export default function Electronics() {
    const {productList} = useLoaderData();
    console.log("PRODUCT LIST: ", productList);

    return(
        <>
            <h2>Electronics</h2>

            <div className="productDiv">
                {productList.map(product => {
                    return <p className="products" key={product.id}>
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
