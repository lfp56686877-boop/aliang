# HeroSection 组件规范

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/hero.png`
- **Interaction model:** time-driven (自动轮播) + click-driven (手动切换)

## DOM Structure
```
<section> (全屏容器)
  ├── <div> (轮播容器)
  │   ├── <div> (Slide 1)
  │   │   ├── <img> (背景图)
  │   │   └── <div> (内容)
  │   │       ├── <h1> "偕同白衣使者"
  │   │       ├── <h2> "开创健康未来"
  │   │       ├── <p> "Your Health We Care"
  │   │       └── <a> "探索威高"
  │   ├── <div> (Slide 2)
  │   │   └── ... (类似结构)
  │   └── <div> (Slide 3)
  │       └── ... (类似结构)
  ├── <div> (进度指示器)
  │   ├── <span> "01"
  │   ├── <span> "02"
  │   └── <span> "03"
  ├── <div> (控制按钮)
  │   ├── <button> (暂停/播放)
  │   └── <button> (下箭头)
  └── <div> (下箭头导航)
      └── <svg> (箭头图标)
```

## Computed Styles

### Container
- width: 100vw
- height: 100vh
- position: relative
- overflow: hidden

### Slide
- position: absolute
- top: 0
- left: 0
- width: 100%
- height: 100%
- opacity: 0 (非当前)
- transition: opacity 0.8s ease-in-out

### Slide Active
- opacity: 1

### Background Image
- width: 100%
- height: 100%
- object-fit: cover

### Content Container
- position: absolute
- top: 50%
- left: 50%
- transform: translate(-50%, -50%)
- text-align: center
- color: #FFFFFF
- z-index: 10

### Heading 1
- font-size: 48px
- font-weight: 700
- margin-bottom: 10px
- text-shadow: 0 2px 4px rgba(0,0,0,0.3)

### Heading 2
- font-size: 36px
- font-weight: 600
- margin-bottom: 20px
- text-shadow: 0 2px 4px rgba(0,0,0,0.3)

### Paragraph (English)
- font-size: 18px
- font-weight: 400
- margin-bottom: 30px
- opacity: 0.9
- font-style: italic

### CTA Button
- display: inline-block
- padding: 15px 30px
- background: transparent
- border: 2px solid #FFFFFF
- color: #FFFFFF
- font-size: 16px
- font-weight: 500
- text-decoration: none
- transition: all 0.3s ease
- Hover:
  - background: #FFFFFF
  - color: #00559B

### Progress Indicator
- position: absolute
- bottom: 100px
- right: 40px
- display: flex
- flex-direction: column
- gap: 15px
- z-index: 20

### Progress Number
- font-size: 14px
- color: rgba(255,255,255,0.5)
- cursor: pointer
- transition: color 0.3s ease

### Progress Number Active
- color: #FFFFFF
- font-weight: 600

### Control Buttons
- position: absolute
- bottom: 100px
- left: 40px
- display: flex
- gap: 15px
- z-index: 20

### Control Button
- width: 40px
- height: 40px
- background: rgba(255,255,255,0.2)
- border: none
- border-radius: 50%
- color: #FFFFFF
- cursor: pointer
- transition: background 0.3s ease
- Hover:
  - background: rgba(255,255,255,0.3)

### Down Arrow
- position: absolute
- bottom: 40px
- left: 50%
- transform: translateX(-50%)
- z-index: 20
- animation: bounce 2s infinite

## States & Behaviors

### Auto Play
- **Trigger:** 页面加载后自动开始
- **Interval:** 5000ms
- **Implementation:** setInterval + useEffect cleanup

### Pause/Play Toggle
- **Trigger:** 点击暂停/播放按钮
- **State A (播放中):**
  - Icon: 暂停符号 (||)
  - Interval: 运行中
- **State B (暂停):**
  - Icon: 播放符号 (▶)
  - Interval: 清除
- **Implementation:** useState for isPlaying, useEffect for interval

### Manual Slide Change
- **Trigger:** 点击进度指示器数字
- **Action:** 切换到对应幻灯片
- **Animation:** 淡入淡出 (opacity transition)
- **Duration:** 800ms

### Slide Transition
- **Type:** 淡入淡出
- **Duration:** 800ms
- **Easing:** ease-in-out
- **Implementation:** CSS transition on opacity

### Down Arrow Scroll
- **Trigger:** 点击下箭头
- **Action:** 平滑滚动到下一部分 (AboutSection)
- **Implementation:** document.getElementById('about').scrollIntoView({ behavior: 'smooth' })

## Per-State Content

### Slide 1
- Heading 1: "偕同白衣使者"
- Heading 2: "开创健康未来"
- English: "Your Health We Care"
- CTA: "探索威高"
- Background: `public/images/hero-1.jpg`

### Slide 2
- Heading 1: "致力于成为中国最强、国际一流"
- Heading 2: "最受人尊敬的医疗器械和医药创新型企业"
- English: "To Be The Strongest In China, Best-In-Class Globally"
- CTA: "探索威高"
- Background: `public/images/hero-2.jpg`

### Slide 3
- Heading 1: "满足并努力超越顾客的"
- Heading 2: "最大需求"
- English: "Meet And Strive To Exceed The Customer's Greatest Needs"
- CTA: "探索威高"
- Background: `public/images/hero-3.jpg`

## Assets
- Background images: `public/images/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
- Down arrow SVG: 从 icons.tsx 使用 DownArrowIcon
- Pause/Play icons: 从 icons.tsx 使用 PauseIcon, PlayIcon

## Text Content
- 见 Per-State Content 部分

## Responsive Behavior

### Desktop (1440px+)
- Heading 1: 48px
- Heading 2: 36px
- Content: 居中
- 控制按钮: 左下角
- 进度指示器: 右下角

### Tablet (768px - 1439px)
- Heading 1: 36px
- Heading 2: 28px
- 控制按钮: 底部居中
- 进度指示器: 底部居中

### Mobile (< 768px)
- Heading 1: 28px
- Heading 2: 22px
- 控制按钮: 隐藏
- 进度指示器: 隐藏
- 下箭头: 保持显示

## Implementation Notes

1. 使用 `useState` 管理当前幻灯片索引和播放状态
2. 使用 `useEffect` 处理自动播放和清理
3. 使用 CSS transition 实现淡入淡出效果
4. 使用 Tailwind CSS 类:
   - 全屏: `w-screen h-screen`
   - 绝对定位: `absolute inset-0`
   - 过渡: `transition-opacity duration-800`
5. 轮播逻辑:
   - 下一张: (currentIndex + 1) % slides.length
   - 上一张: (currentIndex - 1 + slides.length) % slides.length
6. 使用 `key` 属性确保 React 正确渲染动画
