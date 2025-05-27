import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (food) => {
    console.log(food, user?.email);
    if (user && user.email) {
      //send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert(`Item added to cart successfully , ${name}`);
        }
      });
    } else {
      alert("Please login to add items to the cart");
      navigate("/login", { state: { from: location } });
    }
  };
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
        <button
          onClick={() => handleAddToCart(item)}
          className="border border-yellow-600 text-yellow-600 uppercase text-xs sm:text-sm tracking-wider py-2 px-6 rounded hover:bg-yellow-600 hover:text-white transition"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
