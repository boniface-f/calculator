 

# 1.创建项目

```
全局安装脚手架

npm install -g @vue/cli

创建项目

vue create -p dcloudio/uni-preset-vue my-project

启动项目（微信小程序）

npm run dev:mp-weixin

微信小程序开发者工具导入项目

\dist\dev\mp-weixin

如果报错安装依赖：
cnpm install sass-loader node-sass
cnpm install @dcloudio/uni-ui
cnpm install cross-env --save-dev
cnpm install axios

npm速度太慢推荐用cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

# 2.创建第一个自己的页面

```
第一步
复制src/index目录内容修改为index1

第二步
在pages下添加以下内容
```



```json
	{
		"path": "pages/index1/index",
		"style": {
			"navigationBarTitleText": "hello"
		}
	},
```
# 3.样式和sass

```
支持小程序的rpx 和 h5的vw、vh
内置有sass的配置了，只需要 安装对应的依赖即可  “  npm install sass-loader node-sass ”
vue组件中，在 style 标签上 加入 属性 “ <style lang='scss' >   ”  即可
```

```vue
<template>
	<view class="content">
		<view class="rpx">rpx</view>
		<view class="vw">vw</view>
		<view class="sass">sass</view>
	</view>
</template>

<script>
	export default {
	
	}
</script>

<style lang="scss" >
	.rpx{
		/* rpx 小程序中的单位 750rpx  =  屏幕的宽度 */
		width: 750rpx;
		height: 100px;
		background-color: aqua;
	}
	.vw{
		/* vw  h5单位 100vw = 屏幕的宽度  100vh = 屏幕的高度  */
		width: 50vw;
		height: 100px;
		background-color: tan;
	}

	.content{
		.sass{
			background-color: red;
			color: $uni-color-primary;
		}
	}
</style>
```

# 4.基础语法

## 4.1数据展示

```vue
<template>
	<view class="content">
		<view>{{msg}}</view>
		<view :data-color="color">color</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				msg:"一段文字",
				color:"aqua"
			}
		}
	}
</script>

<style lang="scss" >
</style>
```

## 4.2数据的循环

```vue
<template>
	<view class="content">
		<view v-for="(item,index) in  list" :key="item.id">
		  {{ item.id }} -- {{item.text}} -- {{index}}
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				list: [
				  {
				    id: 0,
				    text: "苹果"
				  },
				  {
				    id: 1,
				    text: "🍌"
				  },
				  {
				    id: 2,
				    text: "🍒"
				  },
				]
			}
		}
	}
</script>

<style lang="scss" >
</style>
```

## 4.3条件编译

```vue
<template>
	<view class="content">
      <view v-if="true">v-if1</view> 
      <view v-show="true">v-show1</view>
			<!-- 不经常使用用v-if -->
			<view v-if="false">v-if2</view>
			<!-- 经常使用用 v-show-->
			<view v-show="false">v-show2</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
			}
		}
	}
</script>

<style lang="scss" >
</style>
```

## 4.4计算属性

```vue
<template>
	<view class="content">
    <view> ￥{{money}} </view>
    <view> {{cnMoney}} </view>
		<view
		  v-for="item in filterList"
		  :key="item.id"
		>
		  {{item.text}}
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				money: 10000,
				list: [
				  {
				    id: 0,
				    text: "苹果"
				  },
				  {
				    id: 1,
				    text: "🍌"
				  },
				  {
				    id: 2,
				    text: "🍒"
				  }
				]
			}
		},
		computed: {
		  // 把 cnMoney 看成是在data中的普通的数据一样来使用即可
		  cnMoney() {
		    // ￥ 1000
		    return "￥" + this.money;
		  },
			// 过滤数组
			filterList(){
			  // 只要id >0 都不要显示
			  return this.list.filter(v => v.id <= 1);
			}
		}
	}
</script>

<style lang="scss" >
</style>
```

# 5.事件

```vue
<template>
  <view class="content">
    <!-- 1 给view标签绑定点击事件 -->
    <view data-index="11" @click="handleClick(1,$event)">点击我试试1</view>
    <view data-index="22" @click="handleClick(2,$event)">点击我试试2</view>
  </view>
</template>
 
<script>
export default {
  // 2 在methods里面来定义事件的回调
  methods: {
    handleClick(index,event) {
      console.log(index);
      console.log(event);
      console.log(event.currentTarget.dataset.index);
    }
  }
};
</script>

<style lang="scss" >
</style>
```

# 6.组件

## 6.1组件的简单使用

```
(1)组件的定义  
在src目录下新建 文件夹 components 用来存放组件
在 components 目录下直接新建组件  *.vue
(2)组件的引入
在页面中引入组件  “import  组件名  from ‘组件路径”
(3)组件的注册
在页面中的实例中，新增属性 components
属性 components 是一个对象，把组件放进去注册
(4)组件的使用
在页面的标签中，直接使用引入的组件    “<组件></组件>”
```

CASE:

显示文件

```vue
<template>
  <view class="content">
		<img-boder></img-boder>
		<imgBoder></imgBoder>
  </view>
</template>
 
<script>
import imgBoder from "@/components/img-boder.vue"
export default {
	components:{
		imgBoder
	}
};
</script>

