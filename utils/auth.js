const STORAGE_KEY = 'system_users';

function initializeUsers() {
  try {
    const existingUsers = localStorage.getItem(STORAGE_KEY);
    if (!existingUsers) {
      const defaultUsers = [
        { id: '1', username: 'super1', password: 'super123', role: 'superuser', name: 'Super Usuario 1' },
        { id: '2', username: 'super2', password: 'super123', role: 'superuser', name: 'Super Usuario 2' },
        { id: '3', username: 'admin1', password: 'admin123', role: 'admin', name: 'Administrador 1' },
        { id: '4', username: 'admin2', password: 'admin123', role: 'admin', name: 'Administrador 2' },
        { id: '5', username: 'user1', password: 'user123', role: 'user', name: 'Usuario 1' },
        { id: '6', username: 'user2', password: 'user123', role: 'user', name: 'Usuario 2' }
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers));
    }
  } catch (error) {
    console.error('Error initializing users:', error);
  }
}

function authenticateUser(username, password) {
  try {
    initializeUsers();
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const user = users.find(u => 
      u.username === username && u.password === password
    );
    return user || null;
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}
