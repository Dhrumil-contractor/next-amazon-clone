import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATINGS = 5,
  MIN_RATINGS = 1;

function Product({ id, title, price, description, image, category }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATINGS - MIN_RATINGS + 1)) + MIN_RATINGS
  );

  const addItemsToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      image,
      category,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10" key={id}>
      <p className="absolute top-2 right-2 text-xs italic text-gray-500">
        {category}
      </p>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => {
            return <StarIcon className="h-5 text-yellow-500" />;
          })}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="INR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
        </div>
      )}
      <button
        className=" button"
        onClick={() => router.push("/checkout")}
        onClick={addItemsToBasket}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
