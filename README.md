[中文简体](./README.md) | [中文繁體](./README-tc.md)


本项目为cbeta api客户端，主要提供在线搜索佛经、在线读经功能。目前仅有web pc版本，后续计划开发微信、mobile客户端。ui界面遵循简洁、方法的原则，方便大众阅读佛经。  
可在本人基于此项目部署的[网站](https://alalgo.top)(支持中文繁体搜索)在线读 佛经

### 功能  
- 按照经文名称模糊匹配搜索经文（支持繁简搜索）
- 搜索到的经文可在线阅读，经文为繁体；读经页面左侧为经文章节目录，可点击切换
- 鼠标选中经文可在右侧依次显示其简体版本、含义翻译（若有的话）
- 读经页面有图标可点击发送到用户的kindle中（开发中）
- 首页可点击‘书架’，按大藏经部别显示整个大藏经所有经书，读者可根据部别选读经文

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
1. 场景：用户搜索时迟迟在加载中，然后连续输入其它内容搜索，会有bug（axios 请求接口时，可能会连续请求同一接口，此时返回结果可能不是最后一个请求结果）
1. ~~搜索结果页面，将顶部的搜索栏固定不变~~
1. ~~搜索结果页，翻页时滚动条回到顶部~~
1. ~~问题与反馈 暂时链接到 github issues~~
1. ~~读经页面，选中经文，右侧会出现对应的简体~~
1. 代码模块化重构

### 参考资料
#### 后台api
cbeta开放平台doc： http://cbdata.dila.edu.tw/v1.2  
官方api文档略为凌乱，这里整理出常用api（若有出入，请以官方为主）：      
- 某部大藏经所有部别目录：http://cbdata.dila.edu.tw/v1.2/catalog_entry?q=Cat-   
用法：url后面加某部大藏经的标识码（例如：http://cbdata.dila.edu.tw/v1.2/catalog_entry?q=Cat-T）  

- 某部大藏经所有册别目录：http://cbdata.dila.edu.tw/v1.2/catalog_entry?q=Vol-    
用法：url后面加某部大藏经的标识码(例如：http://cbdata.dila.edu.tw/v1.2/catalog_entry?q=Vol-T)    

- 某部大藏经某一册别目录下所有经文目录：http://cbdata.dila.edu.tw/v1.2/catalog_entry?vol=   
用法：url后面加某部大藏经标识码加册别号(例如：http://cbdata.dila.edu.tw/v1.2/catalog_entry?vol=T01)      

CBETA 版大正藏api不遵循上面规律
- 返回经文html json- https://cbdata.dila.edu.tw/v1.2/juans?work=T0001&juan=1&edition=CBETA    
- 取得 CBETA 部類目錄- https://cbdata.dila.edu.tw/v1.2/catalog_entry?q=CBETA     
- 以经名搜索- https://cbdata.dila.edu.tw/v1.2/toc?q=阿含     
- 以作譯者搜尋- https://cbdata.dila.edu.tw/v1.2/works?creator=竺       

大藏经下所有部别信息：http://cbdata.dila.edu.tw/v1.2/catalog_entry?q=Cat-T   
大藏经下某一部别所有佛经信息：http://cbdata.dila.edu.tw/v1.2/catalog_entry?vol=T02    
某部佛经html版本：http://cbdata.dila.edu.tw/v1.2/download/html/T0099_001.html     
CBETA    
部類 catalog   
經名 work    
经中目次標題 toc
各版本大藏经在cbeta的标识码。经名搜寻结果，按「CBETA 全文检索顺序」+ 典籍编号(经号)：   
藏经主体   
   - T (大正藏)
   - X (新纂卍续藏)    
藏经补辑  
   - A (宋—金藏)
   - K (宋—高丽藏)
   - S (宋—宋藏遗珍)
   - F (隋～明—房山石经)
   - C (宋～清—中华藏)
   - D (唐～清—国图善本)
   - U (明—洪武南藏)
   - P (明—永乐北藏)
   - J (明—嘉兴藏)
   - L (清—乾隆藏)
   - G (民国—佛教大藏经)
   - M (民国—卍正藏)
   - N (民国新译—南传大藏经)   
近代新编       
   - ZS (民国新编—正史佛教资料类编)
   - I (民国新编—佛教石刻拓片百品)
   - ZW (民国新编—藏外佛教文献)
   - B (民国新编、新译—大藏经补编)
   - GA (民国新编—中国佛寺志-A)
   - GB (民国新编—中国佛寺志-B)


#### 佛经结构
佛经可以分为经、律、论三种，这三种合称为三藏，也叫大藏经。现存的大藏经，按文字的不同可分为汉文、藏文、巴利语三大体系。
大藏经编纂
汉文藏经的编纂始于南北朝时，之后在全国存有大量的写本藏经。到唐开元时，据《开元释教录》记载，已有1076部，5048卷。之后，各代又续有新译经论和著述入藏。雕版藏经最早为开宝藏，北宋初开始刊印。最初为蜀版，后有福州版。现存有多种大藏经，流传比较广的有 大正藏、嘉兴藏等编纂版本。编纂时大藏经可按部別、冊別分门别类。

#### 繁简翻译
繁简翻译使用的为[github上开源js](https://github.com/webberwong/js-chinese-TraditionToSimple),此js中提供的词库只有常用的2553个汉字，故暂时只用于阅读经文时选中翻译给用户参考用，避免因个别字错误引发歧义造成贻误罪莫大焉。这里还是建议读者多读繁体，古文皆以繁体留存，很多孤本可能只有繁体原件，熟悉繁体可少许多文字障碍。
引入两个js文件分别为：
- resources\js\FontsLib.js
- resources\js\TraditionToSimple_CN.js

#### 功能及页面风格灵感
整体的界面搜索风格模仿google
功能上参考[cbetaonline](http://cbetaonline.dila.edu.tw/zh/T0001_011)、[净念书院](https://jnbooks.cn/)
