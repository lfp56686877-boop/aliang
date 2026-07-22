# ProductsSection 组件规范

## Overview
- **Target file:** `src/components/ProductsSection.tsx`
- **Screenshot:** `docs/design-references/products.png`
- **Interaction model:** click-driven (分类切换)

## DOM Structure
```
<section id="products"> (全领域产品)
  ├── <div> (容器)
  │   ├── <div> (标题区域)
  │   │   ├── <h2> "全领域产品"
  │   │   └── <h3> "产品及解决方案"
  │   ├── <div> (分类标签)
  │   │   ├── <button> "心脏科" (默认选中)
  │   │   ├── <button> "鼻喉科"
  │   │   ├── <button> "手术科"
  │   │   └── ... (更多分类)
  │   └── <div> (产品网格)
  │       ├── <div> (产品卡片1)
  │       │   ├── <img> (产品图)
  │       │   └── <div> (产品信息)
  │       │       ├── <h4> (产品名称)
  │       │       └── <p> (产品描述)
  │       ├── <div> (产品卡片2)
  │       │   └── ...
  │       └── ... (更多产品)
  └── <a> "探索产品" (查看更多链接)
```

## Computed Styles

### Container
- padding: 100px 40px
- max-width: 1200px
- margin: 0 auto

### Title Area
- text-align: center
- margin-bottom: 60px

### Heading 2
- font-size: 36px
- font-weight: 700
- color: #333333
- margin-bottom: 15px

### Heading 3
- font-size: 24px
- font-weight: 600
- color: #00559B

### Category Tabs
- display: flex
- justify-content: center
- flex-wrap: wrap
- gap: 15px
- margin-bottom: 40px

### Category Tab
- padding: 10px 24px
- background: transparent
- border: 2px solid #E0E0E0
- border-radius: 30px
- font-size: 14px
- font-weight: 500
- color: #666666
- cursor: pointer
- transition: all 0.3s ease

### Category Tab Active
- background: #00559B
- border-color: #00559B
- color: #FFFFFF

### Category Tab Hover
- border-color: #00559B
- color: #00559B

### Products Grid
- display: grid
- grid-template-columns: repeat(4, 1fr)
- gap: 30px

### Product Card
- background: #FFFFFF
- border-radius: 8px
- overflow: hidden
- box-shadow: 0 2px 10px rgba(0,0,0,0.05)
- transition: transform 0.3s ease, box-shadow 0.3s ease
- cursor: pointer

### Product Card Hover
- transform: translateY(-5px)
- box-shadow: 0 10px 20px rgba(0,0,0,0.1)

### Product Image
- width: 100%
- height: 200px
- object-fit: cover

### Product Info
- padding: 20px

### Product Name
- font-size: 16px
- font-weight: 600
- color: #333333
- margin-bottom: 8px

### Product Description
- font-size: 14px
- color: #666666
- line-height: 1.5

### View More Link
- display: inline-block
- margin-top: 40px
- padding: 15px 30px
- background: #00559B
- color: #FFFFFF
- text-decoration: none
- border-radius: 4px
- font-size: 16px
- font-weight: 500
- transition: background 0.3s ease
- Hover:
  - background: #182B62

## States & Behaviors

### Category Tab Switch
- **Trigger:** 点击分类标签
- **State A (当前分类):**
  - Background: #00559B
  - Border: #00559B
  - Text: #FFFFFF
- **State B (其他分类):**
  - Background: transparent
  - Border: #E0E0E0
  - Text: #666666
- **Animation:** 淡入淡出
- **Duration:** 0.3s
- **Implementation:** useState for activeCategory, conditional rendering

### Product Grid Update
- **Trigger:** 分类切换
- **Animation:** 淡入淡出
- **Duration:** 0.3s
- **Implementation:** 
  - 根据 activeCategory 过滤产品
  - 使用 key 属性确保动画触发

### Product Card Hover
- **Trigger:** 鼠标悬停
- **State A (默认):**
  - Transform: translateY(0)
  - Box-shadow: 0 2px 10px rgba(0,0,0,0.05)
- **State B (悬停):**
  - Transform: translateY(-5px)
  - Box-shadow: 0 10px 20px rgba(0,0,0,0.1)
- **Transition:** all 0.3s ease

## Per-State Content

### 心脏科 (默认)
1. **产品1**
   - Name: "心脏支架"
   - Description: "高性能药物洗脱支架"
   - Image: `public/images/product-1.jpg`

2. **产品2**
   - Name: "心脏起搏器"
   - Description: "永久性心脏起搏器"
   - Image: `public/images/product-2.jpg`

3. **产品3**
   - Name: "心脏瓣膜"
   - Description: "人工心脏瓣膜"
   - Image: `public/images/product-3.jpg`

4. **产品4**
   - Name: "心脏监护仪"
   - Description: "多参数心脏监护"
   - Image: `public/images/product-4.jpg`

### 鼻喉科
1. **产品1**
   - Name: "鼻内窥镜"
   - Description: "高清鼻内窥镜系统"
   - Image: `public/images/product-5.jpg`

2. **产品2**
   - Name: "喉镜"
   - Description: "可视喉镜"
   - Image: `public/images/product-6.jpg`

3. **产品3**
   - Name: "听力检测仪"
   - Description: "纯音听力计"
   - Image: `public/images/product-7.jpg`

4. **产品4**
   - Name: "睡眠监测仪"
   - Description: "多导睡眠监测"
   - Image: `public/images/product-8.jpg`

### 手术科
1. **产品1**
   - Name: "手术刀"
   - Description: "一次性手术刀"
   - Image: `public/images/product-9.jpg`

2. **产品2**
   - Name: "手术剪"
   - Description: "精密手术剪"
   - Image: `public/images/product-1.jpg`

3. **产品3**
   - Name: "手术钳"
   - Description: "微创手术钳"
   - Image: `public/images/product-2.jpg`

4. **产品4**
   - Name: "手术缝合线"
   - Description: "可吸收缝合线"
   - Image: `public/images/product-3.jpg`

## Assets
- Product images: `public/images/product-1.jpg` 到 `product-9.jpg`
- 产品分类图标: 需要下载

## Text Content
- Heading 2: "全领域产品"
- Heading 3: "产品及解决方案"
- Categories: ["心脏科", "鼻喉科", "手术科", "胸外科", "腹腔外科", "全科室"]
- View More: "探索产品"

## Responsive Behavior

### Desktop (1440px+)
- 产品网格: 4列
- 分类标签: 水平排列

### Tablet (768px - 1439px)
- 产品网格: 2列
- 分类标签: 水平排列，可换行

### Mobile (< 768px)
- 产品网格: 1列
- 分类标签: 垂直堆叠或水平滚动

## Implementation Notes

1. 使用 `useState` 管理 `activeCategory`
2. 使用 `useMemo` 优化产品过滤
3. 使用 Tailwind CSS 类:
   - 网格: `grid grid-cols-4 gap-8`
   - 标签: `px-6 py-2 rounded-full border-2`
   - 卡片: `rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow`
4. 产品数据结构:
   ```typescript
   interface Product {
     id: string;
     name: string;
     description: string;
     image: string;
     category: string;
   }
   ```
5. 分类切换时使用 `key={activeCategory}` 确保动画触发
