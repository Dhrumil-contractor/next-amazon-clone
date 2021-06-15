import Image from "next/image";
import { SearchIcon, ShoppingCartIcon, MenuIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header>
      {/* Top nav */}
      <div className="bg-amazon_blue flex items-center p-1 flex-grow py-2 space-x-3">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={100}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 whitespace-nowrap">
          <div className="link" onClick={!session ? signIn : signOut}>
            <p>{session ? `Hello ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & list</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& orders</p>
          </div>
          <div
            className="relative flex items-center link"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10 link" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2">
        <p className="flex items-center link">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's deals</p>
        <p className="hidden lg:inline-flex link">Electronics</p>
        <p className="hidden lg:inline-flex link">Foods & Grocery</p>
        <p className="hidden lg:inline-flex link">Prime</p>
        <p className="hidden lg:inline-flex link">Buy Again</p>
        <p className="hidden lg:inline-flex link">Helth & Personal care</p>
        <p></p>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
