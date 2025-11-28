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
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo salió mal</h1>
            <p className="text-gray-600 mb-4">Lo sentimos, ocurrió un error inesperado.</p>
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      const user = authenticateUser(username, password);
      
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
      } else {
        setError('Usuario o contraseña incorrectos');
      }
    };

    return (
      <div className="min-h-screen bg-motorcycle flex items-center justify-center p-4" data-name="login-page" data-file="app.js">
        <div className="transparent-container rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          
          <h1 className="text-3xl font-bold text-white text-center mb-2">Sistema de Gestión</h1>
          <p className="text-white text-center mb-6 opacity-90">Iniciar Sesión</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-white font-bold mb-2">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingrese su usuario"
                required
              />
            </div>
            
            <div>
              <label className="block text-white font-bold mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
            
            {error && <p className="text-red-300 text-sm font-bold">{error}</p>}
            
            <button
              type="submit"
              className="w-full py-3 bg-[var(--primary-color)] text-white font-bold rounded-lg hover:bg-[var(--secondary-color)] transition-colors"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);