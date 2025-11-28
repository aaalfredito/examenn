const users = [
  { id: 1, username: 'superadmin1', password: 'super123', role: 'superusuario', name: 'Juan Pérez', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 2, username: 'superadmin2', password: 'super456', role: 'superusuario', name: 'María García', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 3, username: 'admin1', password: 'admin123', role: 'admin', name: 'Carlos López', avatar: 'https://i.pravatar.cc/150?img=33' },
  { id: 4, username: 'admin2', password: 'admin456', role: 'admin', name: 'Ana Martínez', avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: 5, username: 'user1', password: 'user123', role: 'usuario', name: 'Pedro Sánchez', avatar: 'https://i.pravatar.cc/150?img=15' },
  { id: 6, username: 'user2', password: 'user456', role: 'usuario', name: 'Laura Torres', avatar: 'https://i.pravatar.cc/150?img=20' }
];

function authenticateUser(username, password) {
  return users.find(u => u.username === username && u.password === password) || null;
}

function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}