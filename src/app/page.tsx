import { FaGlobe, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Profilbereich */}
      <div className="text-center mb-8">
        <img
          src="/dein-foto.jpg"
          alt="Profilbild"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
        />
        <h1 className="text-2xl font-bold text-white mb-2">Mac Lio</h1>
        <p className="text-black-300">Software Engineer</p>
      </div>

      {/* Linktree */}
      <div className="w-full max-w-md space-y-4">
        <a
          href="https://deine-website.de"
          className="block w-full p-4 text-center bg-white text-black rounded-lg hover:bg-slate-600 hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          <img src="/globe.svg" alt="Website" className="h-5 w-5" />
          Website
        </a>
        <a
          href="https://github.com/LiosCode"
          className="block w-full p-4 text-center bg-white text-black rounded-lg hover:bg-slate-600 hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          <FaGithub className="h-5 w-5" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/lioscode-525877268/"
          className="block w-full p-4 text-center bg-white text-black rounded-lg hover:bg-slate-600 hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          <FaLinkedin className="h-5 w-5" />
          LinkedIn
        </a>
        <a
          href="mailto:l.fritzenwalder@gmail.com"
          className="block w-full p-4 text-center bg-white text-black rounded-lg hover:bg-slate-600 hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          <FaEnvelope className="h-5 w-5" />
          Kontakt
        </a>
      </div>
    </div>
  );
} 