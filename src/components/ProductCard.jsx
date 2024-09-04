import { Link } from "react-router-dom";

function ProductCard({ item }) {
  const { thumbnail, category, title, price, id } = item;

  return (
    <Link
      to={`/products/${id}`}
      className="lg:w-1/4 md:w-1/2 p-4 w-full shadow"
    >
      <div className="border border-white">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-contain object-center w-full h-full block"
            src={thumbnail}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-white text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 className="text-gray-400 title-font text-lg font-medium">
            {title}
          </h2>
          <p className="mt-1">${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;