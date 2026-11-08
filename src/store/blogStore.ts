import { BlogPost, BlogConfig } from '../types';

const POSTS_KEY = 'blog_posts';
const CONFIG_KEY = 'blog_config';

const defaultConfig: BlogConfig = {
  siteName: '我的博客',
  siteDescription: '一个使用 React + Cloudflare Pages 构建的现代博客',
  author: '博主',
  authorAvatar: '',
  authorBio: '热爱技术，热爱生活的开发者。在这里分享我的思考和经验。',
  github: 'https://github.com',
  twitter: 'https://twitter.com',
  email: 'hello@example.com',
};

const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: '使用 Cloudflare Pages 部署博客',
    slug: 'deploy-blog-with-cloudflare-pages',
    content: `## 为什么选择 Cloudflare Pages？

Cloudflare Pages 是一个强大的静态站点托管平台，提供以下优势：

- **全球 CDN 加速** - 自动将你的站点分发到全球 200+ 个数据中心
- **免费 SSL 证书** - 自动为你的域名配置 HTTPS
- **自动部署** - 连接 GitHub 仓库，推送即部署
- **Functions 支持** - 可以使用 Cloudflare Workers 实现后端功能
- **慷慨的免费额度** - 每月 500 次构建，无限带宽

## 部署步骤

### 1. 准备代码

确保你的项目可以正常构建：

\`\`\`bash
npm run build
\`\`\`

### 2. 推送到 GitHub

将代码推送到 GitHub 仓库：

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-blog.git
git push -u origin main
\`\`\`

### 3. 连接 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 Pages 页面
3. 点击 "Create a project"
4. 选择 "Connect to Git"
5. 选择你的 GitHub 仓库
6. 配置构建设置：
   - Build command: \`npm run build\`
   - Build output directory: \`dist\`
7. 点击 "Save and Deploy"

### 4. 配置自定义域名（可选）

在 Cloudflare Pages 项目设置中，可以添加自定义域名。如果你的域名已经在 Cloudflare 管理，DNS 会自动配置。

## 总结

Cloudflare Pages 让部署变得非常简单，特别适合个人博客和静态站点。配合 GitHub 的自动部署功能，每次推送代码都会自动更新线上版本。`,
    excerpt: '详细介绍如何使用 Cloudflare Pages 部署你的博客，包括配置步骤和最佳实践。',
    tags: ['Cloudflare', '部署', '教程'],
    category: '教程',
    coverImage: '',
    createdAt: '2024-01-15T08:00:00.000Z',
    updatedAt: '2024-01-15T08:00:00.000Z',
    published: true,
  },
  {
    id: '2',
    title: 'React 18 新特性解读',
    slug: 'react-18-new-features',
    content: `## React 18 带来了什么？

React 18 是一个重要的版本更新，带来了许多令人兴奋的新特性。

### Concurrent Rendering

并发渲染是 React 18 最重要的特性之一。它允许 React 同时准备多个版本的 UI，使应用更加流畅。

\`\`\`jsx
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
\`\`\`

### Automatic Batching

React 18 自动批处理所有状态更新，减少不必要的重渲染：

\`\`\`jsx
function handleClick() {
  setCount(c => c + 1);  // 不会触发重渲染
  setFlag(f => !f);       // 不会触发重渲染
  // React 18 会将它们合并为一次重渲染
}
\`\`\`

### Suspense 改进

Suspense 现在支持服务端渲染中的流式传输：

\`\`\`jsx
<Suspense fallback={<Loading />}>
  <Comments />
</Suspense>
\`\`\`

### useTransition 和 useDeferredValue

这两个新的 Hook 让你可以更好地控制优先级：

\`\`\`jsx
const [isPending, startTransition] = useTransition();

function search(query) {
  startTransition(() => {
    setSearchQuery(query);
  });
}
\`\`\`

## 总结

React 18 的更新让开发者可以构建更快、更流畅的用户体验。建议尽快升级到新版本。`,
    excerpt: 'React 18 带来了并发渲染、自动批处理、Suspense 改进等重要新特性，让我们一起来了解。',
    tags: ['React', '前端', 'JavaScript'],
    category: '技术',
    coverImage: '',
    createdAt: '2024-01-10T08:00:00.000Z',
    updatedAt: '2024-01-10T08:00:00.000Z',
    published: true,
  },
  {
    id: '3',
    title: 'Tailwind CSS 实用技巧',
    slug: 'tailwind-css-tips',
    content: `## Tailwind CSS 实用技巧

Tailwind CSS 是一个功能强大的 CSS 框架，这里分享一些实用技巧。

### 1. 使用 @apply 提取重复样式

\`\`\`css
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600;
}
\`\`\`

### 2. 响应式设计

Tailwind 内置了响应式前缀：

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- 内容 -->
</div>
\`\`\`

### 3. 暗色模式

使用 \`dark:\` 前缀轻松实现暗色模式：

\`\`\`html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  内容
</div>
\`\`\`

### 4. 自定义配置

在 \`tailwind.config.js\` 中扩展主题：

\`\`\`js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
      },
    },
  },
}
\`\`\`

### 5. 使用 JIT 模式

Tailwind CSS v3 默认启用 JIT 模式，按需生成样式，减小最终 CSS 文件大小。

## 总结

Tailwind CSS 让样式开发变得更加高效和一致。掌握这些技巧可以让你的开发效率更上一层楼。`,
    excerpt: '分享一些 Tailwind CSS 的实用技巧，包括响应式设计、暗色模式、自定义配置等。',
    tags: ['CSS', 'Tailwind', '前端'],
    category: '技术',
    coverImage: '',
    createdAt: '2024-01-05T08:00:00.000Z',
    updatedAt: '2024-01-05T08:00:00.000Z',
    published: true,
  },
];

export function getPosts(): BlogPost[] {
  const stored = localStorage.getItem(POSTS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem(POSTS_KEY, JSON.stringify(samplePosts));
  return samplePosts;
}

export function getPublishedPosts(): BlogPost[] {
  return getPosts().filter(p => p.published).sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getPosts().find(p => p.slug === slug);
}

export function getPostById(id: string): BlogPost | undefined {
  return getPosts().find(p => p.id === id);
}

export function savePost(post: BlogPost): void {
  const posts = getPosts();
  const index = posts.findIndex(p => p.id === post.id);
  if (index >= 0) {
    posts[index] = post;
  } else {
    posts.push(post);
  }
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

export function deletePost(id: string): void {
  const posts = getPosts().filter(p => p.id !== id);
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

export function getConfig(): BlogConfig {
  const stored = localStorage.getItem(CONFIG_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem(CONFIG_KEY, JSON.stringify(defaultConfig));
  return defaultConfig;
}

export function saveConfig(config: BlogConfig): void {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
}

export function getAllTags(): string[] {
  const posts = getPublishedPosts();
  const tags = new Set<string>();
  posts.forEach(p => p.tags.forEach(t => tags.add(t)));
  return Array.from(tags);
}

export function getAllCategories(): string[] {
  const posts = getPublishedPosts();
  const categories = new Set<string>();
  posts.forEach(p => categories.add(p.category));
  return Array.from(categories);
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
    .replace(/^-|-$/g, '') || generateId();
}
