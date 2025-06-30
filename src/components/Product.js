import Image from "next/image";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Currency from "../components/Currency";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(null);
  const [hasPrime] = useState(Math.random() < 0.5);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
  }, []);

  const dispatch = useDispatch();

  if (rating === null) return null;

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };

    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div className="w-full h-[250px] flex item">
        <Image
          src={image}
          height={200}
          width={200}
          style={{ objectFit: "contain" }}
          className="mx-auto mb-2"
          alt={title}
          priority
        />
      </div>
      <h4 className="font-medium line-clamp-2">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5 font-medium">
        <Currency quantity={price} currency="USD" />
      </div>

      {hasPrime ? (
        <div className="flex items-center space-x-2 mb-5 min-h-[40px]">
          <img
            className="w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReY17b7xhf79WMl-_HGPJs7DJcCB_fJY8xIA&s"
            alt="Prime"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      ) : (
        <div className="mb-5 min-h-[40px]" />
      )}

      <button
        onClick={addItemToBasket}
        className="mt-auto button font-semibold"
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
