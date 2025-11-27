function Topbar({ user }) {
  try {
    const [showNotifications, setShowNotifications] = React.useState(false);
    const notifications = [
      { id: 1, text: 'Nuevo documento agregado', time: 'Hace 5 min' },
      { id: 2, text: 'Tarea completada', time: 'Hace 1 hora' },
      { id: 3, text: 'Reunión programada', time: 'Hace 2 horas' }
    ];

    return (
      <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center" data-name="topbar" data-file="components/Topbar.js">
        <h1 className="text-2xl">Dashboard</h1>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-gray-100 rounded-lg relative"
            >
              <div className="icon-bell text-xl text-gray-700"></div>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border z-50">
                <div className="p-3 border-b">
                  <h3 className="font-semibold">Notificaciones</h3>
                </div>
                {notifications.map(notif => (
                  <div key={notif.id} className="p-3 border-b hover:bg-gray-50">
                    <p className="text-sm">{notif.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-semibold">
            {user.name.charAt(0)}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Topbar component error:', error);
    return null;
  }
}