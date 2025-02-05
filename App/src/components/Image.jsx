import product from "../constants/product";
export function Image() {
    return (
        <img style={{ width: '180px', height: '180px', padding: '10px', borderRadius: '20px'}} src={product.imageUrl} alt={product.name} />
    )
}