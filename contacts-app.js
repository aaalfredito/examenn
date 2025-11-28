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

function Contacts() {
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

    const contacts = [
      { id: 1, name: 'Roberto Díaz', phone: '+34 612 345 678', email: 'roberto@example.com', avatar: 'https://i.pravatar.cc/150?img=8' },
      { id: 2, name: 'Elena Ruiz', phone: '+34 687 234 567', email: 'elena@example.com', avatar: 'https://i.pravatar.cc/150?img=10' },
      { id: 3, name: 'Miguel Ángel', phone: '+34 654 876 543', email: 'miguel@example.com', avatar: 'https://i.pravatar.cc/150?img=11' },
      { id: 4, name: 'Carmen Vega', phone: '+34 623 456 789', email: 'carmen@example.com', avatar: 'https://i.pravatar.cc/150?img=16' }
    ];

    return (
      <div className="min-h-screen bg-motorcycle" data-name="contacts-page" data-file="contacts-app.js">
        <Topbar user={currentUser} />
        <div className="flex pt-16 bg-white">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Contactos</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contacts.map(contact => (
                <div key={contact.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <img src={contact.avatar} alt={contact.name} className="w-20 h-20 rounded-full mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.name}</h3>
                    <div className="space-y-2 w-full">
                      <div className="flex items-center gap-2 text-gray-600 justify-center">
                        <div className="icon-phone text-sm"></div>
                        <span className="text-sm">{contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 justify-center">
                        <div className="icon-mail text-sm"></div>
                        <span className="text-sm">{contact.email}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--secondary-color)]">
                      Contactar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Contacts component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><Contacts /></ErrorBoundary>);