# Navbar 组件规范

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/navbar.png`
- **Interaction model:** scroll-driven (背景变化) + click-driven (菜单、搜索)

## DOM Structure
```
<nav> (固定在顶部)
  ├── <div> (容器)
  │   ├── <a> (Logo)
  │   │   └── <img> (威高logo)
  │   ├── <ul> (导航菜单)
  │   │   ├── <li> "关于"
  │   │   ├── <li> "产品"
  │   │   └── <li> "新闻"
  │   └── <div> (搜索图标)
  └── <div> (移动菜单按钮 - 仅移动端)
```

## Computed Styles

### Container
- position: fixed
- top: 0
- left: 0
- right: 0
- z-index: 1000
- padding: 20px 40px
- display: flex
- justify-content: space-between
- align-items: center
- transition: all 0.3s ease

### Logo
- width: 120px
- height: auto
- cursor: pointer

### Navigation Menu
- display: flex
- gap: 40px
- list-style: none
- margin: 0
- padding: 0

### Menu Item
- font-size: 16px
- font-weight: 500
- color: #FFFFFF (初始) / #333333 (滚动后)
- cursor: pointer
- transition: color 0.3s ease
- position: relative

### Menu Item Hover
- color: #00559B
- ::after (下划线)
  - content: ""
  - position: absolute
  - bottom: -5px
  - left: 0
  - width: 0
  - height: 2px
  - background: #00559B
  - transition: width 0.3s ease
- Hover时 width: 100%

### Search Icon
- width: 20px
- height: 20px
- color: #FFFFFF (初始) / #333333 (滚动后)
- cursor: pointer
- transition: color 0.3s ease

## States & Behaviors

### Scroll State Change
- **Trigger:** window.scrollY > 50px
- **State A (初始/顶部):**
  - background: transparent
  - Menu color: #FFFFFF
  - Search icon color: #FFFFFF
- **State B (滚动后):**
  - background: #FFFFFF
  - box-shadow: 0 2px 10px rgba(0,0,0,0.1)
  - Menu color: #333333
  - Search icon color: #333333
- **Transition:** all 0.3s ease
- **Implementation:** 
  - React useState for isScrolled
  - useEffect with scroll event listener
  - requestAnimationFrame for performance

### Mobile Menu Toggle
- **Trigger:** 点击汉堡菜单按钮 (仅移动端)
- **State A (关闭):**
  - Mobile menu: display: none
  - Button: 三条横线
- **State B (打开):**
  - Mobile menu: display: flex, flex-direction: column
  - Button: X 关闭图标
- **Animation:** slide-in from right
- **Duration:** 0.3s

## Assets
- Logo: `public/images/logo.svg` (需要下载)
- Search icon: 从 icons.tsx 使用 SearchIcon

## Text Content
- Logo text: "威高"
- Menu items: ["关于", "产品", "新闻"]

## Responsive Behavior

### Desktop (1440px+)
- 水平菜单显示
- 汉堡菜单隐藏

### Tablet (768px - 1439px)
- 汉堡菜单显示
- 水平菜单隐藏

### Mobile (< 768px)
- 汉堡菜单显示
- 水平菜单隐藏
- padding 减少到 15px 20px

## Implementation Notes

1. 使用 `useState` 管理 `isScrolled` 状态
2. 使用 `useEffect` 添加 scroll event listener
3. 使用 `requestAnimationFrame` 优化滚动性能
4. 使用 Tailwind CSS 类:
   - 固定: `fixed top-0 left-0 right-0 z-50`
   - 过渡: `transition-all duration-300`
   - 背景: `bg-transparent` / `bg-white`
   - 阴影: `shadow-md`
5. 移动端菜单使用 `md:hidden` 和 `md:flex` 控制显示
