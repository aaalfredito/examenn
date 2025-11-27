function StatsCard({ title, value, color, icon }) {
  try {
    return (
      <div className={`${color} rounded-xl p-6 shadow-lg`} data-name="stats-card" data-file="components/StatsCard.js">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className={`icon-${icon} text-2xl text-gray-700`}></div>
        </div>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    );
  } catch (error) {
    console.error('StatsCard component error:', error);
    return null;
  }
}