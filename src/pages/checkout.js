import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

function Checkout() {
  const [session] = useSession();
  const items = useSelector(selectItems);
  const total = items.reduce(function (sum, current) {
    return sum + current.price;
  }, 0);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-md">
          <Image
            src="https://links.papareact.com/ikj"
            objectFit="contain"
            width={1000}
            height={250}
          />
          <div className="flex flex-col bg-white p-5">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your basket is empty" : "Shopping basket"}
            </h1>
            {items.map((item, index) => {
              return (
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  category={item.category}
                  rating={item.rating}
                  hasPrime={item.hasPrime}
                />
              );
            })}
          </div>
        </div>
        {/* Right */}

        {items.length ? (
          <>
            <div className="flex flex-col bg-white p-10 shadow-md m-5">
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :
                <span>
                  <Currency quantity={total} currency="INR" />
                </span>
              </h2>
              <button
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 text-gray-200 cursor-not-allowed border-gray-200"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Checkout;
