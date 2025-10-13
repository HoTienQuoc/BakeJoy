const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo bên trái */}
                    <div className="text-3xl font-extrabold">
                        <a href="#"><h1 className="text-2xl font-bold text-pink-600">BakeJoy</h1>
                        </a>
                    </div>


                    {/* Menu ở giữa */}
                    <div className="hidden md:flex space-x-8 mx-auto">
                        <a href="#" className="text-gray-700 hover:text-pink-600">About</a>
                        <a href="#" className="text-gray-700 hover:text-pink-600">Products</a>
                        <a href="#" className="text-gray-700 hover:text-pink-600">Blog</a>
                        <a href="#" className="text-gray-700 hover:text-pink-600">Contact</a>
                    </div>

                    {/*Register bên phải*/}
                    <div className="flex-shrink-0">
                        <a
                            href="#"
                            className="bg-white text-pink-600 border border-pink-600 px-4 py-2 rounded-full hover:bg-pink-600 hover:text-white"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;