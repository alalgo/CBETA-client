### 技术架构
- 本项目纯前端、无后台    
- 使用js、ui框架分别为 ：vuejs 、 element-ui


### 部署
- 因为只有前端，将项目直接放入http服务器www目录即可  
- 或者使用项目提供的dockerfile进行docker方式部署

****
### todo
#### 功能
1. 读经文页面  经文纠错、搜索   
1. 繁简互转   
1. 页面自适应、且适配手机浏览器   
1. 微信前端、android、ios客户端   
1. 增加书架页面，分类展示经书，用户可逐级展开查找经书，点击后跳到读经页面   

#### 优化/bug
1. ~~搜索结果初始加载分页效果差 （已解决，搜索时增加正在加载效果）~~  
1. ~~所有页面初始加载样式混乱 （已解决，文件引入顺序js要在css之前）~~  
1. ~~非网络引用element-ui css导致图标无法正常显示 (已解决，下载图标到本地)~~   
1. 引入js文件（vuejs）使用生产版本替代开发版本  
1. 点击搜索结果页面搜索框后的搜索图标，不能触发搜索  

****
### 参考资料
#### 后台api
常用api  
- cbeta开放平台- http://cbdata.dila.edu.tw/v1.2      
- 返回经文html json- https://cbdata.dila.edu.tw/v1.2/juans?work=T0001&juan=1&edition=CBETA    
- 取得 CBETA 部類目錄- https://cbdata.dila.edu.tw/v1.2/catalog_entry?q=CBETA     
https://cbdata.dila.edu.tw/v1.2/toc?q=阿含     
- 以作譯者搜尋- https://cbdata.dila.edu.tw/v1.2/works?creator=竺    

佛经结构   
- CBETA    
- 部類 catalog   
- 經名 work    
- 经中目次標題 toc
