import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex flex-row shadow-navbar fixed w-full py-4 px-14 bg-white z-50 justify-between">
      <Link href="/">
        <button className="py-2.5 px-6 rounded-full bg-bgButton text-sm font-bold text-seed">
          Home
        </button>
      </Link>
      <div className="input-group relative flex flex-row self-center">
        <input
          type="search"
          className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <button className="bg-tertiary px-3">
          <FiSearch color="white" />
        </button>
      </div>
      <div className="flex flex-row items-center">
        <p className="text-blueCustom">Rubem</p>
        <div className="w-10" />
        <button className="px-6 py-2.5 rounded-full bg-blueCustom text-white">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
