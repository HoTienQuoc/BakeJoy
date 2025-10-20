import React from "react";
import { ShoppingBag } from "lucide-react";

import image1 from "../images/deva-williamson-2.jpg";
import image2 from "../images/deva-williamson-1.jpg";
import image3 from "../images/katie.jpg";

interface Product {
    name: string;
    price: string;
    image: string;
}

const products: Product[] = [
    {
        name: "Descendant Choco Chips",
        price: "$15",
        image: image1,
    },
    {
        name: "Classic Vanilla Chiffon Cake",
        price: "$25",
        image: image2,
    },
    {
        name: "Choco Mousse Extravaganza",
        price: "$35",
        image: image3,
    },
];

const SignatureProducts: React.FC = () => {
    return (
        <section className="bg-[#FBE4D9] py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#b5432a] mb-12">
                    Our Signature
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
                    {products.map((p, index) => (
                        <div
                            key={index}
                            className="bg-[#FBE4D9] border-8 border-[#FBE4D9] rounded-[2rem] shadow-md p-4"
                            style={{
                                clipPath:
                                    "polygon(8% 0, 92% 0, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0 92%, 0 8%)",
                            }}
                        >
                            {/* Ảnh */}
                            <img
                                src={p.image}
                                alt={p.name}
                                className="rounded-lg w-full h-64 object-cover mb-6"
                            />

                            {/* Hàng 1: Tên + Icon */}
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-[#2E5D55] text-left">
                                    {p.name}
                                </h3>
                                <button
                                    className="bg-[#2E5D55] p-3 rounded-md flex items-center justify-center hover:opacity-90 transition"
                                    aria-label={`Add ${p.name} to cart`}
                                >
                                    <ShoppingBag size={20} className="text-[#FBE4D9]" />
                                </button>
                            </div>

                            {/* Hàng 2: Giá + More details */}
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-semibold text-[#b5432a]">{p.price}</p>
                                <a
                                    href="#"
                                    className="text-sm text-[#2E5D55] underline hover:text-[#b5432a]"
                                >
                                    More Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SignatureProducts;
