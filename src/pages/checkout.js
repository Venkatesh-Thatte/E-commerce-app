import Image from "next/image";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import Currency from "../components/Currency";

function checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:mx-5 2xl:mx-30 mx-0 lg:flex max-w-screen-2xl">
        <div>
          <Image
            src="https://links.papareact.com/ikj"
            width={950}
            height={250}
            style={{ objectFit: "contain", height: "auto" }}
            alt="checkout banner"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty."
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span>
                  <Currency quantity={total} currency="USD" />
                </span>
              </h2>

              <button
                disabled={!session}
                className={`button mt-2 font-semibold ${
                  !session
                    ? "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed font-semibold"
                    : ""
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;
