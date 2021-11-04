<template>
	<view class="content">
		<view class="calculator">
			<view class="results">
				<input class="history" v-model="history" />
				<input class="input" v-model="display" />		
			</view>

			<view class="mode" v-if="changeMode" >  			
				<button class="button2"></button>
				<button class="button2"></button>
				<button class="button2"></button>
				<button class="button2"></button>
				<button class="button2"></button>

				<button class="button delsign" data-index='C' @click="press($event)">C</button>
				<button class="button spesign" data-index='±' @click="press($event)">±</button>
				<button class="button spesign" data-index='%' @click="press($event)">%</button>
				<button class="button spesign" data-index='/' @click="press($event)">/</button>

				<button class="button" data-index='7' @click="press($event)">7</button>
				<button class="button" data-index='8' @click="press($event)">8</button>
				<button class="button" data-index='9' @click="press($event)">9</button>
				<button class="button spesign" data-index='*' @click="press($event)">*</button>

				<button class="button" data-index='4' @click="press($event)">4</button>
				<button class="button" data-index='5' @click="press($event)">5</button>
				<button class="button" data-index='6' @click="press($event)">6</button>
				<button class="button spesign" data-index='-' @click="press($event)">-</button>

				<button class="button" data-index='1' @click="press($event)">1</button>
				<button class="button" data-index='2' @click="press($event)">2</button>
				<button class="button" data-index='3' @click="press($event)">3</button>
				<button class="button spesign" data-index='+' @click="press($event)">+</button>

				<button class="button" data-index='.' @click="press($event)">.</button>
				<button class="button" data-index='0' @click="press($event)">0</button>		
				<button class="button equal-sign" data-index='=' @click="press($event)">=</button> 
				<button @click="changeModeEvent" class="button scisign">
					<view v-if="changeMode" >sci</view>
					<view v-else >sim</view>
				</button>

			</view>

			<view class="mode" v-else>

				<button class="button1 delsign" data-index='C' @click="press($event)">C</button>
				<button class="button1 delsign" data-index='<=' @click="press($event)">Back</button>  
				<button class="button1" data-index='°' @click="press($event)">°</button>
				<button class="button1" data-index='rad' @click="press($event)">rad</button>
				<button class="button1" data-index='x !' @click="press($event)">x!</button>

				<button class="button1" data-index='√' @click="press($event)">√</button>
				<button class="button1" data-index='e' @click="press($event)">e</button>
				<button class="button1" data-index='sin' @click="press($event)">sin</button>
				<button class="button1" data-index='cos' @click="press($event)">cos</button>
				<button class="button1" data-index='tan' @click="press($event)">tan</button>

				<button class="button1" data-index='x^' @click="press($event)">x^</button>
				<button class="button1" data-index='log' @click="press($event)">log</button>
				<button class="button1" data-index='ln' @click="press($event)">ln</button>
				<button class="button1" data-index='(' @click="press($event)">(</button>
				<button class="button1" data-index=')' @click="press($event)">)</button>

				<button class="button1" data-index='+' @click="press($event)">+</button> 
				<button class="button1" data-index='7' @click="press($event)">7</button>
				<button class="button1" data-index='8' @click="press($event)">8</button>
				<button class="button1" data-index='9' @click="press($event)">9</button>
				<button class="button1" data-index='/' @click="press($event)">/</button>

				<button class="button1" data-index='±' @click="press($event)">±</button>
				<button class="button1" data-index='4' @click="press($event)">4</button>
				<button class="button1" data-index='5' @click="press($event)">5</button>
				<button class="button1" data-index='6' @click="press($event)">6</button>
				<button class="button1" data-index='*' @click="press($event)">*</button>

				<button class="button1" data-index='%' @click="press($event)">%</button>
				<button class="button1" data-index='1' @click="press($event)">1</button>
				<button class="button1" data-index='2' @click="press($event)">2</button>
				<button class="button1" data-index='3' @click="press($event)">3</button>
				<button class="button1" data-index='-' @click="press($event)">-</button>
				
				<button class="button1" data-index='π' @click="press($event)">π</button>
				<button class="button1" data-index='.' @click="press($event)">.</button>
				<button class="button1" data-index='0' @click="press($event)">0</button>       
 
				<button class="button1 equal-sign" data-index='=' @click="press($event)">=</button>
				<button @click="changeModeEvent" class="button1 scisign">
					<view v-if="changeMode" >sci</view>
					<view v-else >sim</view>
				</button>
			</view>
		</view>
	</view>

