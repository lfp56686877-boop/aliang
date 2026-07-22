# 威高网站行为分析

## 全局行为

### 1. 平滑滚动
- **类型:** CSS scroll-behavior: smooth
- **触发:** 点击锚点链接
- **实现:** 全局 CSS

### 2. 自定义滚动条
- **宽度:** 8px
- **轨道颜色:** #f1f1f1
- **滑块颜色:** #00559B (威高蓝)
- **悬停颜色:** #182B62 (深蓝)

### 3. 页面加载动画
- **类型:** fadeInUp
- **时长:** 0.6s
- **缓动:** ease-out

## 组件行为

### 导航栏 (Navbar)

#### 滚动变化行为
- **触发:** 滚动位置 > 50px
- **状态A (初始):**
  - 背景: 透明
  - 文字: 白色
- **状态B (滚动后):**
  - 背景: 白色 (#FFFFFF)
  - 文字: 深色 (#333333)
  - 阴影: 0 2px 10px rgba(0,0,0,0.1)
- **过渡:** all 0.3s ease
- **实现:** CSS transition + scroll event listener

#### 搜索框
- **交互:** 点击搜索图标展开
- **动画:** 宽度从 0 到 200px
- **过渡:** width 0.3s ease

### Hero 轮播区 (HeroSection)

#### 自动播放
- **间隔:** 5秒
- **触发:** 页面加载后自动开始
- **暂停:** 点击暂停按钮
- **恢复:** 点击播放按钮

#### 幻灯片切换
- **类型:** 淡入淡出
- **时长:** 0.8s
- **缓动:** ease-in-out

#### 导航箭头
- **下箭头:** 点击滚动到下一部分
- **动画:** 向下弹跳 (bounce animation)
- **频率:** 2s infinite

#### 进度指示器
- **类型:** 数字 (01, 02, 03)
- **当前状态:** 高亮显示
- **点击:** 切换到对应幻灯片

### 产品分类 (ProductsSection)

#### 分类切换
- **交互:** 点击分类标签
- **动画:** 淡入淡出
- **时长:** 0.3s
- **状态:**
  - 默认: 心脏科
  - 点击其他分类切换内容

#### 产品卡片悬停
- **效果:** 图片放大
- **缩放:** scale(1.05)
- **过渡:** transform 0.3s ease

### 关于威高 (AboutSection)

#### 统计数字动画
- **触发:** 滚动到视口
- **动画:** 数字从 0 递增到目标值
- **时长:** 2s
- **缓动:** ease-out

#### 特色链接悬停
- **效果:** 箭头向右移动
- **位移:** translateX(5px)
- **过渡:** transform 0.2s ease

### 页脚 (Footer)

#### 链接悬停
- **效果:** 颜色变化
- **颜色:** #00559B (威高蓝)
- **过渡:** color 0.2s ease

#### 社交媒体图标
- **效果:** 放大
- **缩放:** scale(1.1)
- **过渡:** transform 0.2s ease

## 响应式行为

### Desktop (1440px+)
- 导航: 水平菜单
- Hero: 全屏
- 产品: 4列网格
- 统计: 水平排列

### Tablet (768px - 1439px)
- 导航: 汉堡菜单
- Hero: 全屏
- 产品: 2列网格
- 统计: 2x2网格

### Mobile (< 768px)
- 导航: 汉堡菜单
- Hero: 全屏
- 产品: 1列网格
- 统计: 垂直堆叠

## 动画关键帧

### fadeInUp
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### bounce
```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
```

## 实现注意事项

1. **导航栏滚动效果:** 需要添加 scroll event listener，使用 requestAnimationFrame 优化性能
2. **轮播图:** 使用 CSS transition 实现淡入淡出，JavaScript 控制索引
3. **数字动画:** 使用 IntersectionObserver 检测视口，requestAnimationFrame 实现递增
4. **产品分类:** 使用 React state 管理当前选中的分类
5. **响应式:** 使用 Tailwind CSS 的响应式前缀 (md:, lg:)
