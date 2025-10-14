const FooterSection = () => {
    return (
        <footer className="bg-white py-12 px-8 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

                {/* <!-- Left Column --> */}
                <div className="flex flex-col space-y-3 text-gray-700 text-sm">
                    <span className="text-xl font-bold text-gray-900">BAKEJÖY</span>
                    <span>(+123) 456 7890</span>
                    <span>bakejoy.cakeshop@mail.com</span>
                </div>

                {/* <!-- Right Columns --> */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-700 text-sm">

                    {/* <!-- Column 1 --> */}
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-gray-900">About Us</a>
                        <a href="#" className="hover:text-gray-900">Shop Cakes</a>
                        <a href="#" className="hover:text-gray-900">Testimonials</a>
                        <a href="#" className="hover:text-gray-900">Store Locations</a>
                    </div>

                    {/* <!-- Column 2 --> */}
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-gray-900">Cake Journal</a>
                        <a href="#" className="hover:text-gray-900">Recipes</a>
                        <a href="#" className="hover:text-gray-900">Our Story</a>
                        <a href="#" className="hover:text-gray-900">Our Values</a>
                    </div>

                    {/* <!-- Column 3 --> */}
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-gray-900">FAQ</a>
                        <a href="#" className="hover:text-gray-900">Terms of Service</a>
                        <a href="#" className="hover:text-gray-900">Refund Policy</a>
                        <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                    </div>

                </div>
            </div>
        </footer>

    );
}

export default FooterSection;