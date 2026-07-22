# 新闻中心组件规范

## 概述
- **目标文件**: `src/components/NewsSection.tsx`
- **交互模型**: 静态

## DOM 结构
```
section.news-section (padding: 90px 0, background: #FFFFFF)
  div.container (max-width: 1200px)
    div.section-header (display: flex, justify-content: space-between)
      h2.section-title
        span.highlight (蓝色小标题)
        span (主标题)
      a.view-more (查看更多 →)
    div.news-grid (display: grid, grid-template-columns: repeat(3, 1fr), gap: 32px)
      article.news-card (×3)
        div.card-image
          img
        div.card-content
          time.news-date (日期)
          h3.card-title
          p.card-excerpt (摘要)
          a.read-more (阅读全文 →)
```

## 计算样式

### 新闻区容器
- padding: 90px 0
- background: #FFFFFF

### 区块标题
- margin-bottom: 48px

### 高亮小标题
- font-size: 14px
- color: #00559B
- text-transform: uppercase
- letter-spacing: 2px
- margin-bottom: 8px

### 主标题
- font-size: 36px
- font-weight: 700
- color: #333333

### 查看更多链接
- color: #00559B
- font-size: 14px
- text-decoration: none
- display: inline-flex
- align-items: center
- gap: 8px

### 新闻卡片
- background: #FFFFFF
- border-radius: 8px
- overflow: hidden
- transition: transform 0.3s, box-shadow 0.3s

### 卡片 Hover
- transform: translateY(-4px)
- box-shadow: 0 8px 24px rgba(0,0,0,0.1)

### 卡片图片
- width: 100%
- aspect-ratio: 16/9
- object-fit: cover

### 新闻日期
- font-size: 12px
- color: #999999
- margin-bottom: 8px

### 卡片标题
- font-size: 18px
- font-weight: 600
- color: #333333
- margin-bottom: 8px
- line-height: 1.4

### 卡片摘要
- font-size: 14px
- color: #666666
- line-height: 1.6
- margin-bottom: 16px
- display: -webkit-box
- -webkit-line-clamp: 3
- -webkit-box-orient: vertical
- overflow: hidden

### 阅读全文链接
- color: #00559B
- font-size: 14px
- text-decoration: none
- display: inline-flex
- align-items: center
- gap: 4px

## 内容（丹迪莱医疗）

### 标题
- 小标题: "LATEST NEWS"
- 主标题: "丹迪莱新闻"

### 新闻卡片

#### 新闻1
- 日期: "2024-01-15"
- 标题: "丹迪莱医疗与东南亚最大医疗集团签署战略合作协议"
- 摘要: "近日，丹迪莱医疗与东南亚某知名医疗集团正式签署战略合作协议，双方将在医疗器械进出口、技术交流等方面展开深度合作..."
- 图片: `public/images/news-1.jpg`

#### 新闻2
- 日期: "2024-01-10"
- 标题: "我司多款产品获得CE认证，进一步拓展欧洲市场"
- 摘要: "丹迪莱医疗旗下多款医疗器械产品成功通过CE认证审核，标志着公司产品正式获得进入欧洲市场的通行证..."
- 图片: `public/images/news-2.jpg`

#### 新闻3
- 日期: "2024-01-05"
- 标题: "丹迪莱医疗参加2024阿拉伯国际医疗器械展"
- 摘要: "丹迪莱医疗携多款明星产品亮相2024年阿拉伯国际医疗器械展，与来自全球的医疗行业专业人士共商合作..."
- 图片: `public/images/news-3.jpg`
