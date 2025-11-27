function LoginForm() {
  try {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      setError('');
      
      const user = authenticateUser(username, password);
      
      if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
      } else {
        setError('Credenciales incorrectas');
      }
    };

    return (
      <form onSubmit={handleSubmit} data-name="login-form" data-file="components/LoginForm.js">
        <h1 className="text-3xl text-white text-center mb-6">Iniciar Sesión</h1>
        
        {error && (
          <div className="bg-red-500 bg-opacity-80 text-white p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-6">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Ingresar
        </button>
      </form>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}