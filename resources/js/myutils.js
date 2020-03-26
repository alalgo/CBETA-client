/*
*2019-12-24 提取公共方法封装为一个单独的js文件，使用时用 util.getQueryStr('') 方式引用
*/
var util = {
	/*
	*将URL中的UTF-8字符串转成中文字符串  
	*/
	getCharFromUtf8: function(str) {  
		var cstr = "";  
		var nOffset = 0;  
		if (str == "")  
			return "";  
		str = str.toLowerCase();  
		nOffset = str.indexOf("%e");  
		if (nOffset == -1)  
			return str;  
		while (nOffset != -1) {  
			cstr += str.substr(0, nOffset);  
			str = str.substr(nOffset, str.length - nOffset);  
			if (str == "" || str.length < 9)  
				return cstr;  
			cstr += utf8ToChar(str.substr(0, 9));  
			str = str.substr(9, str.length - 9);  
			nOffset = str.indexOf("%e");  
		}  
		return cstr + str;  
	}, 

	/*
	*将编码转换成字符  
	*/
	utf8ToChar: function(str) {  
		var iCode, iCode1, iCode2;  
			iCode = parseInt("0x" + str.substr(1, 2));  
			iCode1 = parseInt("0x" + str.substr(4, 2));  
			iCode2 = parseInt("0x" + str.substr(7, 2));  
		return String.fromCharCode(((iCode & 0x0F) << 12) | ((iCode1 & 0x3F) << 6) | (iCode2 & 0x3F));  
	},  
	
    /*
	*获取 request params值
	*/
	getQueryStr: function(name) { 
	  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
	  var r = window.location.search.substr(1).match(reg); 
	  if (r != null)  
		return decodeURI(r[2]); 
	  return null; 
	},
	
	//length位数字，不足的前面补0
	PrefixInteger: function(num, length) {
		return (Array(length).join('0') + num).slice(-length);
	},
	
	
};

/*
全局配置变量
*/
const config={
	goApiHost:'https://alalgo.top/bookapi',
	//goApiHost:'http://localhost:80',
}