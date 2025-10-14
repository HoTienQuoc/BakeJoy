import image1 from '../images/image1.png'

const Section7 = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Subscribed!")
  }

  return (
    <div className="relative flex justify-between items-center h-screen px-10 bg-white text-black font-sans overflow-hidden">
      {/* SVG Background Layer */}
      <div className="absolute inset-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 960 540"
          width="960"
          height="540"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <rect x="0" y="0" width="960" height="540" fill="#002233" />
          <path
            d="M0 109L6.3 103.5C12.7 98 25.3 87 38.2 84.8C51 82.7 64 89.3 76.8 85.3C89.7 81.3 102.3 66.7 115.2 61.2C128 55.7 141 59.3 153.8 66.8C166.7 74.3 179.3 85.7 192 94C204.7 102.3 217.3 107.7 230.2 107.7C243 107.7 256 102.3 268.8 92.7C281.7 83 294.3 69 307.2 69C320 69 333 83 345.8 87.8C358.7 92.7 371.3 88.3 384 82C396.7 75.7 409.3 67.3 422.2 66.7C435 66 448 73 460.8 77C473.7 81 486.3 82 499.2 83.3C512 84.7 525 86.3 537.8 89.2C550.7 92 563.3 96 576 100C588.7 104 601.3 108 614.2 106.8C627 105.7 640 99.3 652.8 86.8C665.7 74.3 678.3 55.7 691.2 60.5C704 65.3 717 93.7 729.8 97C742.7 100.3 755.3 78.7 768 71.7C780.7 64.7 793.3 72.3 806.2 69.8C819 67.3 832 54.7 844.8 47.5C857.7 40.3 870.3 38.7 883.2 50.7C896 62.7 909 88.3 921.8 90.5C934.7 92.7 947.3 71.3 953.7 60.7L960 50L960 0L0 0Z"
            fill="#0066FF"
            strokeLinecap="round"
            strokeLinejoin="miter"
          />
        </svg>
      </div>

      {/* Left: Image with blob */}
      <div className="relative w-[500px] h-[500px] flex-shrink-0 z-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <path
            fill="#FF0066"
            d="M47,-50C60.3,-33.7,70.1,-16.8,71.1,1C72.1,18.9,64.3,37.7,51,49.7C37.7,61.7,18.9,66.8,-1.1,67.8C-21,68.9,-42.1,66,-57,54C-71.9,42.1,-80.8,21,-81.6,-0.8C-82.4,-22.7,-75.2,-45.3,-60.3,-61.7C-45.3,-78.1,-22.7,-88.1,-2.9,-85.2C16.8,-82.3,33.7,-66.4,47,-50Z"
            transform="translate(100 100)"
          />
        </svg>
        <img
          src={image1}
          alt="Ảnh của tôi"
          className="absolute top-1/2 left-1/2 w-[280px] h-[280px] object-cover -translate-x-1/2 -translate-y-1/2 rotate-[-30deg]"
        />
      </div>

      {/* Right: Text + Form */}
      <div className="max-w-[700px] flex flex-col justify-center p-8 ml-12 z-10">
        <div className="mb-6">
          <span className="block text-[3.8rem] font-bold mb-2 text-white">Ready to taste</span>
          <span className="block text-[3.8rem] font-bold mb-2 text-white">the magic?</span>
          <span className="block text-lg leading-relaxed text-white">
            Take the first step towards sweet satisfaction – place your order now or subscribe to our newsletter for updates and promo.
          </span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[450px]">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="px-4 py-3 text-lg rounded-md outline-none border-none bg-amber-600 text-white placeholder-white"
          />
          <button
            type="submit"
            className="self-end px-6 py-3 text-lg rounded-md bg-[#ff0066] hover:bg-[#e60057] text-white cursor-pointer w-fit transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Section7
