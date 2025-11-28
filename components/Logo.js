function Logo() {
  try {
    return (
      <div className="w-12 h-12 relative" data-name="logo" data-file="components/Logo.js">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg transform rotate-45 shadow-lg"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-orange-400 rounded transform rotate-12"></div>
      </div>
    );
  } catch (error) {
    console.error('Logo component error:', error);
    return null;
  }
}