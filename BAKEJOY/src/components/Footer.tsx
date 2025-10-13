export default function Footer() {
    return (
        <footer className="bg-orange-600 text-white py-12">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                <div>
                    <h4 className="font-serif text-2xl mb-2">BakeJoy</h4>
                    <p className="text-sm">
                        Bringing happiness in every bite. Visit our stores or shop online for
                        your next favorite treat.
                    </p>
                </div>

                <div>
                    <h5 className="font-semibold mb-2">Quick Links</h5>
                    <ul className="space-y-1 text-sm">
                        <li>About Us</li>
                        <li>Shop Cakes</li>
                        <li>Testimonials</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold mb-3">Subscribe</h5>
                    <p className="text-sm mb-3">Get updates and promotions</p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 p-2 rounded-l-md text-gray-800"
                        />
                        <button
                            type="submit"
                            className="bg-white text-orange-600 px-4 rounded-r-md font-semibold"
                        >
                            →
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center text-sm text-orange-100 mt-8">
                © {new Date().getFullYear()} BakeJoy. All rights reserved.
            </div>
        </footer>
    );
}
