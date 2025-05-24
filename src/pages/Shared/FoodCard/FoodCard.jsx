const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex flex-col h-full bg-white rounded-lg overflow-hidden border border-gray-200">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-64 md:h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-[#101828] text-white text-xs sm:text-sm px-3 py-1 rounded">
          ${price}
        </div>
      </div>

      <div className="bg-gray-50 p-6 flex flex-col items-center text-center flex-grow">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
          {name}
        </h4>
        <p className="text-sm text-gray-600 mb-4">{recipe}</p>
        <button className="border border-yellow-600 text-yellow-600 uppercase text-xs sm:text-sm tracking-wider py-2 px-6 rounded hover:bg-yellow-600 hover:text-white transition">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
