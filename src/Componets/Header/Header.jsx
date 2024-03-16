import userIcon from '../../assets/images/Frame 5.png'
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li>
                        <a>Recipe</a>
                      
                        </li>
                        <li><a>Search</a></li>
                        <li><a>About</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl md:text-3xl">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li>
                  
                        <summary>Recipes</summary>
                     
                      
                    </li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                 

                    </ul>
                </div>
                
                <div className="navbar-end">
                        <div className="relative">
            <input type="text" placeholder="Search" className="input input-bordered pl-10 w-24 md:w-auto" />
            <svg className="absolute top-0 left-0 mt-4 ml-2 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </div>
                    <img className="ml-2" src={userIcon} alt="" />
                </div>
</div>
        </div>
    );
};

export default Header;