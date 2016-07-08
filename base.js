//这是一个简单的封装库

//获取DOM节点方法
//函数式
/*function $(id){
	return document.getElementById(id);
}

//对象式

var Base={
	$id:function(id){
		return document.getElementById(id)
	},
	$name:function(name){
		return document.getElementsByName(name)
	},
	$tag:function(tag){
		return document.getElementsByTagName(tag)
	},
	return 
}
//上面这个函数方法获取到的对象为HTML，不利于方法添加，我们最好要获取到Bash对象
//可以写一个构造函数
*/
 var $ = function(){       //每次调用创建一个新的实例
	 return new Base();
 }
function Base(){
	//创建一个数组来保存获取到的节点
	this.elements=[];
	this.$id=function(id){              //获取DOM节点ID
	      this.elements.push(document.getElementById(id));
		  return this
	}
	this.$tag=function(tag){           //获取DOM节点tagName
		var tags=document.getElementsByTagName(tag)
		for(var i=0;i<tags.length;i++){
	      this.elements.push(tags[i]);
		  }
		  return this
	}
	
}
//改变指定的DOM文本
/*Base.prototype.getinnerHTML=function(){
	for(i=0;i<this.elements.length;i++){
		
	 
	}

	  return this
}*/
Base.prototype.setinnerHTML=function(str){
   
	for(i=0;i<this.elements.length;i++){
		 if(str='innerHTML'){ 
		 return this.elements[i].innerHTML
		 }else{
	this.elements[i].innerHTML=str;
	}}

	  return this
}

//设置css样式，如字体。背景色
Base.prototype.setcss=function(attr,value){
	for(i=0;i<this.elements.length;i++){
		if(arguments.length==1){
			return this.elements[i].style[attr];
		}
	this.elements[i].style[attr]=value;
	}
  return this
	
}
//鼠标事件绑定
Base.prototype.mourse=function(fn,value){
	var p=value;
	for(i=0;i<this.elements.length;i++){
		switch(p){
			case 1:
	          this.elements[i].onclick=fn; //点击事件
	         break;
	        case 2:
	       this.elements[i].onmouseover=fn;  //移入事件
	         break;
			  case 3:
	       this.elements[i].onmouseout=fn;  //移出事件
	         break;
		}
	
	}
  return this
	
}
Base.prototype.getstyle=function(attr,value){
	
}
Base.prototype.show=function(){
	
}











