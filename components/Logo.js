function Logo() {
  try {
    return (
      <div className="flex justify-center mb-6" data-name="logo" data-file="components/Logo.js">
        <div className="relative w-16 h-16">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="cubeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="cubeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <polygon points="50,10 90,30 90,70 50,90" fill="url(#cubeGradient1)" />
            <polygon points="50,10 10,30 10,70 50,90" fill="url(#cubeGradient2)" opacity="0.8" />
            <polygon points="10,30 50,50 90,30 50,10" fill="#a78bfa" />
          </svg>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Logo component error:', error);
    return null;
  }
}