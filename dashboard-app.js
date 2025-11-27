const ChartJS = window.Chart;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Algo salió mal</h1>
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              Recargar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function DashboardApp() {
  try {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
      const user = sessionStorage.getItem('currentUser');
      if (!user) {
        window.location.href = 'index.html';
      } else {
        setCurrentUser(JSON.parse(user));
      }
    }, []);

    if (!currentUser) return null;

    return (
      <div 
        className="min-h-screen bg-cover bg-center"
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'}}
        data-name="dashboard-app" 
        data-file="dashboard-app.js"
      >
        <Topbar user={currentUser} />
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
          <main className={`flex-1 p-6 transition-all ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <StatsCard title="Usuarios" value="156" color="bg-red-200" icon="users" />
              <StatsCard title="Proyectos" value="24" color="bg-blue-200" icon="briefcase" />
              <StatsCard title="Documentos" value="89" color="bg-green-200" icon="file-text" />
              <StatsCard title="Tareas" value="42" color="bg-yellow-200" icon="check-square" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Calendar />
              <ActivityChart />
            </div>
            
            <DocumentsPanel />
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);