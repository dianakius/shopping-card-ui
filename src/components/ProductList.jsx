const ProductList = ({products}) => {
  return (
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2 ">{product.description}</p>
            <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
  )
}

    export default ProductList;