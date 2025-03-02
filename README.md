# 中粮智能大模型产品落地页

这是一个使用Vue 3和TypeScript构建的现代化落地页，用于展示中粮集团的智能大模型产品。

## 项目特点

- 🚀 使用Vue 3和TypeScript构建
- 📱 响应式设计，适配各种设备尺寸
- 🎨 使用TailwindCSS进行样式设计
- ⚡ Vite提供快速的开发体验
- 🧩 组件化架构，易于维护和扩展

## 内容亮点

- 🤖 中粮智能大模型产品介绍
- 🌱 农业食品行业智能化解决方案
- 📊 产品特性和功能展示
- 💼 农业生产和食品加工应用场景
- 💰 灵活的价格方案
- 📞 便捷的联系表单

## 开发说明

### 环境要求

- Node.js 16+
- npm 7+

### 开发步骤

1. 安装依赖：

```bash
npm install
```

2. 启动开发服务器：

```bash
npm run dev
```

3. 构建生产版本：

```bash
npm run build
```

### 目录结构

```
.
├── public/            # 静态资源
├── src/               # 源代码
│   ├── assets/        # 资源文件（CSS，图片等）
│   │   ├── Navbar.vue # 导航栏
│   │   ├── Hero.vue   # 主视觉区
│   │   ├── Features.vue # 特性展示
│   │   ├── UseCases.vue # 应用场景
│   │   ├── Pricing.vue # 价格方案
│   │   └── Footer.vue # 页脚与联系表单
│   ├── App.vue        # 根组件
│   └── main.ts        # 入口文件
├── index.html         # HTML模板
├── tailwind.config.js # TailwindCSS配置
├── vite.config.ts     # Vite配置
└── README.md          # 项目说明
```

## 自定义与扩展

- 颜色主题：编辑`tailwind.config.js`中的颜色配置
- 添加新页面：在src/components创建新组件并在App.vue中引入
- 修改文案：直接在各组件模板中更新文本内容

## 鸣谢

- Vue.js团队提供的优秀框架
- TailwindCSS简化了样式开发
- Heroicons提供了精美的图标

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```