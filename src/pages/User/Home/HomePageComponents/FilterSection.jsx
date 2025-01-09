import React from "react";

const LEVELS = [
  "Tất cả",
  "Mới bắt đầu",
  "Trung cấp",
  "Nâng cao",
  "Chuyên nghiệp",
];

const INSTRUMENTS = [
  "Piano",
  "Guitar",
  "Violin",
  "Trống",
  "Bass",
  "Saxophone",
  "Sáo",
  "Cello",
  "Ukulele",
];

const FilterSection = ({
  selectedLevel,
  setSelectedLevel,
  selectedInstrument,
  setSelectedInstrument,
}) => {
  return (
    <div className="border-b bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Trình độ</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {LEVELS.map((level) => (
                <button
                  key={level}
                  className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 font-medium ${
                    selectedLevel === level
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                  }`}
                  onClick={() => setSelectedLevel(level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Nhạc cụ</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              <button
                className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 font-medium ${
                  selectedInstrument === "Tất cả"
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                }`}
                onClick={() => setSelectedInstrument("Tất cả")}
              >
                Tất cả nhạc cụ
              </button>
              {INSTRUMENTS.map((instrument) => (
                <button
                  key={instrument}
                  className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 font-medium ${
                    selectedInstrument === instrument
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                  }`}
                  onClick={() => setSelectedInstrument(instrument)}
                >
                  {instrument}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