</template>

<script>

	export default {
		data() {
			return {
				   current: '',
				   history: '',
				   changeMode: true,
				   display: ''
			}
		},
		onLoad() {

		},
		methods: {
			press(event) {
			let me = this
			let key = event.currentTarget.dataset.index
			if( key != 'c'){
				this.display = this.display + key
			}
			
		
			//  console.log(event.currentTarget.dataset.index);
			if (
				key != '=' && 
				key != 'C' &&
				key != '*' &&
				key != '/' &&
				key != '√' &&
				key != "x 2" &&
				key != "%" &&
				key != "<=" && 
				key != "±" && 
				key != "sin" && 
				key != "cos" && 
				key != "tan" && 
				key != "log" && 
				key != "ln" && 
				key != "x^" && 
				key != "x !" && 
				key != "π" && 
				key != "e" && 
				key != "rad" && 
				key != "°"
			) {
				me.current += key
			} else if (key === '=') {
				if ((me.current).toString().indexOf('^') > -1) {
					let base = (me.current).slice(0, (me.current).toString().indexOf('^'))
					let exponent = (me.current).slice((me.current).toString().indexOf('^') + 1)
					// console.log('base：',base,'  exponent:',exponent)
					me.current = this.binding.eval('Math.pow(' + base + ',' + exponent + ')')
					me.current = me.current.toFixed(3);
					this.display = this.current;

				} else {
					// console.log('me.current first time:',me.current)
					this.history = this.current;
					me.current = this.binding.eval(me.current);
					console.log('me.current:',me.current,me.current[0],me.current[0])
					if(me.current[0] === '{'){
						me.current = ''
						this.history = '出错了'
					}
					// me.current = me.current.toFixed(4);
					this.display = this.current;
					
				}
			} else if (key === 'C') {
				me.current = ''
				this.history = ''
				this.display = ''
			} else if (key === '*') {
				me.current += '*'
			} else if (key === '/') {
				me.current += '/'
			} else if (key === '+') {
				me.current += '+'
			} else if (key === '-') {
				me.current += '-'
			} else if (key === '±') {
				if ((me.current).toString().charAt(0) === '-') {
					me.current = (me.current).slice(1)
				} else {
					me.current = '-' + me.current
				}
			} else if (key === '<=') {
				me.current = me.current.substring(0, me.current.length - 1)
			} else if (key === '%') {
				me.current = me.current / 100
			} else if (key === 'π') {
				me.current = me.current * Math.PI
			} else if (key === 'x 2') {
				me.current = parseFloat(me.current * me.current)
			} else if (key === '√') {
				me.current = Math.sqrt(me.current)
			} else if (key === 'sin') {
				me.current = Math.sin(me.current)
			} else if (key === 'cos') {
				console.log('前',me.current);
				me.current = Math.cos(me.current)
				console.log('后',me.current);
			} else if (key === 'tan') {
				me.current = Math.tan(me.current)
			} else if (key === 'log') {
				me.current = Math.log10(me.current)
			} else if (key === 'ln') {
				me.current = Math.log(me.current)
			} else if (key === 'x^') {
				me.current += '^'
			} else if (key === 'x !') {
				let number = 1
				if (me.current === 0) {
				me.current = '1'
				} else if (me.current < 0) {
				me.current = NaN
				} else {
					let number = 1
					for (let i = me.current; i > 0; i--) {
						number *= i
					}
					me.current = number
				}
			} else if (key === 'e') {
				me.current = Math.exp(me.current)
			} else if (key === 'rad') {
				me.current = me.current * (Math.PI / 180)
			} else if (key === '°') {
				me.current = me.current * (180 / Math.PI)
			}
			},
			changeModeEvent() {
				let me = this
				me.changeMode = !me.changeMode
			}
		}
	}
