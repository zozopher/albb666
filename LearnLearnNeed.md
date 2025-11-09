# 经验杂记
~~感谢b站大学与ds老师的大力支持~~

### 1.将背景设置应用到整个body中？

* 无边界：不会看到任何其他颜色的边缘
* 自适应：在任何屏幕尺寸上都保持完整
* 一致性：滚动时背景不会突然改变

###    使用min-height？

* min-height: 100vh确保背景始终覆盖整个视口高度



2.bg-color与color区别——纸张颜色&墨水颜色



### 3.属性合集

* font-family：设置字体
* display:flex：开启弹性布局，可以轻松控制子元素的排列和对齐
* flex-direction：设置排列方向（column纵向）
* align-items：设置对齐方式（center水平居中）



### 4.标签合集

* <img src="图片路径"

     alt="图片描述"

     width="400"

     height="300"

     title="鼠标悬停提示文字"

     loading="lazy"     /*懒加载*/

     class="my-image">



？？？？？注：使用响应式图片 - 添加 max-width: 100% 和 height: auto




### 5.1440px布局实现

* 使用max-width: 1440px和width: 100%的组合



### 6\.常用单位



* &nbsp;绝对单位



px (像素) - 最常用，固定大小



pt (点) - 印刷单位，1pt=1/72英寸



cm/mm/in (厘米/毫米/英寸) - 物理尺寸单位



* 相对单位



% (百分比) - 相对于父元素的宽度



em - 相对于当前元素的字体大小



rem - 相对于根元素(html)的字体大小



vw/vh - 相对于视口宽度/高度的1%



主要区别

单位	基准	特点	适用场景

px	固定值	  精确控制，不随其他元素变化	固定间距，边框

%	父元素宽度	        响应式，随父元素变化	       布局，响应式设计

em	当前字体大小	  与字体大小成比例	      文字相关间距

rem	根元素字体大小	   全局一致的比例	      整体布局，主题统一

vw/v    视口尺寸	           与屏幕大小相关	      全屏布局，大屏适配



### 7\.顺序：上右下左（逆时针）


### 8\.display: inline-flex布局模型
核心作用
1. 智能排列
自动调整子元素大小适应容器

支持水平或垂直方向排列

2. 精准对齐
控制子元素在主轴（水平）和交叉轴（垂直）的对齐方式

实现完美的居中对齐

3. 弹性分配
子元素可按比例分配剩余空间

自动处理换行和间距

4. 顺序控制
无需改变HTML结构即可重新排序元素



### 9\.伪类选择器？（::这样子的）————————CSS高级选择器学习

### 10\.有关<video>
* loop 属性确保视频循环播放，muted 属性避免自动播放时的声音问题

### 11\.for each语法（相当于数组遍历）
array.forEach(function(currentValue, index, array) {
  // 处理每个元素的代码
});

### 12\.css fliter滤镜
* /* 模糊 */
filter: blur(5px);

* /* 亮度 */
filter: brightness(150%);  /* 变亮 */
filter: brightness(50%);   /* 变暗 */

* /* 对比度 */
filter: contrast(200%);    /* 增强对比度 */

* /* 灰度 */
filter: grayscale(100%);   /* 完全黑白 */

* /* 色相旋转 */
filter: hue-rotate(90deg); /* 颜色变化 */

* /* 反转颜色 */
filter: invert(100%);      /* 颜色反转 */

* /* 透明度 */
filter: opacity(50%);      /* 半透明 */

* /* 饱和度 */
filter: saturate(200%);    /* 增强色彩 */

* /* 深褐色 */
filter: sepia(100%);       /* 老照片效果 */

### 13\.js切换效果实现代码示例
* function switchTab(clickedTab, contentId) {
    *切换激活状态*
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    clickedTab.classList.add('active');
    
    *切换内容显示*
    document.querySelectorAll('.content').forEach(content => content.style.display = 'none');
    document.getElementById(contentId).style.display = 'block';
}

* 注：箭头函数=>可改写成普通函数 *forEach(tab =>* == *forEach(function（tab)*

### 14\.库按钮的悬停效果及效果切换实现代码中各变量的指向：（防混淆）

* btns：开头定义的变量，即所有按钮的集合（NodeList/Array）

* button：外层循环的当前按钮（添加监听器的按钮）

* btn：内层循环的当前按钮（遍历时每个按钮）

* this：触发 mouseenter 事件的按钮元素

##### 该循环触发顺序/规则：外层循环在初始化时一次性全部执行完，而内层循环在事件触发时才会执行。
* 问：为什么会分为两个不同的循环开始时间而不是同时进行呢？
* 解：涉及到**同步执行**和**异步执行**的区别。外层循环同步执行：页面加载时，JavaScript 引擎会一口气执行完所有外层循环，目的只是注册事件监听器，告诉浏览器"当发生mouseenter事件时，请调用这个函数"。内层循环异步执行：只有当用户实际把鼠标移到按钮上时才会执行，由浏览器事件系统触发。相当于**先注册，再触发**。

// 辨别同步示例
btns.forEach(function(button) {
  console.log('设置监听器'); // 立即执行
  button.addEventListener('mouseenter', function() {
    console.log('鼠标进入'); // 将来执行（异步）
  });
});
console.log('所有监听器设置完成'); // 立即执行

// 执行顺序：
// 1. "设置监听器"（多次）
// 2. "所有监听器设置完成" 
// 3. "鼠标进入"（用户操作时才执行）

### 15\.关于搜索框input中的flex：1
flex: 1 是 Flexbox 布局中的一个简写属性，它实际上是三个属性的组合
/* 等价于flex-grow: 1;(占据剩余空间,1表示与其他元素平分剩余空间)flex-shrink: 1;（空间不足时自动缩小，1表示可以缩小）flex-basis: 0%;（定义项目在分配多余空间之前的初始大小，0%表示从0）*/ 

### 16\.切换过程中使用switch-case设想尝试时遇到的问题
##### 问题：切换时只出现每组的s类卡片，为什么
    switch (index) {
      case 0:
        document.querySelector('.cards-samples.s').classList.add('active');
        break;
      case 1:
        document.querySelector('.cards-samples.t').classList.add('active');
        break;
      case 2:
        document.querySelector('.cards-samples.u').classList.add('active');
        break;
      case 3:
        document.querySelector('.cards-samples.v').classList.add('active');
        break;
      case 4:
        document.querySelector('.cards-samples.w').classList.add('active');
        break;
      default:
        document.querySelector('.cards-samples.s').classList.add('active')
        break;
    }

* *querySelector()* 只返回匹配的第一个元素，所以：

* 当执行 *document.querySelector('.cards-samples.s')* 时，只给第一个 *.cards-samples.s* 添加了 *active* 类,其他两个 *.cards-samples.s* 元素没有被激活

* 关键变化：将 *querySelector()* 改为 *querySelectorAll()* 并使用 *forEach* 来给所有匹配的元素添加类。


### 17\.grid布局