import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import Currency from "../components/Currency";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 p-5 space-y-4 sm:space-y-0">
      <div className="flex justify-center items-center">
        <Image
          src={image}
          height={150}
          width={150}
          style={{ objectFit: "contain" }}
          alt={title}
          priority
        />
      </div>

      <div className="sm:col-span-3 mx-5">
        <p className="font-semibold">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="USD" />

        {hasPrime && (
          <div className="flex items-center space-x-2 mt-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReY17b7xhf79WMl-_HGPJs7DJcCB_fJY8xIA&s"
              alt="Prime delivery badge"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:justify-center sm:items-end space-y-2">
        <button
          className="button w-full md:w-[150px]   text-center font-semibold"
          onClick={addItemToBasket}
        >
          Add to Basket
        </button>
        <button
          className="button w-full md:w-[150px]  text-center font-semibold"
          onClick={removeItemFromBasket}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
