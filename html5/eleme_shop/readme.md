- 嵌套
  省去选择器的重复输入，会自动补全上层的选择器

  嵌套给css带来了模块化的概念

  一个模块下的样式统一组织，统一维护组织

- css技巧
1. vertical-align 兄弟间，非父子间对齐，图片跟文字
2. 自定义字体 @font-face
图标字体库 优化 fonts文件夹
再使用：before 伪元素 content：'\e123'的形式来通过库来表现图标
3. @media 条件媒体查询
自适应不同的手机
min-device-pixel-ratio
img 在不同pixel ratio 2X 3X

- stylus 技巧
代码片段的复用  使用函数 mixin混合
(用函数表示来减少代码量的复用)