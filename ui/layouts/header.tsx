import {BiMenu} from "react-icons/bi";

function HeaderNav() {
    const toggleNavMenu = () => {
        let collapse = document.querySelector("#navbar-collapse");
        collapse!.classList.toggle("hidden");
        collapse!.classList.toggle("flex");
      };
      const style= {fontSize:"2rem !important"}
    return ( 
        <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="#" className="font-bold text-xl text-indigo-600" style={style}>QLess</a>
            <button onClick={toggleNavMenu} className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
              <BiMenu/>
            </button>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Signup</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Login</a>
          </div>
        </div>
      </nav>
     );
}

export default HeaderNav;