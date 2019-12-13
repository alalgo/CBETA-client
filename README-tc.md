[中文简体](./README.md) | [中文繁體](./README-tc.md)


本項目為cbeta api客戶端，主要提供在線搜索佛經、在線讀經功能。目前僅有web pc版本，後續計劃開發微信、web mobile版及android、ios客戶端。ui界面遵循簡潔、方法的原則，方便大眾閱讀佛經。  
可在本人基於此項目部署的[網站](https://alalgo.top)(目前只支持中文繁體搜索)在線讀 佛經

### 技術架構
- 本項目純前端、無後臺    
- 使用js、ui框架分別為 ：vuejs 、 element-ui


### 部署
- 因為只有前端，將項目直接放入http服務器www目錄即可  
- 或者使用項目提供的dockerfile進行docker方式部署


### todo
#### 功能
1. 讀經文頁面  經文糾錯、搜索   
1. 繁簡互轉   
1. 頁面自適應、且適配手機瀏覽器   
1. 微信前端、android、ios客戶端   
1. 增加書架頁面，分類展示經書，用戶可逐級展開查找經書，點擊後跳到讀經頁面   

#### 優化/bug
1. ~~搜索結果初始加載分頁效果差 （已解決，搜索時增加正在加載效果）~~  
1. ~~所有頁面初始加載樣式混亂 （已解決，文件引入順序js要在css之前）~~  
1. ~~非網絡引用element-ui css導致圖標無法正常顯示 (已解決，下載圖標到本地)~~   
1. 引入js文件（vuejs）使用生產版本替代開發版本  
1. 點擊搜索結果頁面搜索框後的搜索圖標，不能觸發搜索  


### 參考資料
#### 後臺api
常用api  
- cbeta開放平臺- http://cbdata.dila.edu.tw/v1.2      
- 返回經文html json- https://cbdata.dila.edu.tw/v1.2/juans?work=T0001&juan=1&edition=CBETA    
- 取得 CBETA 部類目錄- https://cbdata.dila.edu.tw/v1.2/catalog_entry?q=CBETA     
https://cbdata.dila.edu.tw/v1.2/toc?q=阿含     
- 以作譯者搜尋- https://cbdata.dila.edu.tw/v1.2/works?creator=竺    

佛經結構   
- CBETA    
- 部類 catalog   
- 經名 work    
- 經中目次標題 toc