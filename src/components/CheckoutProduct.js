import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  image,
  rating,
  category,
  hasPrime,
}) {
  console.log("id===", id);
  const dispatch = useDispatch();
  const addItemToBasket = () => {};
  const removeItemFrmBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5 my-4">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <StarIcon className="h-5 text-yellow-500" />;
            })}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="INR" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col my-auto space-y-2 justify-self-end">
        {/* <button className="button" onClick={addItemToBasket}>
          Add to basket
        </button> */}
        <button className="button" onClick={removeItemFrmBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
