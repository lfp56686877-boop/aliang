# ESG区组件规范

## 概述
- **目标文件**: `src/components/ESGSection.tsx`
- **交互模型**: 静态

## DOM 结构
```
section.esg-section (padding: 120px 0, background: linear-gradient)
  div.container (max-width: 1200px, text-align: center)
    div.esg-icon
      img (ESG图标)
    h2.esg-title (白色)
    p.esg-description (白色)
    div.esg-stats (display: flex, justify-content: center, gap: 80px)
      div.stat-item (×3)
        span.stat-value (白色, 大字体)
        span.stat-label (白色)
```

## 计算样式

### ESG区容器
- padding: 120px 0
- background: linear-gradient(135deg, #00559B 0%, #182B62 100%)
- text-align: center

### ESG图标
- width: 64px
- height: 64px
- margin: 0 auto 24px

### ESG标题
- font-size: 36px
- font-weight: 700
- color: #FFFFFF
- margin-bottom: 16px

### ESG描述
- font-size: 16px
- color: rgba(255,255,255,0.9)
- line-height: 1.8
- max-width: 800px
- margin: 0 auto 60px

### 统计数字
- font-size: 48px
- font-weight: 700
- color: #FFFFFF
- line-height: 1

### 统计标签
- font-size: 14px
- color: rgba(255,255,255,0.8)
- margin-top: 8px

## 内容（丹迪莱医疗）

### 图标
ESG相关图标

### 标题
"可持续发展承诺"

### 描述
"作为负责任的医疗器械出口企业，丹迪莱医疗始终坚持可持续发展理念。我们严格筛选环保合规的供应商，推广绿色医疗产品，致力于为全球医疗事业贡献力量。"

### 统计数据
- 100% 合规供应商
- 30% 碳减排目标
- 50+ 受益国家

### 资源
- ESG图标: `public/images/esg-icon.svg`
