import React from "react";

const UXProcess = () => {
  return (
    <div className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2 className=" text-black text-5xl font-bold text-center mb-12">Event Timeline</h2>

        {/* Horizontal Grid for Steps */}
        <div className="relative mt-[50px]"> {/* Adjusted to shift down by ~5cm */}
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-[90%] h-[2px] bg-gray-600 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: User Journey Map */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#BA2027] flex items-center justify-center mb-4 shadow-[0_0_20px_5px_rgba(255,0,0,0.3)]">
                <span className="text-4xl font-bold text-white">1</span>
              </div>
              <h3 className="text-black text-xl font-semibold mb-2">Introduction about the Event</h3>
              <p className="text-sm text-[#424E53]">
               AI/ML conventions explore innovations and trends connecting experts for learning and collaboration.
              </p>
            </div>

            {/* Step 2: Wireframes */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#BA2027] flex items-center justify-center mb-4 shadow-[0_0_20px_5px_rgba(255,0,0,0.3)]">
                <span className="text-4xl font-bold text-white">2</span>
              </div>
              <h3 className="text-black text-xl font-semibold mb-2">Speaker Sessions & Panels</h3>
              <p className="text-sm text-[#424E53]">
              Industry Leaders and innovators share insights on AI/ML trends and developments.
              </p>
            </div>

            {/* Step 3: Clickable Prototype */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#BA2027] flex items-center justify-center mb-4 shadow-[0_0_20px_5px_rgba(255,0,0,0.3)]">
                <span className="text-4xl font-bold text-white">3</span>
              </div>
              <h3 className=" text-black text-xl font-semibold mb-2">Ideathon Presentation</h3>
              <p className="text-sm text-[#424E53]">
              Solve real-world problems through AI/ML- driven project ideas and prortypes</p>
            </div>

            {/* Step 4: Visual Design */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#BA2027] flex items-center justify-center mb-4 shadow-[0_0_20px_5px_rgba(255,0,0,0.3)]">
                <span className="text-4xl font-bold text-white">4</span>
              </div>
              <h3 className="text-black text-xl font-semibold mb-2">Judging & Results</h3>
              <p className="text-sm text-[#424E53]">
              Projects will be evaluated and winners will be announced on date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXProcess;