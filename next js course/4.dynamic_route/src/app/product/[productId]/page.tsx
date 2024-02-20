export default function Productdetails({params} : {
    params:{product:string};
}) {
    return <h1>details about the Product {params.productId}</h1>;
}

