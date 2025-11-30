import React, { useState } from 'react';

const BirthChart = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const chartData = {
    planets: [
      { name: "Asc", sign: "Cancer", house: "House1", degree: "+14:32:21", nakshatra: "Pushya", movement: "-" },
      { name: "Moon", sign: "Aquarius", house: "House8", degree: "+22:08:39", nakshatra: "Purva Bhadrapada", movement: "Direct" },
      { name: "Mercury", sign: "Aquarius", house: "House8", degree: "+15:18:07", nakshatra: "Shatabhisha", movement: "Direct" },
      { name: "Venus", sign: "Pisces", house: "House9", degree: "+00:56:06", nakshatra: "Purva Bhadrapada", movement: "Direct" },
      { name: "Mars", sign: "Libra", house: "House4", degree: "+13:54:49", nakshatra: "Swati", movement: "Direct" },
      { name: "Jupiter", sign: "Pisces", house: "House9", degree: "+07:10:13", nakshatra: "Uttara Bhadrapada", movement: "Direct" },
      { name: "Saturn", sign: "Aries", house: "House10", degree: "+05:07:32", nakshatra: "Ashwini", movement: "Direct" },
      { name: "Rahu", sign: "Cancer", house: "House1", degree: "+28:18:41", nakshatra: "Ashlesha", movement: "Retrograde" },
      { name: "Ketu", sign: "Capricorn", house: "House7", degree: "+28:18:41", nakshatra: "Dhanishta", movement: "Retrograde" },
      { name: "Uranus", sign: "Capricorn", house: "House7", degree: "+19:49:09", nakshatra: "Shravana", movement: "Direct" },
      { name: "Neptune", sign: "Capricorn", house: "House7", degree: "+08:59:08", nakshatra: "Uttara Ashadha", movement: "Direct" },
      { name: "Pluto", sign: "Scorpio", house: "House5", degree: "+16:29:08", nakshatra: "Anuradha", movement: "Direct" },
      { name: "MC", sign: "Aries", house: "House10", degree: "+04:46:33", nakshatra: "Ashwini", movement: "-" },
      { name: "Sun", sign: "Aquarius", house: "House8", degree: "+04:39:54", nakshatra: "Dhanishta", movement: "Direct" },
    ],
    houseRulerships: [
      { house: "House 1", sign: "Cancer", ruler: "Moon" },
      { house: "House 2", sign: "Leo", ruler: "Sun" },
      { house: "House 3", sign: "Virgo", ruler: "Mercury" },
      { house: "House 4", sign: "Libra", ruler: "Venus" },
      { house: "House 5", sign: "Scorpio", ruler: "Mars" },
      { house: "House 6", sign: "Sagittarius", ruler: "Jupiter" },
      { house: "House 7", sign: "Capricorn", ruler: "Saturn" },
      { house: "House 8", sign: "Aquarius", ruler: "Saturn" },
      { house: "House 9", sign: "Pisces", ruler: "Jupiter" },
      { house: "House 10", sign: "Aries", ruler: "Mars" },
      { house: "House 11", sign: "Taurus", ruler: "Venus" },
      { house: "House 12", sign: "Gemini", ruler: "Mercury" },
    ]
  };

  const Page1 = () => (
    <div className="min-h-screen bg-white relative overflow-hidden flex items-center justify-center">
      {/* Decorative corners */}
      <div className="absolute top-0 right-0 w-40 h-40">
        <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-600 rounded-full"></div>
        <div className="absolute top-6 right-20 w-16 h-16 bg-blue-900 rounded-full"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-600 rounded-full transform rotate-45 origin-top-right" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 50%)' }}></div>
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40">
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-900 rounded-full"></div>
        <div className="absolute bottom-6 left-6 w-24 h-24 bg-yellow-600 rounded-full transform -rotate-12"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-900 rounded-full transform translate-y-4"></div>
      </div>

      {/* Logo and Title */}
      <div className="text-center z-10">
        <div className="mb-12">
          <div className="flex justify-center mb-2">
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-yellow-600 fill-current">
              <circle cx="20" cy="20" r="8" />
              <line x1="20" y1="4" x2="20" y2="12" stroke="currentColor" strokeWidth="2"/>
              <line x1="20" y1="28" x2="20" y2="36" stroke="currentColor" strokeWidth="2"/>
              <line x1="4" y1="20" x2="12" y2="20" stroke="currentColor" strokeWidth="2"/>
              <line x1="28" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="2"/>
              <line x1="9" y1="9" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="31" y1="9" x2="26" y2="14" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="9" y1="31" x2="14" y2="26" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="31" y1="31" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="text-yellow-600 text-xl tracking-widest font-light">GALACTIC</div>
          <div className="text-yellow-600 text-sm tracking-widest font-light">PLANNER</div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center mb-4">
          <svg width="420" height="100" viewBox="0 0 420 100">
            <path d="M 30 50 L 90 50 Q 110 50 120 40 L 140 40 Q 150 40 160 30 L 180 30 Q 190 30 200 20 L 210 20 Q 220 20 230 30 L 240 30 Q 250 30 260 40 L 280 40 Q 290 40 300 50 L 390 50" 
                  fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="210" cy="20" r="5" fill="#D4AF37" />
            <path d="M 195 35 L 210 20 L 225 35 L 210 50 Z" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="160" cy="30" r="4" fill="#D4AF37" />
            <circle cx="260" cy="30" r="4" fill="#D4AF37" />
            <circle cx="120" cy="40" r="3" fill="#D4AF37" />
            <circle cx="300" cy="40" r="3" fill="#D4AF37" />
          </svg>
        </div>

        <h1 className="text-5xl font-bold text-blue-900 mb-4">Your Chart</h1>

        {/* Decorative divider bottom */}
        <div className="flex items-center justify-center mt-4">
          <svg width="420" height="100" viewBox="0 0 420 100">
            <path d="M 30 50 L 90 50 Q 110 50 120 60 L 140 60 Q 150 60 160 70 L 180 70 Q 190 70 200 80 L 210 80 Q 220 80 230 70 L 240 70 Q 250 70 260 60 L 280 60 Q 290 60 300 50 L 390 50" 
                  fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="210" cy="80" r="5" fill="#D4AF37" />
            <path d="M 195 65 L 210 80 L 225 65 L 210 50 Z" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="160" cy="70" r="4" fill="#D4AF37" />
            <circle cx="260" cy="70" r="4" fill="#D4AF37" />
            <circle cx="120" cy="60" r="3" fill="#D4AF37" />
            <circle cx="300" cy="60" r="3" fill="#D4AF37" />
          </svg>
        </div>
      </div>
    </div>
  );

  const Page2 = () => (
    <div className="min-h-screen bg-white relative">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-blue-900 to-blue-800"></div>
      <div className="absolute left-8 top-0 bottom-0 w-6 bg-yellow-600"></div>
      
      <div className="ml-14 p-12">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-yellow-600 fill-current mr-2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="2" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="text-yellow-600 text-sm tracking-widest">GALACTIC PLANNER</span>
        </div>

        {/* South Indian Chart */}
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">South Indian Style Chart</h2>
        <div className="max-w-2xl mx-auto mb-16">
          <div className="grid grid-cols-4 border-2 border-black">
            {/* Row 1 */}
            <div className="border border-black p-2 min-h-[100px] bg-white text-[10px] leading-tight">
              <div className="font-semibold mb-1">House12</div>
              <div>♊ 00:10 Uri</div>
              <div className="text-red-600">☊ 00:56 Pur</div>
            </div>
            <div className="border border-black p-2 min-h-[100px] bg-white text-[10px] leading-tight">
              <div className="font-semibold mb-1">House1</div>
              <div>♋ 13:18 Sha</div>
              <div>♈ 22:08 Pur</div>
              <div className="text-red-600">♆ 04:46 Ash</div>
            </div>
            <div className="border border-black p-2 min-h-[100px] bg-white text-[10px] leading-tight">
              <div className="font-semibold mb-1">House2</div>
              <div>♌ 04:46 Ash</div>
            </div>
            <div className="border border-black p-2 min-h-[100px] bg-white text-[10px] leading-tight">
              <div className="font-semibold mb-1">House3</div>
              <div>(♍)</div>
            </div>

            {/* Row 2 */}
            <div className="border border-black p-2 min-h-[100px] bg-white text-[10px] leading-tight">
              <div className="font-semibold mb-1">House11</div>
              <div>♉</div>
            </div>
            <div className="border border-black p-2 min-h-[100px] bg-gray-50 text-[10px]">
              
            </div>
            <div className="border border-black p-2 min-h-[100px] bg-gray-50 text-[10px]">
              
            </div>
            <div className="border border-black p-2 min-h-[100px] bg-white text-[10px] leading-tight">
              <div className="font-semibold mb-1">House4</div>
              <div className="text-red-600">♎ 28:18 Ash</div>
              <div>♂ 14:52 Pun</div>
            </div>

            {/* Row 3 */}
            <div className="border border-black p-2 min-h-[100px] bg-white text-[10px] leading-tight">
              <div className="font-semibold mb-1">House10</div>
              <div>♈ 08:59 Utt</div>
              <div className="text-red-600">♂ 19:49 Shr</div>
              <div className="text-red-600">♀ 28:18 Dha</div>
            </div>
            <div className="border border-black p-2 min-h-[100px] bg-gray-50 text-[10px]">
              
            </div>
            <div className="border border-black p-2 min-h-[100px] bg-gray-50 text-[10px]">
              
            </div>
            <div className="border border-black p-2 min-h-[100px] bg-white text-[10px] leading-tight">
              <div className="font-semibold mb-1">House5</div>
              <div>♏</div>
            </div>

            {/* Row 4 */}
            <div className="border border-black p-2 min-h-[100px] bg-white text-[10px] leading-tight">
              <div className="font-semibold mb-1">House9</div>
              <div>♓ 16:29 Anu</div>
            </div>
            <div className="border border-black p-2 min-h-[100px] bg-white text-[10px] leading-tight">
              <div className="font-semibold mb-1">House8</div>
              <div>♒</div>
            </div>
            <div className="border border-black p-2 min-h-[100px] bg-white text-[10px] leading-tight">
              <div className="font-semibold mb-1">House7</div>
              <div>♑ 13:54 Swa</div>
            </div>
            <div className="border border-black p-2 min-h-[100px] bg-white text-[10px] leading-tight">
              <div className="font-semibold mb-1">House6</div>
              <div>♐</div>
            </div>
          </div>
        </div>

        {/* North Indian Chart */}
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">North Indian Style Chart</h2>
        <div className="max-w-2xl mx-auto">
          <div className="relative w-full border-2 border-black bg-white" style={{ paddingBottom: '60%' }}>
            {/* Using a table-like structure with rotated squares */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 600 360" preserveAspectRatio="none">
                {/* Main diamond outline */}
                <line x1="300" y1="0" x2="600" y2="180" stroke="black" strokeWidth="2"/>
                <line x1="300" y1="0" x2="0" y2="180" stroke="black" strokeWidth="2"/>
                <line x1="0" y1="180" x2="300" y2="360" stroke="black" strokeWidth="2"/>
                <line x1="600" y1="180" x2="300" y2="360" stroke="black" strokeWidth="2"/>
                
                {/* Horizontal dividers */}
                <line x1="150" y1="90" x2="450" y2="90" stroke="black" strokeWidth="1"/>
                <line x1="150" y1="270" x2="450" y2="270" stroke="black" strokeWidth="1"/>
                
                {/* Vertical dividers for top section */}
                <line x1="300" y1="0" x2="150" y2="90" stroke="black" strokeWidth="1"/>
                <line x1="300" y1="0" x2="450" y2="90" stroke="black" strokeWidth="1"/>
                
                {/* Vertical dividers for bottom section */}
                <line x1="150" y1="270" x2="300" y2="360" stroke="black" strokeWidth="1"/>
                <line x1="450" y1="270" x2="300" y2="360" stroke="black" strokeWidth="1"/>
                
                {/* Side dividers */}
                <line x1="0" y1="180" x2="150" y2="90" stroke="black" strokeWidth="1"/>
                <line x1="0" y1="180" x2="150" y2="270" stroke="black" strokeWidth="1"/>
                <line x1="600" y1="180" x2="450" y2="90" stroke="black" strokeWidth="1"/>
                <line x1="600" y1="180" x2="450" y2="270" stroke="black" strokeWidth="1"/>
              </svg>
              
              {/* Text content in each section */}
              {/* Top center */}
              <div className="absolute" style={{ top: '15%', left: '50%', transform: 'translateX(-50%)' }}>
                <div className="text-[10px] text-center leading-tight">
                  <div className="text-red-600">♎ 28:18 Ash</div>
                  <div className="text-black">♂ 14:52 Pun</div>
                </div>
              </div>
              
              {/* Top right */}
              <div className="absolute" style={{ top: '15%', right: '15%' }}>
                <div className="text-[10px] text-right leading-tight">
                  <div>♋ 05:07 Ash</div>
                  <div>♌ 04:46 Ash</div>
                </div>
              </div>
              
              {/* Right center */}
              <div className="absolute" style={{ top: '50%', right: '10%', transform: 'translateY(-50%)' }}>
                <div className="text-[10px] text-right leading-tight">
                  <div>♈ 07:10 Utt</div>
                  <div>♉ 00:56 Pur</div>
                </div>
              </div>
              
              {/* Bottom right */}
              <div className="absolute" style={{ bottom: '15%', right: '15%' }}>
                <div className="text-[10px] text-right leading-tight">
                  <div>♊ 15:18 Sha</div>
                  <div>♈ 22:08 Pur</div>
                  <div>♌ 04:39 Dha</div>
                </div>
              </div>
              
              {/* Bottom center */}
              <div className="absolute" style={{ bottom: '15%', left: '50%', transform: 'translateX(-50%)' }}>
                <div className="text-[10px] text-center leading-tight">
                  <div>♋ 08:59 Utt</div>
                  <div>♎ 19:49 Shr</div>
                  <div>♏ 28:18 Dha</div>
                </div>
              </div>
              
              {/* Bottom left */}
              <div className="absolute" style={{ bottom: '15%', left: '15%' }}>
                <div className="text-[10px] leading-tight">
                  <div className="text-red-600">♂ 13:54 Swa</div>
                </div>
              </div>
              
              {/* Left center */}
              <div className="absolute" style={{ top: '50%', left: '10%', transform: 'translateY(-50%)' }}>
                <div className="text-[10px] leading-tight">
                  <div>♈ 16:29 Anu</div>
                </div>
              </div>
              
              {/* Top left */}
              <div className="absolute" style={{ top: '15%', left: '15%' }}>
                <div className="text-[10px] leading-tight">
                  <div className="text-red-600">♂ 13:54 Swa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Page3 = () => (
    <div className="min-h-screen bg-white relative">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-blue-900 to-blue-800"></div>
      <div className="absolute left-8 top-0 bottom-0 w-6 bg-yellow-600"></div>
      
      {/* Large watermark background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="text-9xl font-bold text-yellow-600 transform -rotate-12">
          GALACTIC
        </div>
      </div>
      
      <div className="ml-14 p-12 relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-yellow-600 fill-current mr-2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="2" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="text-yellow-600 text-sm tracking-widest">GALACTIC PLANNER</span>
        </div>

        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Chart Data</h2>

        <div className="max-w-5xl mx-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-600 text-white">
                <th className="border border-gray-400 px-4 py-3 text-left font-semibold">Planet</th>
                <th className="border border-gray-400 px-4 py-3 text-left font-semibold">Sign</th>
                <th className="border border-gray-400 px-4 py-3 text-left font-semibold">House</th>
                <th className="border border-gray-400 px-4 py-3 text-left font-semibold">Degree</th>
                <th className="border border-gray-400 px-4 py-3 text-left font-semibold">Nakshatra</th>
                <th className="border border-gray-400 px-4 py-3 text-left font-semibold">Movement</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {chartData.planets.map((planet, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-4 py-2">{planet.name}</td>
                  <td className="border border-gray-400 px-4 py-2">{planet.sign}</td>
                  <td className="border border-gray-400 px-4 py-2">{planet.house}</td>
                  <td className="border border-gray-400 px-4 py-2">{planet.degree}</td>
                  <td className="border border-gray-400 px-4 py-2">{planet.nakshatra}</td>
                  <td className="border border-gray-400 px-4 py-2">{planet.movement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const Page4 = () => (
    <div className="min-h-screen bg-white relative">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-blue-900 to-blue-800"></div>
      <div className="absolute left-8 top-0 bottom-0 w-6 bg-yellow-600"></div>
      
      {/* Large watermark background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="text-9xl font-bold text-yellow-600 transform -rotate-12">
          GALACTIC
        </div>
      </div>
      
      <div className="ml-14 p-12 relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-yellow-600 fill-current mr-2">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="2" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="text-yellow-600 text-sm tracking-widest">GALACTIC PLANNER</span>
        </div>

        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">House Rulerships</h2>

        <div className="max-w-3xl mx-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-600 text-white">
                <th className="border border-gray-400 px-6 py-3 text-left font-semibold">House</th>
                <th className="border border-gray-400 px-6 py-3 text-left font-semibold">Sign</th>
                <th className="border border-gray-400 px-6 py-3 text-left font-semibold">Ruler</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {chartData.houseRulerships.map((house, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border border-gray-400 px-6 py-3">{house.house}</td>
                  <td className="border border-gray-400 px-6 py-3">{house.sign}</td>
                  <td className="border border-gray-400 px-6 py-3">{house.ruler}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const pages = [
    <Page1 key="page1" />,
    <Page2 key="page2" />,
    <Page3 key="page3" />,
    <Page4 key="page4" />
  ];

  return (
    <div className="relative">
      {pages[currentPage]}
      
      {/* Navigation */}
      <div className="fixed bottom-8 right-8 flex gap-4 z-50">
        <button
          onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className="bg-blue-900 text-white px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-800 transition-colors shadow-lg font-semibold"
        >
          ← Previous
        </button>
        <div className="bg-white px-6 py-3 rounded-lg shadow-lg border-2 border-blue-900 font-semibold text-blue-900">
          Page {currentPage + 1} of {pages.length}
        </div>
        <button
          onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
          disabled={currentPage === pages.length - 1}
          className="bg-blue-900 text-white px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-800 transition-colors shadow-lg font-semibold"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default BirthChart;