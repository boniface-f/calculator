#  微信小程序-简易计算器

----------
第一天学习小程序根据API来完成的一个小demo，难点在于微信小程序不支持eval()运算，通过查阅资料找到一个代替的方法：引入rpn.js,在底部先暴露，才能引用外部js
,调用calCommonExp(str)方法就可以直接运算字符串,小细节还有很多没完成，还有挺多bug，算是自己的一个小收获。

## 效果展示
![demo](https://github.com/aa906849411/Mini-Program/blob/master/calculator/image/36.jpg)  
![demo](https://github.com/aa906849411/Mini-Program/blob/master/calculator/image/37.jpg)  
![demo](https://github.com/aa906849411/Mini-Program/blob/master/calculator/image/38.jpg)
