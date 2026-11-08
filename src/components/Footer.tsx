import { getConfig } from '../store/blogStore';
import { Github, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const config = getConfig();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span>© {new Date().getFullYear()} {config.siteName}</span>
            <span>·</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {config.github && (
              <a
                href={config.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {config.twitter && (
              <a
                href={config.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {config.email && (
              <a
                href={`mailto:${config.email}`}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
          Powered by React + Vite + Tailwind CSS · Deployed on Cloudflare Pages
        </div>
      </div>
    </footer>
  );
}
