function Calendar() {
  try {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    
    const celebrationDates = {
      '1-1': 'Año Nuevo',
      '25-12': 'Navidad',
      '1-5': 'Día del Trabajo'
    };

    return (
      <div className="bg-white rounded-xl p-6 shadow-lg" data-name="calendar" data-file="components/Calendar.js">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
          <div className="flex gap-2">
            <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className="p-2 hover:bg-gray-100 rounded">
              <div className="icon-chevron-left"></div>
            </button>
            <button onClick={() => setCurrentDate(new Date())} className="px-3 py-1 bg-[var(--primary-color)] text-white rounded text-sm">Hoy</button>
            <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className="p-2 hover:bg-gray-100 rounded">
              <div className="icon-chevron-right"></div>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2 text-center">
          {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, i) => (
            <div key={i} className="font-bold text-gray-600 text-sm">{day}</div>
          ))}
          {[...Array(firstDay)].map((_, i) => <div key={`empty-${i}`}></div>)}
          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const dateKey = `${day}-${currentDate.getMonth() + 1}`;
            const isCelebration = celebrationDates[dateKey];
            return (
              <div key={day} className={`p-2 rounded ${isCelebration ? 'bg-blue-100 font-bold' : 'hover:bg-gray-100'}`} title={isCelebration || ''}>
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Calendar component error:', error);
    return null;
  }
}