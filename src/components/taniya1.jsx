import React from "react";
import { Mic, PlayCircle, Users, Lightbulb } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Speaker Session",
    description: "Experts share insights on AI/ML trends and innovations.",
    icon: <Mic className="text-white" size={40} />,
    bgColor: "bg-[#BA2027]",
    rotated: true,
  },
  {
    id: 2,
    title: "Interactive Content",
    description: "Live discussions, reels, and key convention highlights.",
    icon: <PlayCircle className="text-white" size={40} />,
    bgColor: "bg-gray-500",
  },
  {
    id: 3,
    title: "Connect",
    description: "Network with professionals, researchers, and students.",
    icon: <Users className="text-white" size={40} />,
    bgColor: "bg-gray-500",
  },
  {
    id: 4,
    title: "Theme-based Solution",
    description: "Tackle real-world problems with AI/ML projects.",
    icon: <Lightbulb className="text-white" size={40} />,
    bgColor: "bg-gray-500",
  },
];

const ServicesSection = () => {
  return (
    <div className="min-h-screen bg-white py-20 text-black flex flex-col md:flex-row items-start md:justify-between gap-12 px-6 md:px-20">
      {/* Left Section (Text) - Starts from the Top Left */}
      <div className="w-full md:w-2/5 flex flex-col justify-start">
        <h2 className="text-4xl lg:text-5xl text-gray-700 font-bold mb-4 leading-tight">
          What's in store for you ?
        </h2>
        <p className="text-gray-600 text-lg lg:text-xl mb-6 leading-relaxed text-justify">
          The Virtual AI/ML Convention connects you with top experts, engaging discussions, and valuable networking opportunities.
        </p>
      </div>

      {/* Right Section (Service Cards) */}
      <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-6 rounded-3xl ${service.bgColor} text-black shadow-lg relative transition transform hover:scale-105 ${
              service.rotated ? "-rotate-3" : ""
            }`}
          >
            <div className="text-3xl">{service.icon}</div>
            <h2 className="text-2xl font-bold mt-2 text-white">{service.title}</h2>
            <p className="text-white mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;