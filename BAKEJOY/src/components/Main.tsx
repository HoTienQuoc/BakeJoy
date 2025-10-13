import React from "react";

const Main = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#FDE8DD]">
            <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16">
                {/* Background wave */}
                <div className="absolute top-0 left-0 w-full h-40 bg-[#FFF4EE] rounded-b-[100px]" />

                {/* Left - bread images */}
                <div className="relative flex-1 flex justify-center items-center mt-12 md:mt-0">
                    <div className="relative w-[280px] h-[280px]">
                        <div className="absolute inset-0 bg-[#FBD6C6] rounded-full opacity-80 scale-110 blur-2xl"></div>
                        <img
                            src="/b4cb553f-b00a-407c-89d3-d9b20c82dc55.png"
                            alt="Bread 1"
                            className="absolute top-0 left-8 w-40 rotate-[8deg] drop-shadow-lg"
                        />
                        <img
                            src="/b4cb553f-b00a-407c-89d3-d9b20c82dc55.png"
                            alt="Bread 2"
                            className="absolute top-20 left-24 w-40 rotate-[-10deg] drop-shadow-lg"
                        />
                        <img
                            src="/b4cb553f-b00a-407c-89d3-d9b20c82dc55.png"
                            alt="Bread 3"
                            className="absolute top-40 left-4 w-40 rotate-[5deg] drop-shadow-lg"
                        />
                    </div>
                </div>

                {/* Right - text + corrected form */}
                <div className="flex-1 text-center md:text-left space-y-6 z-10">
                    <h2 className="text-[#B24E3E] text-4xl md:text-5xl font-extrabold leading-snug">
                        Ready to taste
                        <br />
                        the magic?
                    </h2>
                    <p className="text-[#5C6666] text-sm md:text-base leading-relaxed max-w-md">
                        Take the first step towards sweet satisfaction – place your order now
                        or subscribe to our newsletter for updates and promo.
                    </p>

                    {/* Form: input on its own row, button below aligned right */}
                    <form onSubmit={(e) => e.preventDefault()} className="max-w-lg space-y-3">
                        <div className="bg-white rounded-2xl border border-gray-200 px-4 py-2">
                            <input
                                type="email"
                                placeholder="Enter your email address ..."
                                className="w-full bg-transparent px-2 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-[#254E4E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#1C3D3D] transition"
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Main;
