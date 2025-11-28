function Sidebar({ isOpen, setIsOpen }) {
  try {
    return (
      <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-[var(--bg-dark)] text-white transition-all duration-300 z-40 ${isOpen ? 'w-64' : 'w-16'}`} data-name="sidebar" data-file="components/Sidebar.js">
        <div className="p-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center p-2 hover:bg-gray-800 rounded-lg mb-6"
          >
            <div className={`icon-${isOpen ? 'chevron-left' : 'chevron-right'} text-xl`}></div>
          </button>
          
          {isOpen && (
            <div className="flex justify-center mb-6">
              <Logo />
            </div>
          )}
          
          <nav className="space-y-2">
            <a href="dashboard.html" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
              <div className="icon-home text-xl"></div>
              {isOpen && <span className="font-bold">Inicio</span>}
            </a>
            
            <a href="users.html" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
              <div className="icon-users text-xl"></div>
              {isOpen && <span className="font-bold">Gestión de Usuarios</span>}
            </a>
            
            <a href="contacts.html" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
              <div className="icon-user-check text-xl"></div>
              {isOpen && <span className="font-bold">Contactos</span>}
            </a>
            
            <a href="files.html" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
              <div className="icon-folder text-xl"></div>
              {isOpen && <span className="font-bold">Archivos</span>}
            </a>
            
            <a href="profile.html" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
              <div className="icon-user-circle text-xl"></div>
              {isOpen && <span className="font-bold">Mi Perfil</span>}
            </a>
            
            <button 
              onClick={logout}
              className="w-full flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg text-left"
            >
              <div className="icon-log-out text-xl"></div>
              {isOpen && <span className="font-bold">Cerrar Sesión</span>}
            </button>
          </nav>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}