import { getConfig } from '../store/blogStore';
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react';

export default function About() {
  const config = getConfig();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="text-center mb-12">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl text-white font-bold shadow-lg">
          {config.author.charAt(0)}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          关于{config.author}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          {config.authorBio}
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 mb-12">
        {config.github && (
          <a
            href={config.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
        {config.twitter && (
          <a
            href={config.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Twitter className="w-4 h-4" />
            <span>Twitter</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
        {config.email && (
          <a
            href={`mailto:${config.email}`}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        )}
      </div>

      {/* Tech Stack */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🛠 技术栈</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'React', desc: '前端框架' },
            { name: 'TypeScript', desc: '类型安全' },
            { name: 'Vite', desc: '构建工具' },
            { name: 'Tailwind CSS', desc: '样式框架' },
            { name: 'React Router', desc: '路由管理' },
            { name: 'Cloudflare Pages', desc: '部署平台' },
          ].map(tech => (
            <div key={tech.name} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="font-medium text-gray-900 dark:text-white text-sm">{tech.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{tech.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About the Blog */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📝 关于这个博客</h2>
        <div className="text-gray-600 dark:text-gray-300 space-y-3 leading-relaxed">
          <p>
            这是一个使用现代前端技术栈构建的个人博客。支持 Markdown 写作，响应式设计，暗色模式，以及通过 GitHub 自动部署到 Cloudflare Pages。
          </p>
          <p>
            博客的源代码完全开源，你可以自由地使用和修改。如果你觉得这个项目有帮助，欢迎给一个 Star ⭐
          </p>
          <p>
            博客数据存储在浏览器本地（localStorage），你也可以将其改造为使用数据库存储。
          </p>
        </div>
      </div>
    </div>
  );
}
