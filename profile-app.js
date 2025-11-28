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

function Profile() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState(null);
    const [editMode, setEditMode] = React.useState(false);
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      avatar: ''
    });

    React.useEffect(() => {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      if (!user) {
        window.location.href = 'index.html';
      } else {
        setCurrentUser(user);
        setFormData({
          name: user.name,
          email: `${user.username}@example.com`,
          phone: '+34 600 000 000',
          avatar: user.avatar
        });
      }
    }, []);

    if (!currentUser) return null;

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
      const updatedUser = { ...currentUser, name: formData.name, avatar: formData.avatar };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setCurrentUser(updatedUser);
      setEditMode(false);
    };

    return (
      <div className="min-h-screen bg-motorcycle" data-name="profile-page" data-file="profile-app.js">
        <Topbar user={currentUser} />
        <div className="flex pt-16 bg-white">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Mi Perfil</h1>
            
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl">
              <div className="flex flex-col items-center mb-6">
                <img src={formData.avatar} alt={formData.name} className="w-32 h-32 rounded-full mb-4 border-4 border-gray-200" />
                {editMode && (
                  <input
                    type="text"
                    name="avatar"
                    value={formData.avatar}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg mb-2"
                    placeholder="URL de la foto"
                  />
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                  {editMode ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  ) : (
                    <p className="text-gray-900">{formData.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                  {editMode ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  ) : (
                    <p className="text-gray-900">{formData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                  {editMode ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  ) : (
                    <p className="text-gray-900">{formData.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Rol</label>
                  <p className="text-gray-900">{currentUser.role}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                {editMode ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="flex-1 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--secondary-color)] font-bold"
                    >
                      Guardar Cambios
                    </button>
                    <button
                      onClick={() => setEditMode(false)}
                      className="flex-1 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 font-bold"
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setEditMode(true)}
                    className="w-full py-3 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--secondary-color)] font-bold"
                  >
                    Editar Perfil
                  </button>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Profile component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><Profile /></ErrorBoundary>);