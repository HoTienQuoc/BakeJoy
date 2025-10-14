const HeaderSection = () => {
    return (
        <>
            <nav className="w-full px-6 py-4 bg-white shadow flex items-center justify-between relative">

                 {/* Logo bên trái  */}
                <div className="flex-shrink-0 text-2xl font-bold">
                    BAKEJÖY
                </div>

                 {/* Menu giữa (absolute center)  */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-gray-700 font-medium">
                    <a href="#" className="hover:text-black">ABOUT</a>
                    <a href="#" className="hover:text-black">PRODUCTS</a>
                    <a href="#" className="hover:text-black">BLOG</a>
                    <a href="#" className="hover:text-black">CONTACT</a>
                </div>

                 {/* Register bên phải  */}
                <div className="flex-shrink-0">
                    <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                        Register
                    </a>
                </div>

            </nav>

        </>
    );
}

export default HeaderSection;