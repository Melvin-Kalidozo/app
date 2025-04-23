import React from "react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={i + fullStars}
          className="w-4 h-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

export default function HotToday() {
  return (
    <div className="w-[98%] md:w-[70%] mx-auto my-10">
      <h1 className="text-center text-3xl md:text-[2.5rem]">
        <span className="text-[#FFD700] font-extrabold">Hot</span> Today
      </h1>
      <div className="relative p-0 md:p-8 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {/* Left Column */}
          <div className="h-auto flex flex-col justify-between gap-4 z-10">
            {/* Game 1 */}
            <div className="bg-[#F472B6] p-4 rounded-2xl shadow-sm border shadow-[#F472B6] border-[#F472B6] flex flex-col items-center justify-between relative h-[300px] sm:h-[400px] md:h-[240px]">
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start justify-between w-full gap-4">
                <div className="flex-1">
                  <p className="text-white text-xl sm:text-2xl font-extrabold mb-2">
                    Space Shooter
                  </p>
                  <p className="text-white text-sm mb-2">
                    Blast your way through space with powerful weapons and
                    challenging enemies.
                  </p>
                  <div className="text-white text-sm mb-4">
                    <StarRating rating={4.5} />
                    <span> (2340 Reviews)</span>
                  </div>
                  <button className="bg-[#F472B6] cursor-pointer px-4 py-2 rounded-full text-black font-bold border border-[#F472B6]">
                    Play Now
                  </button>
                </div>
                <div className="w-16 h-16 sm:w-24 sm:h-24">
                  {/* Slot Machine Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 5h-2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1H5a1 1 0 0 0-1 1v5h16V6a1 1 0 0 0-1-1zm-4 0H9V4h6v1zM5 17h14v-4H5v4zm2-2h2v-1H7v1zm4 0h2v-1h-2v1zm4 0h2v-1h-2v1z" />
                    <path d="M19 19H5v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Game 2 */}
            <div className="bg-[#3B82F6] p-4 rounded-2xl shadow-sm border shadow-[#3B82F6] border-[#3B82F6] flex flex-col items-center justify-between relative h-[300px] sm:h-[400px] md:h-[240px]">
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start justify-between w-full gap-4">
                <div className="flex-1">
                  <p className="text-white text-xl sm:text-2xl font-extrabold mb-2">
                    Racing Rush
                  </p>
                  <p className="text-white text-sm mb-2">
                    Race through intense tracks and be the first to cross the
                    finish line!
                  </p>
                  <div className="text-white text-sm mb-4">
                    <StarRating rating={4.7} />
                    <span> (1820 Reviews)</span>
                  </div>
                  <button className="bg-[#3B82F6] cursor-pointer px-4 py-2 rounded-full text-black font-bold border border-[#3B82F6]">
                    Play Now
                  </button>
                </div>
                <div className="w-16 h-16 sm:w-24 sm:h-24">
                  {/* Dice Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4 2a2 2 0 0 0-2 2v14.586A2 2 0 0 0 3.414 20L14 9.414V4a2 2 0 0 0-2-2H4zm1 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    <path d="M20.586 10 10 20.586A2 2 0 0 0 12 22h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-1.414-1.914zM17 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="h-[500px] rounded-2xl overflow-hidden shadow-[#1a1a1a] shadow-sm text-white relative"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-vector/realistic-casino-gambling-illustration_52683-99917.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Black overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            ></div>

            <div className="relative z-10 h-full p-6 flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">
                Battle Royale 2.0
              </h2>
              <p className="text-sm mb-2">
                Join the hottest battle today. Compete and win rewards
                instantly!
              </p>
              <p className="text-xs mb-4 px-4">
                🎮 How to Play: Enter the arena, eliminate opponents, and be the
                last player standing to win big prizes!
              </p>
              <div className="text-white text-sm mb-4">
                <StarRating rating={4.8} />
                <span> (5400 Reviews)</span>
              </div>
              <button className="bg-[#EF4444] px-6 py-2 rounded-full cursor-pointer text-black font-bold border border-[#EF4444]">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
