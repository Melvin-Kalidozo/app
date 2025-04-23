"use client";
import React from "react";
import { Dice3, Coins, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const callToActions = [
  {
    id: 1,
    icon: <Dice3 className="text-white w-10 h-10" />,
    heading: "Feeling Lucky?",
    description: "A chance to win massive rewards!",
    buttonText: "Start Betting",
  },
  {
    id: 2,
    icon: <Coins className="text-white w-10 h-10" />,
    heading: "Live Casino is On!",
    description: "Play real-time games with real dealers",
    buttonText: "Play Live",
  },
  {
    id: 3,
    icon: <Gift className="text-white w-10 h-10" />,
    heading: "Claim Your Bonus",
    description: "Get a 100% bonus on your first deposit.",
    buttonText: "Get Bonus",
  },
];

const CallToAction = () => {
  const handleClick = (id) => {
    console.log(`CTA ${id} button clicked!`);
  };

  return (
    <div className="gap-10 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[98%] md:w-[80%] mx-auto">
      {callToActions.map((cta) => (
        <div key={cta.id} className="flex items-center justify-start space-x-4">
          {/* Icon */}
          <div className="bg-amber-500 rounded-full p-3">{cta.icon}</div>

          {/* Text content */}
          <div className="flex flex-col items-start text-white">
            <h3 className="text-sm md:text-lg font-bold mb-2">{cta.heading}</h3>
            <p className="text-sm mb-4">{cta.description}</p>
            <Button className="bg-[#FFD700] text-black hover:brightness-110">
              {cta.buttonText}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CallToAction;
