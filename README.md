# 📝 个人博客

一个使用 React + Vite + Tailwind CSS 构建的现代博客系统，支持直接部署到 Cloudflare Pages。

![Blog Preview](https://img.shields.io/badge/React-18-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8) ![Deploy](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-orange)

## ✨ 特性

- 🎨 **现代化设计** - 简洁优雅的 UI，支持暗色模式
- 📱 **响应式布局** - 完美适配手机、平板和桌面
- ✍️ **Markdown 支持** - 使用 Markdown 编写文章
- 🔍 **搜索和筛选** - 按标签、分类搜索文章
- ⚡ **极速加载** - Vite 构建 + Cloudflare CDN
- 🌐 **全球加速** - Cloudflare Pages 全球 CDN 分发
- 🔄 **自动部署** - GitHub Actions 自动构建部署
- 📊 **管理后台** - 内置文章管理和站点设置

## 🚀 快速开始

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/your-username/your-blog.git
cd your-blog

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 构建

```bash
npm run build
```

构建产物在 `dist/` 目录中。

## 🌍 部署到 Cloudflare Pages

### 方法一：通过 Cloudflare Dashboard（推荐）

1. 将代码推送到 GitHub
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
3. 进入 **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
4. 选择你的 GitHub 仓库
5. 配置构建设置：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. 点击 **Save and Deploy**

### 方法二：通过 GitHub Actions

1. 在 Cloudflare 获取 API Token 和 Account ID
2. 在 GitHub 仓库 Settings → Secrets 中添加：
   - `CLOUDFLARE_API_TOKEN` - Cloudflare API Token
   - `CLOUDFLARE_ACCOUNT_ID` - Cloudflare Account ID
3. 推送代码到 `main` 分支，自动触发部署

### 方法三：使用 Wrangler CLI

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署
wrangler pages deploy dist --project-name=my-blog
```

## 📁 项目结构

```
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions 自动部署
├── public/
│   └── _redirects             # SPA 路由重定向
├── src/
│   ├── components/
│   │   ├── Header.tsx         # 导航头部
│   │   ├── Footer.tsx         # 页脚
│   │   └── PostCard.tsx       # 文章卡片
│   ├── pages/
│   │   ├── Home.tsx           # 首页
│   │   ├── Post.tsx           # 文章详情
│   │   ├── About.tsx          # 关于页面
│   │   ├── Admin.tsx          # 管理后台
│   │   └── Editor.tsx         # 文章编辑器
│   ├── store/
│   │   └── blogStore.ts       # 数据管理
│   ├── types.ts               # TypeScript 类型
│   ├── App.tsx                # 主应用
│   ├── main.tsx               # 入口文件
│   └── index.css              # 全局样式
├── index.html
├── wrangler.toml              # Cloudflare 配置
├── package.json
├── tsconfig.json
└── vite.config.js
```

## 🎨 自定义

### 修改站点信息

在管理后台（`/admin`）中可以修改：
- 站点名称
- 站点描述
- 作者信息
- 社交链接

### 自定义样式

编辑 `src/index.css` 修改全局样式。

### 添加新页面

1. 在 `src/pages/` 创建新页面组件
2. 在 `src/App.tsx` 添加路由

## 🔧 技术栈

| 技术 | 用途 |
|------|------|
| React 18 | 前端框架 |
| TypeScript | 类型安全 |
| Vite | 构建工具 |
| Tailwind CSS 4 | 样式框架 |
| React Router | 路由管理 |
| React Markdown | Markdown 渲染 |
| Lucide React | 图标库 |
| Cloudflare Pages | 部署平台 |

## 📝 数据说明

博客数据默认存储在浏览器 `localStorage` 中。如果需要持久化数据，可以：

1. 使用 Cloudflare Workers + KV/D1 作为后端
2. 使用 Supabase 等 BaaS 服务
3. 将文章以 Markdown 文件形式存储在仓库中

## 📄 License

MIT

---

如果这个项目对你有帮助，欢迎给一个 Star ⭐
