import React from "react";
import {
  Gamepad2,
  Dice5,
  Trophy,
  MonitorPlay,
  Sword,
  Rocket,
  ShieldCheck,
  Joystick,
  PlayCircle,
} from "lucide-react";

const categories = [
  { name: "Arcade", icon: Gamepad2 },
  { name: "Casino", icon: Dice5 },
  { name: "Sports", icon: Trophy },
  { name: "Streaming", icon: MonitorPlay },
  { name: "Action", icon: Sword },
  { name: "Adventure", icon: Rocket },
  { name: "Strategy", icon: ShieldCheck },
  { name: "Simulator", icon: Joystick },
];

const games = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-vector/realistic-casino-gambling-illustration_52683-99917.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-vector/gamble-it-casino-realistic-composition_1284-24288.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-vector/slot-machine-big-win-concept-realistic-style_52683-8815.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-vector/realistic-casino-background_52683-7266.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/free-vector/vector-playing-cards-royal-straight-flush-roulette-wheel-stacks-red-blue-black-casino-chips-top-side-view-isolated-green-background_1284-48495.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740",
  },
  {
    id: 6,
    image:
      "https://img.freepik.com/free-vector/casino-background-design_1314-200.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740",
  },
  {
    id: 7,
    image:
      "https://img.freepik.com/free-vector/realistic-casino-background_52683-7266.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740",
  },
  {
    id: 8,
    image:
      "https://img.freepik.com/free-vector/realistic-casino-background_52683-7266.jpg?ga=GA1.1.400731027.1743664414&semt=ais_hybrid&w=740",
  },
];

export default function VirtualGamesList() {
  return (
    <div className="w-[98%] md:w-[90%] mx-auto my-10">
      <h1 className="text-center text-[2.5rem]">
        <span className="text-[#FFD700] font-extrabold">Virtual</span> Games
      </h1>

      {/* Categories */}
      <div className="mt-10 flex justify-center gap-8 flex-wrap">
        {categories.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex flex-col cursor-pointer items-center hover:text-[#FFD700]"
          >
            <div className="bg-[#1a1a1a] p-4 rounded-2xl shadow-lg">
              <Icon size={40} className="text-[#FFD700]" />
            </div>
            <span className="mt-2 text-white text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>

      {/* Game Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative w-full h-80 cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={game.image}
              alt={`Game ${game.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 rounded-full p-2 hover:bg-[#FFD700] transition-all">
              <PlayCircle
                className="text-white hover:text-black transition-colors"
                size={32}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
        {[
          { value: "1.2M", label: "Total Users" },
          { value: "5,430", label: "Games in Play" },
          { value: "$3.5M", label: "Total Won" },
          { value: "14,780", label: "Total Games" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="border-2 border-[#FFD700] rounded-2xl p-6 bg-[#1a1a1a] shadow-lg"
          >
            <div className="text-4xl font-extrabold text-[#FFD700]">
              {stat.value}
            </div>
            <div className="text-sm mt-2 text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
