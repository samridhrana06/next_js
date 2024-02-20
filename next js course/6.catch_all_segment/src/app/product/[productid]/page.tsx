export default function Productdetails({ params }: { params: { productid: string } }) {
    return <h1>Details about the Product {params.productid}</h1>;
}