</script>

<style>

	body {
		/* background: linear-gradient(to right, #85D8CE, #085078); */
		background-color: #000;

	}
	.content{
		background-color: #000;
		height: calc(100vh - 36px);
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.calculator {
		/* width: 440rpx; */
		padding: 20rpx;
		border-radius: 5rpx;
		margin: 20rpx auto;
		font-size: 100rpx;
		background-color: #000;
		flex-direction: row;
	}
	.input {
		width: 650rpx;
		height: 100rpx;
		border-radius: 0rpx;
		/* border: 5rpx solid #1a1a1a; */
		background-color: #000;
		color: #d9d9d9;
		padding: 0 5rpx 0 5rpx;
		margin: 0 0rpx 10rpx 40rpx;
		font-size: 80rpx;
		text-align: right;
		/* margin-bottom: 50rpx; */
	}
	.history {
		width: 650rpx;
		height: 100rpx;
		border-radius: 0rpx;
		/* border: 5rpx solid #1a1a1a; */
		background-color: #000;
		color: #d9d9d9;
		padding: 0 5rpx 0 5rpx;
		margin: 0 0rpx 10rpx 40rpx;
		font-size: 38rpx;
		
	}
	.input:focus,
	.input:active {
		border-color: #03a9f4;
		box-shadow: 0 0 4rpx #03A9F4;
		outline: none 0;
	}
	.history:focus,
	.history:active {
		border-color: #03a9f4;
		box-shadow: 0 0 4rpx #03A9F4;
		outline: none 0;
	}
	.button {
		margin: 3rpx;
		width: 140rpx;
		height: 140rpx;
		border: 1rpx solid #0d0d0d;	
		border-radius: 50%;
		color: #d9d9d9;
		background-color: #1a1a1a;
		cursor: pointer;
		outline: none;
		font-size: 50rpx;
	}

	.button1 {
	/* margin: 3rpx; */

		width: 140rpx;
		height: 120rpx;

		/* border: 1rpx solid #ccc; */

		/* border-radius: 50%; */
		color: #d9d9d9;
		background-color: #000;
		cursor: pointer;
		outline: none;
		font-size: 50rpx;
	}
	
	.button2 {
	/* margin: 3rpx; */

		width: 140rpx;
		height: 140rpx;

		/* border: 1rpx solid #ccc; */

		/* border-radius: 50%; */
		color: #d9d9d9;
		background-color: #000;
		cursor: pointer;
		outline: none;
		font-size: 50rpx;
	}
	.mode {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		flex-direction: reverse;
		height: calc(100vh - 300rpx);
		align-items: flex-end
	}
	.equal-sign {
		color: #30de72;
		/* font-size: 60rpx; */
	/* width: 133rpx; */
	}
	.spesign{
		color: #fbc02d;
	}
	.scisign{
		color: #24adf3;
	}
	.delsign{
		color: #ee1a07;
	}
	.toggle-button {
		border: none;
		background-color: #000;
		cursor: pointer;
		outline: none;
		font-size: 100rpx;
		color: #fff;
		text-shadow: -1rpx -1rpx 0 rgba(0, 0, 0, 0.35);
	}
	p {
		margin-top: 0;
	}
	button::-moz-focus-inner {
		border-color: transparent;
	}
	.changeMode{
		font-size: 50rpx;
		top: 50%;
	}
</style>
