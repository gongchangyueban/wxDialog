// component/dialog/dialog.js
Component({
	
	options: {
		styleIsolation: 'apply-shared'
	},
  /**
   * 组件的属性列表
   */
  properties: {
    hidden:Boolean,
    title:String,
    content:String,
    btnArr:Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    userInfo:function(e){
      this.triggerEvent('click',e,{})
    },
    click:function(e){
      this.triggerEvent('click',e,{})
    }
  }
})