<style lang="scss" >
</style>vue
```

组件文件

```vue
<template>
	<img src="http://p5.qhimg.com/bdr/__85/t011a187c75ed9abbc3.jpg" class="img-border"/>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.img-border{
		border-radius: 50%;
		margin: 10 auto;
	}
</style>
```

## 6.2组件传递参数

### 6.2.1父传子

父组件

```vue
<template>
  <view class="content">
		<!-- 2.传递参数 -->
		<img-boder :mysrc="src1"></img-boder>
		<img-boder :mysrc="src2"></img-boder>
		<!-- <imgBoder></imgBoder> -->
  </view>
</template>
 
<script>
import imgBoder from "@/components/img-boder.vue"
export default {
	data(){
		//1.设置参数
		return{
			src1:"http://p5.qhimg.com/bdr/__85/t011a187c75ed9abbc3.jpg",
			src2:"http://p5.qhimg.com/bdm/334_206_0/t01d838b3b2a04071a4.jpg"
		}
	},
	components:{
		imgBoder
	}
};
</script>

<style lang="scss" >
</style>
```

子组件

```vue
<template>
	<!-- 4.使用参数 -->
	<img :src="mysrc" class="img-border"/>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		//3.接受参数
		props:{
			mysrc:String
		}
	}
</script>

<style>
	.img-border{
		border-radius: 50%;
		margin: 10 auto;
	}
</style>
```

传递演示

![image-20200707220257095](C:\Users\boniface\AppData\Roaming\Typora\typora-user-images\image-20200707220257095.png)

### 6.2.2子传父

```
子组件通过 触发事件 的方式向父组件传递数据 
父组件通过 监听事件 的方式来接收数据
```

子组件

```vue
<template>
	<!-- 2.使用事件 -->
	<img @click="handleSendImgPath" :src="mysrc" class="img-border"/>
</template>

<script>
	export default{
		props:{
			mysrc:String
		},
		methods:{
			//1.设置事件
			handleSendImgPath(){
				this.$emit("imgSrcReceive",this.mysrc);
				console.log("子组件触发")
			}
		}
	}
</script>

<style>
	.img-border{
		border-radius: 50%;
		margin: 10 auto;
	}
</style>
```

父组件

```vue
<template>
  <view class="content">
		<!-- 3.监听事件 -->
		<img-boder @imgSrcReceive="handleSrc" :mysrc="src1"></img-boder>
		<img-boder @imgSrcReceive="handleSrc" :mysrc="src2"></img-boder>
		<view>
			子组件传递来的路径{{srcPath}}
		</view>
		<!-- <imgBoder></imgBoder> -->
  </view>
</template>
 
<script>
import imgBoder from "@/components/img-boder.vue"
export default {
	data(){
		return{
			srcPath:"",
			src1:"http://p5.qhimg.com/bdr/__85/t011a187c75ed9abbc3.jpg",
			src2:"http://p5.qhimg.com/bdm/334_206_0/t01d838b3b2a04071a4.jpg"
		}
	},
	components:{
		imgBoder
	},
	methods:{
		handleSrc(e){
			this.srcPath = e
			console.log("父组件触发")
		}
	}
};
</script>

<style lang="scss" >
</style>
```

## 6.3全局共享数据

### 6.3.1通过 Vue的原型共享数据

main.js

```vue
Vue.prototype.baseurl="www.baidu.com";
```

Index.vue

```vue
<script>
import imgBoder from "@/components/img-boder.vue"
export default {
	 onLoad(){
		console.log(this.baseurl)
	}
};
</script>
```

### 6.3.2通过 globalData 共享数据

App.vue

```vue
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			base:"www.360.com"
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
```

Index.vue

```vue
<script>
import imgBoder from "@/components/img-boder.vue"
export default {
	 onLoad(){
		console.log(getApp().globalData.base);
	}
};
</script>
```

## 6.4组件插槽

```
标签其实也是数据中的一种，想实现动态的给子组件传递 标签，就可以使用插槽 slot 
通过slot 来实现占位符
```

父组件

```vue
<template>
  <view class="content">
		<my-form>
			<input type="text">
			<radio></radio>
			<checkbox></checkbox>
		</my-form>
  </view>
</template>
 
<script>
import myForm from "@/components/myform.vue"
export default {
	components:{
		myForm
	}
};
</script>

<style lang="scss" >
</style>
```

子组件

```vue
<template>
	<view class="content">
		<view class="mytitle">
			一个标题
		</view>
		<view class="mycontent">
			<slot></slot>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
```

# 7.生命周期

参考网站：

```
https://uniapp.dcloud.io/frame?id=生命周期
https://cn.vuejs.org/v2/guide/instance.html?#生命周期图示
https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page-life-cycle.html
```

UNI-APP生命周期常用介绍:

```
(1)uni-app框架的生命周期结合了 vue 和 微信小程序的生命周期
(2)全局的APP中 使用  onLaunch  表示应用启动时
(3)页面中 使用 onLoad 或者 onShow   分别表示 页面初始化 和 页面显示时
(4)组件中使用 mounted 组件挂载完毕时
```

