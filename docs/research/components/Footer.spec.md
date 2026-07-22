# Footer 组件规范

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/footer.png`
- **Interaction model:** static + hover effects

## DOM Structure
```
<footer> (页脚)
  ├── <div> (上部分)
  │   ├── <div> (公司信息)
  │   │   ├── <img> (Logo)
  │   │   └── <p> (公司简介)
  │   ├── <div> (快速链接)
  │   │   ├── <h4> "快速链接"
  │   │   ├── <a> "关于我们"
  │   │   ├── <a> "产品中心"
  │   │   ├── <a> "新闻中心"
  │   │   └── <a> "联系我们"
  │   ├── <div> (产品分类)
  │   │   ├── <h4> "产品分类"
  │   │   ├── <a> "心脏科"
  │   │   ├── <a> "手术科"
  │   │   ├── <a> "鼻喉科"
  │   │   └── <a> "更多产品"
  │   └── <div> (联系我们)
  │       ├── <h4> "联系我们"
  │       ├── <p> (地址)
  │       ├── <p> (电话)
  │       ├── <p> (邮箱)
  │       └── <div> (社交媒体)
  │           ├── <a> (微信)
  │           ├── <a> (微博)
  │           └── <a> (LinkedIn)
  └── <div> (下部分 - 版权)
      ├── <p> "© 2024 威高集团有限公司 版权所有"
      └── <div> (法律链接)
          ├── <a> "隐私政策"
          ├── <a> "使用条款"
          └── <a> "网站地图"
```

## Computed Styles

### Footer Container
- background: #1A1A1A
- color: #FFFFFF
- padding: 80px 40px 40px

### Upper Section
- max-width: 1200px
- margin: 0 auto
- display: grid
- grid-template-columns: 2fr 1fr 1fr 1.5fr
- gap: 60px
- margin-bottom: 60px

### Company Info
- max-width: 300px

### Logo
- width: 120px
- margin-bottom: 20px

### Company Description
- font-size: 14px
- line-height: 1.8
- color: #CCCCCC

### Quick Links / Products
- display: flex
- flex-direction: column
- gap: 15px

### Section Title
- font-size: 18px
- font-weight: 600
- color: #FFFFFF
- margin-bottom: 20px

### Footer Link
- font-size: 14px
- color: #CCCCCC
- text-decoration: none
- transition: color 0.2s ease
- Hover:
  - color: #00559B

### Contact Info
- display: flex
- flex-direction: column
- gap: 15px

### Contact Item
- display: flex
- align-items: flex-start
- gap: 10px
- font-size: 14px
- color: #CCCCCC

### Contact Icon
- width: 16px
- height: 16px
- color: #00559B
- flex-shrink: 0

### Social Media
- display: flex
- gap: 15px
- margin-top: 20px

### Social Icon
- width: 40px
- height: 40px
- background: rgba(255,255,255,0.1)
  border-radius: 50%
  display: flex
  align-items: center
  justify-content: center
  color: #FFFFFF
  transition: all 0.2s ease
  Hover:
    background: #00559B
    transform: translateY(-3px)

### Lower Section
- border-top: 1px solid rgba(255,255,255,0.1)
- padding-top: 30px
- max-width: 1200px
- margin: 0 auto
- display: flex
- justify-content: space-between
- align-items: center

### Copyright
- font-size: 14px
- color: #999999

### Legal Links
- display: flex
  gap: 30px

### Legal Link
- font-size: 14px
  color: #999999
  text-decoration: none
  transition: color 0.2s ease
  Hover:
    color: #00559B

## States & Behaviors

### Footer Link Hover
- **Trigger:** 鼠标悬停
- **State A (默认):** color: #CCCCCC
- **State B (悬停):** color: #00559B
- **Transition:** color 0.2s ease

### Social Icon Hover
- **Trigger:** 鼠标悬停
- **State A (默认):**
  - background: rgba(255,255,255,0.1)
  - transform: translateY(0)
- **State B (悬停):**
  - background: #00559B
  - transform: translateY(-3px)
- **Transition:** all 0.2s ease

### Legal Link Hover
- **Trigger:** 鼠标悬停
- **State A (默认):** color: #999999
- **State B (悬停):** color: #00559B
- **Transition:** color 0.2s ease

## Per-State Content

### Company Info
- Logo: `public/images/logo-white.svg`
- Description: "威高集团始建于1988年，系中国企业500强，目前致力于发展主营业务医疗器械和医药，始终以改善国民健康为己任，打造医疗生态链，现成为全球品种齐全、安全可靠、值得信赖的医疗系统整体解决方案供应商."

### Quick Links
1. 关于我们 → /about.html?cate=2
2. 产品中心 → /Product/index.html?cate=23
3. 新闻中心 → /News/index.html?cate=31
4. 联系我们 → /Contact/index.html?cate=32

### Products
1. 心脏科 → /Product/index.html?cate=23&sub=heart
2. 手术科 → /Product/index.html?cate=23&sub=surgery
3. 鼻喉科 → /Product/index.html?cate=23&sub=ent
4. 更多产品 → /Product/index.html?cate=23

### Contact
- Address: "山东省威海市威高路1号"
- Phone: "+86-631-5628888"
- Email: "info@weigaoholding.com"

### Social Media
- 微信: # (二维码弹窗)
- 微博: https://weibo.com/weigao
- LinkedIn: https://linkedin.com/company/weigao

### Copyright
- "© 2024 威高集团有限公司 版权所有"

### Legal Links
1. 隐私政策 → /privacy.html
2. 使用条款 → /terms.html
3. 网网站地图 → /sitemap.html

## Assets
- Logo: `public/images/logo-white.svg`
- Social icons: 从 icons.tsx 使用 WeChatIcon, WeiboIcon, LinkedInIcon
- Contact icons: 从 icons.tsx 使用 LocationIcon, PhoneIcon, EmailIcon

## Text Content
- Section titles: ["快速链接", "产品分类", "联系我们"]
- Footer links: 见 Per-State Content

## Responsive Behavior

### Desktop (1440px+)
- 4列布局
- 版权信息水平排列

### Tablet (768px - 1439px)
- 2列布局
- 版权信息水平排列

### Mobile (< 768px)
- 单列布局
- 版权信息垂直堆叠

## Implementation Notes

1. 使用 Tailwind CSS 类:
   - 背景: `bg-gray-900`
   - 网格: `grid grid-cols-4 gap-16`
   - 链接: `text-gray-400 hover:text-dandelion-blue transition-colors`
2. 社交媒体图标使用 SVG 组件
3. 响应式使用 `md:grid-cols-2 lg:grid-cols-4`
4. 版权信息使用 `flex flex-col md:flex-row justify-between items-center`
