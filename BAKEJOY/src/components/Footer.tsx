export default function Footer() {
    return (
        <footer className="bg-[var(--bake-deep)] text-white py-12">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                <div>
                    <div className="h-playful text-2xl">BAKEJÖY</div>
                    <p className="mt-3 text-sm text-gray-200">Handmade sweets for every moment.</p>
                </div>

                <div className="hidden md:block">
                    <h5 className="font-semibold">Links</h5>
                    <ul className="mt-3 space-y-2 text-sm text-gray-200">
                        <li>Products</li>
                        <li>Journal</li>
                        <li>About</li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold">Subscribe</h5>
                    <form className="mt-3 flex">
                        <input placeholder="Your email" className="flex-1 p-2 rounded-l-md text-gray-800" />
                        <button className="bg-[var(--bake-coral)] px-4 rounded-r-md">Join</button>
                    </form>
                </div>
            </div>

            <div className="text-center text-sm text-orange-100 mt-8">© {new Date().getFullYear()} BakeJoy</div>
        </footer>
    );
}
