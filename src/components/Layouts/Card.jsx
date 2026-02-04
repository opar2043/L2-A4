export default function Card({ item }) {
  return (
    <div className="border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition bg-white">
      {/* Image with availability overlay */}
      <div className="h-[200px] w-full overflow-hidden relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        
        {/* Availability overlay */}
        {!item.availability && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-sm font-medium px-4 py-2 bg-black bg-opacity-70 rounded">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Name */}
        <h3 className="font-semibold text-lg text-black">
          {item.name}
        </h3>

        {/* Category + Time */}
        <div className="flex justify-between text-sm text-gray-500">
          <span>{item.category}</span>
          <span>{item.time} min</span>
        </div>

        {/* Price */}
        <p className="text-black font-bold text-xl">
          ${item.price}
        </p>

        {/* Add to Cart Button */}
        <button
          disabled={!item.availability}
          className={`w-full py-2 rounded-sm text-sm font-medium transition ${
            item.availability
              ? "bg-[#F9BE5E] hover:bg-[#e6ad4d] text-black"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}