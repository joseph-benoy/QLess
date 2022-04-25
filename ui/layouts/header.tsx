import {BiMenu} from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";
import { linkTypes } from "../utils/constants";

function HeaderNav() {
    const toggleNavMenu = () => {
        let collapse = document.querySelector("#navbar-collapse");
        collapse!.classList.toggle("hidden");
        collapse!.classList.toggle("flex");
      };
      const router = useRouter();
    return ( 
        <nav className="bg-white py-5 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link href='/'>
            	<a><span className="font-bold text-3xl text-green-500 cursor-pointer">QLess</span></a>
            </Link>
            <button onClick={toggleNavMenu} className="border border-solid border-green-500 px-3 py-2 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
              <BiMenu className="text-green-500"/>
            </button>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
		  	<Link href='/'>
				<a className={router.pathname==='/'?"p-2 lg:px-4 lg:mx-2 text-white rounded bg-green-500":"p-2 lg:px-4 lg:mx-2 text-green-500 text-center border border-transparent rounded hover:bg-green-100 hover:text-green-700 transition-colors duration-300"}>Home</a>
            </Link>
			<Link href='/signup'>
				<a className={router.pathname==='/signup'?"p-2 lg:px-4 lg:mx-2 text-white rounded bg-green-500":"p-2 lg:px-4 lg:mx-2 text-green-500 text-center border border-transparent rounded hover:bg-green-100 hover:text-green-700 transition-colors duration-300"}>Signup</a>
            </Link>
			<Link href='/login'>
				<a className={(router.pathname==='/login'?"p-2 lg:px-4 lg:mx-2 text-white rounded bg-green-500":"p-2 lg:px-4 lg:mx-2 text-green-500 text-center border border-transparent rounded hover:bg-green-100 hover:text-green-700 transition-colors duration-300")+' lg:border lg:border-solid lg:border-green-500'}>Login</a>
			</Link>
		  </div>
        </div>
      </nav>
     );
}

export default HeaderNav;