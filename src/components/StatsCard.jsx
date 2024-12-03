import React from 'react';

const StatsCard = ({ icon, title, value, subtitle, chart }) => {
  return (
    <div className="bg-black/60 backdrop-blur-lg p-6 rounded-2xl border border-gray-800">
      <div className="flex items-center space-x-4">
        <div className="text-primary text-2xl">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        </div>
      </div>
      {chart && (
        <div className="mt-4 flex items-end space-x-2">
          {[40, 70, 45, 80, 60, 85, 50].map((height, i) => (
            <div
              key={i}
              className="bg-primary/60 rounded-sm w-6"
              style={{ height: `${height}px` }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatsCard;