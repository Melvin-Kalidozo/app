// components/CallToActionBanner.jsx
import React from "react";

const CallToActionBanner = () => {
  return (
    <div
      className="h-[50vh] relative flex items-center justify-center text-center text-white rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/3d-rendering-dices-illustration_52683-75998.jpg?t=st=1745366373~exp=1745369973~hmac=16aa8e2b62d0dd249a2174fd06c0b5f8f80bbca82654d7f370b22ff73e6ae0da&w=996')`,
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
      <div className="relative z-10 px-6">
        <h1 className="text-4xl font-extrabold mb-4">
          Play Virtual Casino Games
        </h1>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Dive into an immersive world of cards, slots, and thrilling wins. Your
          next big jackpot awaits!
        </p>
        <button className="bg-[#8B5CF6] hover:bg-purple-700 cursor-pointer text-black font-bold px-8 py-3 rounded-full transition">
          Start Playing Now
        </button>
      </div>
    </div>
  );
};

export default CallToActionBanner;
