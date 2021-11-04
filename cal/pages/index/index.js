//index.js
//获取应用实例
const app = getApp()
let rpn = require('../../utils/rpn.js');
Page({
  data: {
    count:0,
    id0:"0",
    ida:'.',
    idb:'=',
    id1:'1',
    id2:'2',
    id3:'3',
    idc:'+',//加
    id4: '4',
    id5: '5',
    id6: '6',
    idd: '-',//减
    id7: '7',
    id8: '8',
    id9: '9',
    ide: 'x',//乘
    idf: '',//归0
    idg: '-',//负号
    idh: '%',//百分比
    idi: '÷',//除
    sz:[],
    fontSize: 200
  },
  pressView:function(e){
    let viewDataSet = e.target.dataset;
    let viewText = viewDataSet.text;
    let sz = this.data.sz;
    sz.push(viewText);
    let str = sz.join('');
    let fontSize = this.data.fontSize;
    //console.log(str);
    //console.log(viewText); //输出该文本
     this.setData({
       count: str,
     });
    if (sz.length > 5 && sz.length<12){
      this.setData({
        fontSize: this.data.fontSize - 20
      })
    } else {
      fontSize: this.data.fontSize
    }
    //console.log(fontSize)
  },
  clear(){
   this.setData({
     count:'0',
     sz:[],
     fontSize: 200
   })
  },
  negative(){
    let negative = this.data.idg;
    let sz = this.data.sz;
    let ss = sz.unshift(negative);
    let str = sz.join('');
    this.setData({
      count: [str]
    });
  },
  equal(){
    let num = rpn.calCommonExp(this.data.sz.join(''))
    let sz = this.data.sz
    this.setData({
      sz:[num]
    });
  }
})
