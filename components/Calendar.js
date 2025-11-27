function Calendar() {
  try {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const getDaysInMonth = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      return { firstDay, daysInMonth };
    };
    
    const { firstDay, daysInMonth } = getDaysInMonth(currentDate);
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);

    return (
      <div className="bg-white rounded-xl p-6 shadow-lg" data-name="calendar" data-file="components/Calendar.js">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
          <div className="flex gap-2">
            <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className="p-2 hover:bg-gray-100 rounded">
              <div className="icon-chevron-left"></div>
            </button>
            <button onClick={() => setCurrentDate(new Date())} className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Hoy</button>
            <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className="p-2 hover:bg-gray-100 rounded">
              <div className="icon-chevron-right"></div>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, idx) => (
            <div key={`header-${idx}`} className="text-center font-semibold text-gray-600 text-sm">{day}</div>
          ))}
          {days.map((day, idx) => (
            <div key={`day-${idx}`} className={`text-center p-2 rounded ${day ? 'hover:bg-gray-100 cursor-pointer' : ''} ${day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() ? 'bg-blue-600 text-white' : ''}`}>
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Calendar component error:', error);
    return null;
  }
}