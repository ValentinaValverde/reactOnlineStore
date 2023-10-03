import { useLoaderData, Link, Outlet } from "react-router-dom"


export async function loader() {
    const url = 'https://fakestoreapi.com/products/categories'
    const categoryList = await fetch(url)
        .then(response => response.json());

    return { categoryList }
}


export default function Root() {

    const { categoryList } = useLoaderData();
    console.log(categoryList);

    return (
        <>
            <h1>Category List</h1>
            <ul>
                {categoryList.map(category => {
                    return (<li key={category}>
                        <Link to={`/${category}`}>
                            {category}
                        </Link>
                    </li>)
                })}
            </ul>
            <Outlet />
        </>
    )
}


   // fetch()
    //     .then(res => res.json())  //response.json
    //     .then(json => console.log(json))
        


    // fetch('https://fakestoreapi.com/products/category/${}')
    //     .then(res=>res.json())
    //     .then(json=>console.log(json))
