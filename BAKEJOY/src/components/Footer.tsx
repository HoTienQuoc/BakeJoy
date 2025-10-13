const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-10 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

                {/* Left Column */}
                <div className="flex flex-col space-y-4 md:w-1/3">
                    {/* Logo Text */}
                    <h1 className="text-2xl font-bold text-pink-600">BakeJoy</h1>

                    {/* Contact Info */}
                    <div className="space-y-1 text-sm">
                        <p className="font-medium">(+123) 456 7890</p>
                        <p>bakejoy.cakeshop@gmail.com</p>
                    </div>
                </div>

                {/* Right Columns (Links) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-2/3 text-sm">

                    {/* Column 1 */}
                    <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Company</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-pink-600">About Us</a></li>
                            <li><a href="#" className="hover:text-pink-600">Shop Cakes</a></li>
                            <li><a href="#" className="hover:text-pink-600">Testimonials</a></li>
                            <li><a href="#" className="hover:text-pink-600">Store Locations</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Resources</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-pink-600">Cake Journal</a></li>
                            <li><a href="#" className="hover:text-pink-600">Recipes</a></li>
                            <li><a href="#" className="hover:text-pink-600">Our Story</a></li>
                            <li><a href="#" className="hover:text-pink-600">Our Values</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Support</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-pink-600">FAQ</a></li>
                            <li><a href="#" className="hover:text-pink-600">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-pink-600">Refund Policy</a></li>
                            <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>

    );

}

export default Footer;