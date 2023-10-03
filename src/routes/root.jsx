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
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
        </style>

            <div className="topPart">
                <h1>fake store</h1>
                <p className="sub" ><i>none of this is real.</i></p>
            </div>

            <div className="categoryList">
                {categoryList.map(category => {
                    return (<p className="sectionLinks" key={category}>
                        <Link className="categoryLinks" to={`/${category}`}>
                            {category}
                        </Link>
                    </p>)
                })}
            </div>
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
