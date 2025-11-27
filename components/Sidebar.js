function Sidebar({ isOpen, onToggle }) {
  try {
    const handleLogout = () => {
      sessionStorage.removeItem('currentUser');
      window.location.href = 'index.html';
    };

    return (
      <div 
        className={`fixed left-0 top-0 h-full bg-white shadow-xl transition-all z-40 ${isOpen ? 'w-64' : 'w-16'}`}
        data-name="sidebar" 
        data-file="components/Sidebar.js"
      >
        <div className="p-4 flex items-center justify-between border-b">
          {isOpen && (
            <div className="w-12 h-12">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="sidebarCube1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#8b5cf6'}} />
                    <stop offset="100%" style={{stopColor: '#6366f1'}} />
                  </linearGradient>
                  <linearGradient id="sidebarCube2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#6366f1'}} />
                    <stop offset="100%" style={{stopColor: '#10b981'}} />
                  </linearGradient>
                </defs>
                <polygon points="50,10 90,30 90,70 50,90" fill="url(#sidebarCube1)" />
                <polygon points="50,10 10,30 10,70 50,90" fill="url(#sidebarCube2)" opacity="0.8" />
                <polygon points="10,30 50,50 90,30 50,10" fill="#a78bfa" />
              </svg>
            </div>
          )}
          <button onClick={onToggle} className="p-2 hover:bg-gray-100 rounded">
            <div className="icon-menu text-xl"></div>
          </button>
        </div>
        
        <nav className="p-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg mb-2">
            <div className="icon-home text-xl"></div>
            {isOpen && <span>Inicio</span>}
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg mb-2">
            <div className="icon-user text-xl"></div>
            {isOpen && <span>Usuario</span>}
          </button>
          
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-lg text-red-600"
          >
            <div className="icon-log-out text-xl"></div>
            {isOpen && <span>Cerrar Sesión</span>}
          </button>
        </nav>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}