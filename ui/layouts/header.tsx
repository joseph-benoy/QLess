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
            	<span className="font-bold text-3xl text-indigo-600">QLess</span>
            </Link>
            <button onClick={toggleNavMenu} className="border border-solid border-indigo-600 px-3 py-2 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
              <BiMenu className="text-indigo-600"/>
            </button>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
		  	<Link href='/'>
				<a className={router.pathname==='/'?linkTypes.active:linkTypes.inActive}>Home</a>
            </Link>
			<Link href='/signup'>
				<a className={router.pathname==='/signup'?linkTypes.active:linkTypes.inActive}>Signup</a>
            </Link>
			<Link href='/login'>
				<a className={(router.pathname==='/login'?linkTypes.active:linkTypes.inActive)+' lg:border lg:border-solid lg:border-indigo-600'}>Login</a>
			</Link>
		  </div>
        </div>
      </nav>
     );
}

export default HeaderNav;