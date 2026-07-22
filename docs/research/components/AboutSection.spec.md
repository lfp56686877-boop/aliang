# AboutSection 组件规范

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Screenshot:** `docs/design-references/about.png`
- **Interaction model:** scroll-driven (数字动画) + click-driven (链接悬停)

## DOM Structure
```
<section id="about"> (关于威高)
  ├── <div> (容器)
  │   ├── <div> (标题区域)
  │   │   ├── <h2> "我们是威高"
  │   │   ├── <h3> "打造全球化医疗器械和医药创新型企业"
  │   │   └── <p> (描述文字)
  │   ├── <div> (特色链接)
  │   │   ├── <a> (威高文化)
  │   │   │   ├── <img> (图标)
  │   │   │   ├── <span> "威高文化"
  │   │   │   └── <svg> (箭头)
  │   │   ├── <a> (威高大事记)
  │   │   │   └── ...
  │   │   └── <a> (威高荣誉)
  │   │       └── ...
  │   └── <div> (统计数据)
  │       ├── <div> (统计项1)
  │       │   ├── <span> "始建于"
  │       │   ├── <span> "1988"
  │       │   └── <span> "年"
  │       ├── <div> (统计项2)
  │       │   └── ...
  │       ├── <div> (统计项3)
  │       │   └── ...
  │       └── <div> (统计项4)
  │           └── ...
  └── <div> (背景图)
      └── <img> (关于威高背景图)
```

## Computed Styles

### Container
- padding: 100px 40px
- max-width: 1200px
- margin: 0 auto
- display: grid
- grid-template-columns: 1fr 1fr
- gap: 60px
- align-items: center

### Title Area
- max-width: 500px

### Heading 2
- font-size: 36px
- font-weight: 700
- color: #333333
- margin-bottom: 15px

### Heading 3
- font-size: 24px
- font-weight: 600
- color: #00559B
- margin-bottom: 20px

### Description
- font-size: 16px
- line-height: 1.8
- color: #666666
- margin-bottom: 30px

### Feature Links
- display: flex
- flex-direction: column
- gap: 20px

### Feature Link
- display: flex
- align-items: center
- gap: 15px
- text-decoration: none
- color: #333333
- transition: color 0.2s ease
- Hover:
  - color: #00559B

### Feature Link Icon
- width: 50px
- height: 50px
- background: #F1F8FD
- border-radius: 50%
- display: flex
- align-items: center
- justify-content: center

### Feature Link Text
- font-size: 16px
- font-weight: 500

### Feature Link Arrow
- width: 16px
- height: 16px
- color: #00559B
- transition: transform 0.2s ease
- Hover:
  - transform: translateX(5px)

### Statistics Container
- display: grid
- grid-template-columns: repeat(2, 1fr)
- gap: 40px

### Statistic Item
- text-align: center

### Statistic Label
- font-size: 14px
- color: #666666
- margin-bottom: 10px

### Statistic Number
- font-size: 48px
- font-weight: 700
- color: #00559B
- margin-bottom: 5px

### Statistic Unit
- font-size: 16px
- color: #666666

### Background Image
- width: 100%
- height: 100%
- object-fit: cover
- border-radius: 8px

## States & Behaviors

### Number Counter Animation
- **Trigger:** 滚动到视口 (IntersectionObserver)
- **Threshold:** 0.5 (50% 可见)
- **Animation:** 数字从 0 递增到目标值
- **Duration:** 2000ms
- **Easing:** ease-out
- **Implementation:**
  - useState for isVisible
  - useEffect with IntersectionObserver
  - requestAnimationFrame for smooth counting
  - 使用 Math.floor() 确保整数

### Feature Link Hover
- **Trigger:** 鼠标悬停
- **State A (默认):**
  - 箭头位置: translateX(0)
  - 颜色: #333333
- **State B (悬停):**
  - 箭头位置: translateX(5px)
  - 颜色: #00559B
- **Transition:** all 0.2s ease

### Scroll Reveal
- **Trigger:** 滚动到视口
- **Animation:** fadeInUp
- **Duration:** 0.6s
- **Delay:** 0.2s (每个子元素)

## Per-State Content

### Statistics
1. **Founded**
   - Number: 2019
   - Unit: (none)

2. **Products**
   - Number: 500
   - Unit: +

3. **Countries**
   - Number: 50
   - Unit: +

4. **Partners**
   - Number: 100
   - Unit: +

### Feature Links
1. **威高文化**
   - Icon: `public/images/culture-icon.svg`
   - Link: /Culture/index.html?cate=3

2. **威高大事记**
   - Icon: `public/images/history-icon.svg`
   - Link: /History/index.html?cate=29

3. **威高荣誉**
   - Icon: `public/images/honor-icon.svg`
   - Link: /Honnor/index.html?cate=30

## Assets
- Background image: `public/images/about-poster.jpg`
- Feature icons: 需要下载 SVG 图标
- Arrow icon: 从 icons.tsx 使用 ArrowRightIcon

## Text Content
- Heading 2: "我们是威高"
- Heading 3: "打造全球化医疗器械和医药创新型企业"
- Description: "威高集团秉承科技创新，专注于提升研发和管理能力，紧跟医疗产业发展，提供全周期、安全可靠的医疗系统整体解决方案，致力于成为全球化医疗器械和医药创新型企业，推动全球健康事业的进步。"
- Feature links: ["威高文化", "威高大事记", "威高荣誉"]

## Responsive Behavior

### Desktop (1440px+)
- 两列布局
- 统计数据: 2x2 网格
- 背景图: 右侧

### Tablet (768px - 1439px)
- 两列布局
- 统计数据: 2x2 网格
- 间距减小

### Mobile (< 768px)
- 单列布局
- 统计数据: 垂直堆叠
- 背景图: 隐藏或移到下方

## Implementation Notes

1. 使用 `useState` 管理 `isVisible` 和计数动画状态
2. 使用 `useEffect` 添加 IntersectionObserver
3. 使用 `requestAnimationFrame` 实现平滑计数
4. 使用 Tailwind CSS 类:
   - 网格: `grid grid-cols-2 gap-10`
   - 计数: `text-5xl font-bold text-dandelion-blue`
5. 计数动画逻辑:
   - 计算增量: target / (duration / 16)
   - 使用 requestAnimationFrame 递增
   - 使用 Math.floor() 确保整数
6. 使用 `useRef` 引用统计容器以进行 IntersectionObserver
