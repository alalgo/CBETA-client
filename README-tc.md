[中文简体](./README.md) | [中文繁體](./README-tc.md)


本項目為cbeta api客戶端，主要提供在線搜索佛經、在線讀經功能。目前僅有web pc版本，後續計劃開發web app版。ui界面遵循簡潔、方法的原則，方便大眾閱讀佛經。  
可在本人基於此項目部署的[網站](https://alalgo.top)(支持中文繁體搜索)在線讀 佛經

### 功能
- 按照經文名稱模糊匹配搜索經文（支持繁簡搜索）
- 搜索到的經文可在線閱讀，經文為繁體；讀經頁面左側為經文章節目錄，可點擊切換
- 鼠標選中經文可在右側依次顯示其簡體版本、含義翻譯（若有的話）
- 讀經頁面有圖標可點擊發送到用戶的kindle中（開發中）
- 首頁可點擊‘書架’，按大藏經部別顯示整個大藏經所有經書，讀者可根據部別選讀經文

### 技術架構
- 本項目純前端、無後臺    
- js框架、ui組件庫 分別為 ：vuejs 、 element-ui


### 部署
- 因為只有前端，將項目直接放入http服務器www目錄即可  
- 或者使用項目提供的dockerfile進行docker方式部署


### todo
#### 功能
1. 讀經文頁面  經文糾錯、~~繁簡同時搜索~~
1. web app版本（vuejs + Mint UI），方便手機用戶用手機瀏覽器閱經
1. ~~增加書架頁面，分類展示經書，用戶可逐級展開查找經書，點擊後跳到讀經頁面~~
1. 發送經文到kindle  
1. ~~讀經頁面，頂部增加閱讀進度條~~
1. 讀經頁面，右側增加經文字體大小調整按鈕

#### 優化/bug
1. ~~搜索結果初始加載分頁效果差 （已解決，搜索時增加正在加載效果）~~  
1. ~~所有頁面初始加載樣式混亂 （已解決，文件引入順序js要在css之前）~~  
1. ~~非網絡引用element-ui css導致圖標無法正常顯示 (已解決，下載圖標到本地)~~   
1. 引入js文件（vuejs）使用生產版本替代開發版本  
1. 點擊搜索結果頁面搜索框後的搜索圖標，不能觸發搜索
1. ~~讀經頁面章節目錄優化（之前章節過多時無法瀏覽）~~
1. ~~讀經頁面，章節切換時不能調到新章節的第一行~~
1. ~~讀經頁面，章節切換時增加 ‘正在加載’ 效果~~
1. 場景：用戶搜索時遲遲在加載中，然後連續輸入其它內容搜索，會有bug（axios 請求接口時，可能會連續請求同一接口，此時返回結果可能不是最後一個請求結果）
1. ~~搜索結果頁面，將頂部的搜索欄固定不變~~
1. ~~搜索結果頁，翻頁時滾動條回到頂部~~
1. ~~問題與反饋 暫時鏈接到 github issues~~
1. ~~讀經頁面，選中經文，右側會出現對應的簡體~~
1. 代碼模塊化重構
1. 本項目基於firefox開發所以對其它瀏覽器兼容性並不好。瀏覽器兼容性測試，確保支持所有主流瀏覽器版本    
    - 字體在不同瀏覽器呈現不同樣式、不同大小   
    - ie內核不支持某些語言特性，使用polyfill 解決
1. ~~讀經頁面，正在閱讀的章節左側目錄鏈接文字變為特別顏色，方便用戶知曉所讀的章節~~

### 參考資料
#### 後臺api
cbeta開放平臺doc： http://cbdata.dila.edu.tw/v1.2  
官方api文檔略為淩亂，這裏整理出常用api（若有出入，請以官方為主）：      
- 某部大藏經所有部別目錄：http://cbdata.dila.edu.tw/v1.2/catalog_entry?q=Cat-   
用法：url後面加某部大藏經的標識碼（例如：http://cbdata.dila.edu.tw/v1.2/catalog_entry?q=Cat-T）  

- 某部大藏經所有冊別目錄：http://cbdata.dila.edu.tw/v1.2/catalog_entry?q=Vol-    
用法：url後面加某部大藏經的標識碼(例如：http://cbdata.dila.edu.tw/v1.2/catalog_entry?q=Vol-T)    

- 某部大藏經某一冊別目錄下所有經文目錄：http://cbdata.dila.edu.tw/v1.2/catalog_entry?vol=   
用法：url後面加某部大藏經標識碼加冊別號(例如：http://cbdata.dila.edu.tw/v1.2/catalog_entry?vol=T01)      

CBETA 版大正藏api不遵循上面規律
- 返回經文html json- https://cbdata.dila.edu.tw/v1.2/juans?work=T0001&juan=1&edition=CBETA    
- 取得 CBETA 部類目錄- https://cbdata.dila.edu.tw/v1.2/catalog_entry?q=CBETA     
- 以經名搜索- https://cbdata.dila.edu.tw/v1.2/toc?q=阿含     
- 以作譯者搜尋- https://cbdata.dila.edu.tw/v1.2/works?creator=竺       

大藏經下所有部別信息：http://cbdata.dila.edu.tw/v1.2/catalog_entry?q=Cat-T   
大藏經下某一部別所有佛經信息：http://cbdata.dila.edu.tw/v1.2/catalog_entry?vol=T02    
某部佛經html版本：http://cbdata.dila.edu.tw/v1.2/download/html/T0099_001.html     
CBETA    
部類 catalog   
經名 work    
經中目次標題 toc
各版本大藏經在cbeta的標識碼。經名搜尋結果，按「CBETA 全文檢索順序」+ 典籍編號(經號)：   
藏經主體   
   - T (大正藏)
   - X (新纂卍續藏)    
藏經補輯  
   - A (宋—金藏)
   - K (宋—高麗藏)
   - S (宋—宋藏遺珍)
   - F (隋～明—房山石經)
   - C (宋～清—中華藏)
   - D (唐～清—國圖善本)
   - U (明—洪武南藏)
   - P (明—永樂北藏)
   - J (明—嘉興藏)
   - L (清—乾隆藏)
   - G (民國—佛教大藏經)
   - M (民國—卍正藏)
   - N (民國新譯—南傳大藏經)   
近代新編       
   - ZS (民國新編—正史佛教資料類編)
   - I (民國新編—佛教石刻拓片百品)
   - ZW (民國新編—藏外佛教文獻)
   - B (民國新編、新譯—大藏經補編)
   - GA (民國新編—中國佛寺誌-A)
   - GB (民國新編—中國佛寺誌-B)


#### 佛經結構
佛經可以分為經、律、論三種，這三種合稱為三藏，也叫大藏經。現存的大藏經，按文字的不同可分為漢文、藏文、巴利語三大體系。
大藏經編纂
漢文藏經的編纂始於南北朝時，之後在全國存有大量的寫本藏經。到唐開元時，據《開元釋教錄》記載，已有1076部，5048卷。之後，各代又續有新譯經論和著述入藏。雕版藏經最早為開寶藏，北宋初開始刊印。最初為蜀版，後有福州版。現存有多種大藏經，流傳比較廣的有 大正藏、嘉興藏等編纂版本。編纂時大藏經可按部別、冊別分門別類。

#### 繁簡翻譯
繁簡翻譯使用的為[github上開源js](https://github.com/webberwong/js-chinese-TraditionToSimple),此js中提供的詞庫只有常用的2553個漢字，故暫時只用於閱讀經文時選中翻譯給用戶參考用，避免因個別字錯誤引發歧義造成貽誤罪莫大焉。這裏還是建議讀者多讀繁體，古文皆以繁體留存，很多孤本可能只有繁體原件，熟悉繁體可少許多文字障礙。
引入兩個js文件分別為：
- resources\js\FontsLib.js
- resources\js\TraditionToSimple_CN.js

#### 功能及頁面風格靈感
整體的界面搜索風格模仿google
功能上參考[cbetaonline](http://cbetaonline.dila.edu.tw/zh/T0001_011)、[凈念書院](https://jnbooks.cn/)
