class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <button onClick={() => window.location.reload()} className="px-6 py-2 bg-blue-600 text-white rounded-lg">
            Recargar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function UsersManagement() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      if (!user) {
        window.location.href = 'index.html';
      } else {
        setCurrentUser(user);
      }
    }, []);

    if (!currentUser) return null;

    const allUsers = [
      { id: 1, name: 'Juan Pérez', role: 'superusuario', email: 'juan@example.com', avatar: 'https://i.pravatar.cc/150?img=12' },
      { id: 2, name: 'María García', role: 'superusuario', email: 'maria@example.com', avatar: 'https://i.pravatar.cc/150?img=5' },
      { id: 3, name: 'Carlos López', role: 'admin', email: 'carlos@example.com', avatar: 'https://i.pravatar.cc/150?img=33' },
      { id: 4, name: 'Ana Martínez', role: 'admin', email: 'ana@example.com', avatar: 'https://i.pravatar.cc/150?img=9' },
      { id: 5, name: 'Pedro Sánchez', role: 'usuario', email: 'pedro@example.com', avatar: 'https://i.pravatar.cc/150?img=15' },
      { id: 6, name: 'Laura Torres', role: 'usuario', email: 'laura@example.com', avatar: 'https://i.pravatar.cc/150?img=20' }
    ];

    return (
      <div className="min-h-screen bg-motorcycle" data-name="users-page" data-file="users-app.js">
        <Topbar user={currentUser} />
        <div className="flex pt-16 bg-white">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Gestión de Usuarios</h1>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Usuario</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Rol</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allUsers.map(user => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                          <span className="font-bold text-gray-900">{user.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">{user.role}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{user.email}</td>
                      <td className="px-6 py-4">
                        <button className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg text-sm hover:bg-[var(--secondary-color)]">
                          Editar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UsersManagement component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><UsersManagement /></ErrorBoundary>);