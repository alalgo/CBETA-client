[中文简体](./README.md) | [中文繁體](./README-tc.md)


本项目为cbeta api客户端，主要提供在线搜索佛经、在线读经功能。目前仅有web pc版本，后续计划开发微信、mobile客户端。ui界面遵循简洁、方法的原则，方便大众阅读佛经。  
可在本人基于此项目部署的[网站](https://alalgo.top)(支持中文繁体搜索)在线读 佛经

### 技术架构
- 本项目纯前端、无后台    
- 使用js、ui框架分别为 ：vuejs 、 element-ui


### 部署
- 因为只有前端，将项目直接放入http服务器www目录即可  
- 或者使用项目提供的dockerfile进行docker方式部署


### todo
#### 功能
1. 读经文页面  经文纠错、~~繁简同时搜索~~
1. 繁简互转   
1. 页面自适应、且适配手机浏览器   
1. 微信版本、mobile（flutter 跨平台适配三大版本）
1. 增加书架页面，分类展示经书，用户可逐级展开查找经书，点击后跳到读经页面
1. 发送经文到kindle  

#### 优化/bug
1. ~~搜索结果初始加载分页效果差 （已解决，搜索时增加正在加载效果）~~  
1. ~~所有页面初始加载样式混乱 （已解决，文件引入顺序js要在css之前）~~  
1. ~~非网络引用element-ui css导致图标无法正常显示 (已解决，下载图标到本地)~~   
1. 引入js文件（vuejs）使用生产版本替代开发版本  
1. 点击搜索结果页面搜索框后的搜索图标，不能触发搜索
1. ~~读经页面章节目录优化（之前章节过多时无法浏览）~~
1. ~~读经页面，章节切换时不能调到新章节的第一行~~
1. ~~读经页面，章节切换时增加 ‘正在加载’ 效果~~


### 参考资料
#### 后台api
常用api：  
- cbeta开放平台- http://cbdata.dila.edu.tw/v1.2      
- 返回经文html json- https://cbdata.dila.edu.tw/v1.2/juans?work=T0001&juan=1&edition=CBETA    
- 取得 CBETA 部類目錄- https://cbdata.dila.edu.tw/v1.2/catalog_entry?q=CBETA     
https://cbdata.dila.edu.tw/v1.2/toc?q=阿含     
- 以作譯者搜尋- https://cbdata.dila.edu.tw/v1.2/works?creator=竺    

佛经结构：   
- CBETA    
- 部類 catalog   
- 經名 work    
- 经中目次標題 toc

繁简翻译使用的为[github上开源js](https://github.com/webberwong/js-chinese-TraditionToSimple),引入两个js文件分别为：
- resources\js\FontsLib.js
- resources\js\TraditionToSimple_CN.js
