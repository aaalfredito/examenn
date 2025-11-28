function StatsCard({ title, value, color, icon }) {
  try {
    return (
      <div className={`${color} rounded-xl p-6 shadow-lg`} data-name="stats-card" data-file="components/StatsCard.js">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-700 font-bold text-sm mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
          </div>
          <div className="w-12 h-12 bg-white bg-opacity-50 rounded-lg flex items-center justify-center">
            <div className={`icon-${icon} text-2xl text-gray-700`}></div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('StatsCard component error:', error);
    return null;
  }
}