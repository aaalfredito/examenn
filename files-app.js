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

function FilesManagement() {
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

    const files = [
      { id: 1, name: 'Documento.pdf', size: '2.5 MB', date: '2025-11-27', type: 'pdf' },
      { id: 2, name: 'Presentacion.pptx', size: '5.8 MB', date: '2025-11-26', type: 'pptx' },
      { id: 3, name: 'Reporte.xlsx', size: '1.2 MB', date: '2025-11-25', type: 'xlsx' },
      { id: 4, name: 'Imagen.jpg', size: '890 KB', date: '2025-11-24', type: 'image' }
    ];

    return (
      <div className="min-h-screen bg-motorcycle" data-name="files-page" data-file="files-app.js">
        <Topbar user={currentUser} />
        <div className="flex pt-16 bg-white">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Gestión de Archivos</h1>
              <button className="px-6 py-3 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--secondary-color)] flex items-center gap-2">
                <div className="icon-upload text-lg"></div>
                <span className="font-bold">Subir Archivo</span>
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 gap-4 p-6">
                {files.map(file => (
                  <div key={file.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <div className="icon-file text-xl text-blue-600"></div>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-500">{file.size} • {file.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2">
                        <div className="icon-download text-sm"></div>
                        <span>Descargar</span>
                      </button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2">
                        <div className="icon-trash text-sm"></div>
                        <span>Eliminar</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('FilesManagement component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><FilesManagement /></ErrorBoundary>);
