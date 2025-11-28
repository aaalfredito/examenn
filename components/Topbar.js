function Topbar({ user }) {
  try {
    const [showNotifications, setShowNotifications] = React.useState(false);
    const notifications = [
      { id: 1, text: 'Nuevo documento agregado', time: 'Hace 5 min' },
      { id: 2, text: 'Usuario aprobado', time: 'Hace 1 hora' },
      { id: 3, text: 'Actualización del sistema', time: 'Hace 2 horas' }
    ];

    return (
      <div className="fixed top-0 right-0 left-0 h-16 bg-white text-gray-900 shadow-md flex items-center justify-end px-6 z-50" data-name="topbar" data-file="components/Topbar.js">
        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="icon-bell text-xl"></div>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {showNotifications && (
              <div className="absolute top-12 right-0 w-80 bg-white text-gray-900 rounded-lg shadow-xl p-4">
                <h3 className="font-bold mb-3">Notificaciones</h3>
                {notifications.map(notif => (
                  <div key={notif.id} className="py-2 border-b last:border-b-0">
                    <p className="text-sm">{notif.text}</p>
                    <p className="text-xs text-gray-500">{notif.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border-2 border-gray-300" />
            <div>
              <p className="text-sm font-bold">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Topbar component error:', error);
    return null;
  }
}