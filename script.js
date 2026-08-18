const detailContent = {
  "level-domain": {
    kicker: "知識層級",
    title: "領域：用家長的問題當入口",
    body: [
      block("功能", ["把內容整理成家長找得到的入口，例如情緒、學習、手足、青少年、親子溝通。", "避免家長一開始就被理論名稱擋住。"]),
      block("網站呈現", ["首頁可用問題分類導覽，進入後再看到相關理論、案例與工具。", "每個領域都應有入門文章、代表案例、工具包與學習路徑。"]),
      block("範例", ["親子溝通領域可放：同理心、我的訊息、非暴力溝通、青少年對話案例。"])
    ]
  },
  "level-theory": {
    kicker: "知識層級",
    title: "理論：保留專業來源與分析視角",
    body: [
      block("功能", ["說明每個方法背後的心理學或教育理論依據。", "讓平台不是零散建議，而是有來源、有邊界的知識系統。"]),
      block("納入標準", ["能解釋親子情境。", "能轉化成案例分析。", "能發展出可練習工具。", "能清楚標示限制與適用範圍。"]),
      block("範例", ["阿德勒心理學適合分析歸屬感、鼓勵、行為目的、邏輯後果。", "冰山理論適合分析情緒、期待、渴望與自我價值。"])
    ]
  },
  "level-concept": {
    kicker: "知識層級",
    title: "核心概念：把大型理論拆成可學習單元",
    body: [
      block("功能", ["每個概念都可以獨立成一篇文章、一個案例標籤、一份工具或一堂課。", "讓不同理論可以互相對照，而不是混在一起。"]),
      block("內容欄位", ["概念定義。", "適用情境。", "常見誤解。", "代表案例。", "可搭配工具。"]),
      block("範例", ["「課題分離」可連到：責任歸屬、自然後果、邏輯後果、界線設定、選擇與責任。"])
    ]
  },
  "level-application": {
    kicker: "知識層級",
    title: "應用：把概念轉成家長做得到的行動",
    body: [
      block("功能", ["把理論轉化成情境判斷、對話腳本、檢核表與練習任務。", "讓家長不只看懂，也知道下一句可以怎麼說。"]),
      block("應用格式", ["案例分析：發生什麼事。", "情境應用：當下怎麼判斷。", "實作工具：用什麼表單或腳本。", "追蹤方式：如何知道有沒有改善。"]),
      block("範例", ["孩子大聲打斷父母講電話，可以做問題歸屬、我的訊息、選擇設計與鼓勵回饋。"])
    ]
  },

  "concept-task-separation": {
    kicker: "阿德勒核心概念",
    title: "課題分離：先釐清責任歸屬",
    body: [
      block("核心定義", ["課題分離不是把孩子推開，而是先判斷這件事的責任究竟屬於孩子、家長，還是雙方共同。", "只有責任歸屬清楚，後續才知道要採用自然後果、邏輯後果，或親子共同協商。"]),
      block("三種責任歸屬", ["孩子的課題：孩子有能力承擔，後果有限，沒有安全、健康或重大費用疑慮。", "家長的課題：涉及生命、健康、安全、法律、家庭資源或家長必須承擔的額外成本。", "共同課題：孩子的選擇會影響家庭秩序、他人權益或親子共同生活，需要一起訂規範。"]),
      block("判斷問題", ["這個後果誰承擔？", "孩子是否有能力承擔？", "金額是否在孩子可負擔範圍內？", "是否涉及安全、健康、生命或重大風險？", "是否會造成家長額外支出或影響其他家庭成員？"]),
      script("平台判斷句", "先分清楚這是誰的課題；若孩子能承擔且無安全健康疑慮，讓自然後果發生；若超出孩子可負責範圍，家長要用邏輯後果設界線。"),
      block("延伸閱讀", ['<a class="inline-link" href="consequences.html">開啟整合頁：後果怎麼選</a>'])
    ]
  },
  "concept-natural-consequence": {
    kicker: "課題分離應用",
    title: "自然後果：孩子能負責時，讓經驗教孩子",
    body: [
      block("使用條件", ["責任範圍屬於孩子。", "孩子有能力承擔後果。", "涉及金額有限，孩子可用零用錢或自身資源負擔。", "沒有生命、健康、安全或重大風險。", "不會把額外成本轉嫁給家長或其他人。"]),
      block("家長角色", ["不急著補救。", "不嘲笑、不說教、不算舊帳。", "陪孩子看見選擇和結果之間的連結。", "事後引導孩子想下一次可以怎麼做。"]),
      block("範例", ["孩子忘記帶小文具，若學校允許且不影響安全，可讓孩子自己面對不方便。", "孩子花掉零用錢買小物，後續想買其他東西時需要等待下一次零用錢。"]),
      script("對話範例", "這次的結果你自己可以承擔，媽媽不會幫你補回來。我願意陪你想想，下次要怎麼安排才比較符合你想要的結果。"),
      block("延伸閱讀", ['<a class="inline-link" href="consequences.html">比較自然後果與邏輯後果</a>'])
    ]
  },
  "concept-logical-consequence": {
    kicker: "課題分離應用",
    title: "邏輯後果：超出孩子可負責範圍時，家長要介入規範",
    body: [
      block("使用條件", ["孩子的選擇會增加家長額外支出。", "涉及生命、健康、安全、法律或重大風險。", "影響家庭秩序或他人權益。", "孩子尚未具備足夠能力承擔後果。"]),
      block("設計原則", ["尊重：不羞辱、不貼標籤。", "相關：後果要和行為有直接關係。", "合理：強度符合事件大小。", "事先說明：讓孩子知道選擇和後果。"]),
      block("範例", ["孩子使用手機造成超額費用，超出的部分需要從零用錢分期負擔，並重新設定使用規則。", "孩子騎車或外出涉及安全風險，家長必須設定時間、地點、回報方式與未遵守時的限制。"]),
      script("對話範例", "這件事已經影響到安全和家庭支出，所以不是你一個人可以決定。你可以選擇遵守新的使用規則；如果沒有做到，手機使用時間會先暫停，直到我們重新確認你能負責。"),
      block("延伸閱讀", ['<a class="inline-link" href="consequences.html">比較自然後果與邏輯後果</a>'])
    ]
  },

  "module-origin": moduleDetail("理論起源與背景", "建立可信度與使用邊界", ["理論源流與代表人物。", "理論主要關心的問題。", "適合用在親子教育的哪些場景。", "不適合單獨處理的情況，例如安全風險或臨床議題。"], "每篇理論頁開頭用 300-500 字說清楚脈絡，避免一開始就塞滿學術細節。"),
  "module-concepts": moduleDetail("核心概念解析", "把理論拆成可學、可找、可應用的單位", ["概念定義。", "生活語言版解釋。", "它解決什麼教養問題。", "與其他概念的關係。"], "阿德勒頁可拆成歸屬感、鼓勵、錯誤行為目標、課題分離、自然後果、邏輯後果、生活風格。"),
  "module-terms": moduleDetail("關鍵術語說明", "建立平台共同語言", ["術語原意。", "家長常見理解。", "平台採用定義。", "一句話例子。"], "例如「鼓勵」不是誇獎孩子很棒，而是指出具體行為、努力、能力或貢獻。"),
  "module-myths": moduleDetail("常見迷思與錯誤理解", "預防家長把好方法用成壞循環", ["迷思描述。", "為什麼容易誤解。", "錯用後可能造成什麼結果。", "正確用法。"], "例如「尊重孩子」不是讓孩子決定一切，而是在界線內讓孩子參與選擇。"),
  "module-cases": moduleDetail("真實案例分析", "用具體情境承接抽象理論", ["背景資訊。", "衝突事件。", "家長反應。", "孩子可能需求。", "理論觀點。", "可行介入。"], "所有案例都匿名，不使用真實姓名；用「一位小五孩子」「一位國中生」等方式描述。"),
  "module-scenarios": moduleDetail("親子教養情境應用", "把知識放回日常生活", ["常見場景。", "當下判斷。", "不建議反應。", "建議回應。", "事後追蹤。"], "場景可包含早上出門、寫功課、睡覺、手機使用、手足爭吵、青少年交友。"),
  "module-practice": moduleDetail("實作練習", "讓家長從知道變成會做", ["句型改寫。", "情緒觀察。", "行為目的判讀。", "邏輯後果設計。", "家庭會議演練。"], "每個練習都要有完成標準，例如「寫出三句不帶責備的我的訊息」。"),
  "module-check": moduleDetail("自我檢核工具", "讓家長知道自己是否用對", ["使用前檢核。", "使用中提醒。", "使用後反思。", "下一次修正方向。"], "例如邏輯後果檢核：是否尊重、是否相關、是否合理、是否事先說明。"),
  "module-faq": moduleDetail("FAQ", "處理家長最常卡住的問題", ["孩子不配合怎麼辦。", "另一半不支持怎麼辦。", "長輩介入怎麼辦。", "同理後仍然失控怎麼辦。"], "FAQ 應短、準、能連到更完整的案例或工具。"),
  "module-map": moduleDetail("延伸閱讀與學習地圖", "讓學習可以一路走下去", ["先修概念。", "下一步概念。", "相關案例。", "可搭配工具。", "推薦課程。"], "學完我的訊息後，下一步可連到課題分離、問題歸屬、界線設定、自然後果與邏輯後果。"),

  "flow-background": simpleDetail("背景理解", "先知道理論從哪裡來、解決什麼問題、不能解決什麼問題。這一步的目標不是背理論，而是建立安全邊界。", ["讀一篇入門文。", "看一張理論地圖。", "完成三題理解測驗。"]),
  "flow-concept": simpleDetail("核心概念", "把理論拆成幾個關鍵概念，讓家長有語言可以描述孩子的行為與自己的反應。", ["學會定義。", "看生活例子。", "連到常見誤解。"]),
  "flow-myth": simpleDetail("迷思澄清", "先拆掉容易誤用的想法，避免把同理用成放任、把後果用成懲罰、把鼓勵用成討好。", ["辨識錯誤說法。", "比較錯用與正用。", "完成自我檢核。"]),
  "flow-case": simpleDetail("案例分析", "用匿名案例練習判斷，不急著給答案，先看事件、情緒、需求、關係與能力缺口。", ["讀案例。", "標記問題類型。", "從兩個理論分析。"]),
  "flow-scenario": simpleDetail("情境應用", "把案例延伸到家裡真的會發生的場景，提供當下、事後與追蹤三段式做法。", ["當下止血。", "事後討論。", "一週追蹤。"]),
  "flow-tool": simpleDetail("工具練習", "把觀念變成可填寫、可演練、可追蹤的工具。", ["下載或開啟工作表。", "填入自己的情境。", "設定下一次行動。"]),
  "flow-check": simpleDetail("自我檢核", "讓家長知道自己是否真正掌握，而不是只看完文章。", ["檢查是否能說出原因。", "檢查是否能寫出一句話。", "檢查是否能追蹤結果。"]),

  "case-homework": {
    kicker: "案例學習",
    title: "孩子拖延功課",
    body: [
      block("背景資訊", ["匿名案例：一位學齡孩子每天回家後遲遲不開始功課，家長越催越生氣，孩子越拖越久。"]),
      block("衝突事件", ["家長提醒三次後開始責罵，孩子回嘴或沉默，最後常在睡前才匆忙完成。"]),
      block("常見反應", ["一直催促。", "威脅取消休閒。", "直接坐旁邊盯著寫。", "幫孩子安排所有步驟。"]),
      block("多理論分析", ["阿德勒：可能在爭取權力、尋求注意，或缺乏能力感。", "冰山理論：表層是拖延，底層可能是害怕做不好、期待被陪伴、覺得自己不夠好。", "執行功能：可能缺乏拆任務、估時間、開始行動的能力。"]),
      block("行動方案", ["先問：你卡在哪一題或哪一步？", "把功課拆成 15 分鐘一段。", "家長用我的訊息表達需求：我擔心太晚開始會影響睡眠，我們先一起看今天要完成哪些項目。", "完成一段後給具體鼓勵：你剛剛先寫最難的那題，這是有計畫的做法。"]),
      script("對話範例", "我看到你還沒開始，我猜你可能覺得很多、不知道從哪裡開始。我們先不討論全部，只看第一步：你想先做最短的，還是先做最難的？"),
      block("追蹤方式", ["連續一週記錄開始時間、卡住原因、家長反應、孩子完成情況。觀察是否從「催促」轉為「能自己說出第一步」。"])
    ]
  },
  "case-teen-door": {
    kicker: "案例學習",
    title: "青少年關門不說話",
    body: [
      block("背景資訊", ["匿名案例：一位青少年放學後常直接進房間，家長詢問時只回簡短句子或不回應。"]),
      block("衝突事件", ["家長覺得孩子沒禮貌，開始追問成績、人際、手機使用；孩子關門、戴耳機或更不願說。"]),
      block("多理論分析", ["阿德勒：可能在保護自主感，避免被控制。", "冰山理論：表層是冷淡，底層可能有壓力、羞愧、擔心被批評。", "依附觀點：孩子仍需要連結，但需要被尊重的距離。"]),
      block("介入方式", ["先降低追問密度。", "固定提供低壓連結，例如一起吃點心、散步、接送路上不審問。", "把談話改成邀請：我想知道你最近過得怎麼樣，但不用現在回答，你願意的時候我在。"]),
      script("對話範例", "我剛剛問太急了。你回房間可能只是想休息。我會尊重你先安靜一下，晚點如果你願意，我想聽聽今天有沒有一件還可以的事。"),
      block("追蹤方式", ["記錄親子正向互動次數，而不只記錄孩子開口多少。先看關係溫度，再談規範。"])
    ]
  },
  "case-siblings": {
    kicker: "案例學習",
    title: "兄妹爭寵與告狀",
    body: [
      block("背景資訊", ["匿名案例：兩個孩子常爭玩具、爭父母注意，其中一方常告狀，另一方常被貼上不懂事標籤。"]),
      block("衝突事件", ["家長一聽到哭聲就判定誰錯，要求大的讓小的，結果大的更不滿，小的更依賴告狀。"]),
      block("多理論分析", ["阿德勒：孩子可能透過衝突尋求歸屬感與重要感。", "出生序／家庭位置：孩子可能在家庭角色中競爭位置。", "家庭系統：父母若固定站到某一邊，會強化衝突循環。"]),
      block("介入方式", ["先分開安頓情緒，不立刻審判。", "描述事實：我看到你們都想要同一個東西。", "訓練合作：輪流、計時、一起找第三方案。", "鼓勵具體合作行為。"]),
      script("對話範例", "我不急著判斷誰對誰錯。我看到你們都很想玩。現在有三個選擇：輪流十分鐘、一起設規則，或先暫停這個玩具。你們想先試哪一個？"),
      block("追蹤方式", ["觀察告狀次數是否下降、孩子是否能提出替代方案、家長是否減少偏袒式介入。"])
    ]
  },

  "tool-checklist": toolDetail("檢核表", "快速判斷方法是否用對", ["情境發生時先勾選。", "先判斷責任歸屬：孩子、家長或共同。", "確認是否有安全、健康、生命或費用疑慮。", "依結果選擇自然後果或邏輯後果。"], ["課題分離判斷表。", "自然後果使用條件檢核。", "邏輯後果三原則檢核。", "親子溝通前自我檢核。"], "家長能在 2 分鐘內判斷：這件事該放手讓孩子承擔，還是家長必須介入設界線。"),
  "tool-assessment": toolDetail("問卷評估", "了解目前狀態並推薦學習路徑", ["填答 10-20 題。", "產生簡短結果。", "推薦內容、案例與工具。"], ["教養風格問卷。", "親子連結狀態問卷。", "孩子自我管理能力評估。"], "讓平台從同一套內容變成個人化學習。"),
  "tool-script": toolDetail("對話腳本", "把理論轉成家長說得出口的話", ["選情境。", "選孩子年齡。", "套用腳本。", "改成自己的語氣。", "記錄孩子反應。"], ["我的訊息腳本。", "同理回應腳本。", "設界線腳本。", "邀請合作腳本。"], "降低開口難度，減少責罵、威脅與說教。"),
  "tool-activity": toolDetail("親子活動", "用正向互動修復關係", ["選一個低壓活動。", "設定短時間。", "不趁機說教。", "結束後只做簡短回饋。"], ["每日十分鐘連結。", "情緒卡對話。", "家庭感謝練習。", "共同任務遊戲。"], "讓孩子重新感覺與家長站在同一邊。"),
  "tool-emotion-log": toolDetail("情緒觀察表", "找出情緒爆發的觸發點", ["記錄事件。", "標記孩子情緒。", "標記家長反應。", "推測需求。", "寫下下次可嘗試回應。"], ["哭鬧紀錄。", "生氣觸發表。", "焦慮事件表。"], "從『孩子又失控』轉向『我看見一個模式』。"),
  "tool-behavior-log": toolDetail("行為紀錄表", "找出重複行為的循環", ["記錄行為前發生什麼。", "記錄家長怎麼反應。", "記錄孩子得到什麼。", "推測行為目的。", "設計替代行動。"], ["拖延紀錄表。", "手機使用紀錄。", "說謊情境紀錄。"], "幫助家長停止只處理表面行為。"),
  "tool-worksheet": toolDetail("工作表", "支援課後練習與小組討論", ["閱讀範例。", "填入自己的情境。", "先做課題分離。", "改寫語句。", "檢查是否符合原則。"], ["課題分離判斷單。", "我的訊息改寫單。", "自然後果與邏輯後果設計單。", "冰山探索單。", "家庭規範設計單。"], "把抽象觀念變成可以反覆練習的技能。"),
  "tool-reflection": toolDetail("追蹤反思", "觀察方法是否有效並修正", ["設定一週目標。", "記錄三次使用情境。", "比較孩子反應。", "寫下下一次調整。"], ["兩週行動計畫。", "案例回顧表。", "親子溝通成長紀錄。"], "讓家長看到自己的進步，而不是只看孩子有沒有立刻改變。"),

  "path-beginner": pathDetail("初階：建立基本觀念", "從控制孩子轉向理解孩子", ["孩子行為背後有需求。", "情緒是訊號。", "鼓勵不是稱讚。", "家長先看見自己的反應。"], ["記錄三次親子衝突。", "每天一句具體鼓勵。", "把一句責罵改成描述事實。"], "能辨識自己的慣性反應，並能用至少三句具體鼓勵。"),
  "path-intermediate": pathDetail("中階：分析行為與需求", "能判斷孩子行為背後可能發生什麼，並先做課題分離", ["課題分離。", "問題歸屬。", "錯誤行為目標。", "我的訊息。", "自然後果與邏輯後果。"], ["分析三個匿名案例。", "寫五組我的訊息。", "為兩個家庭規範設計後果。", "完成三份課題分離判斷單。"], "能先判斷責任歸屬，再決定讓自然後果發生或設計邏輯後果。"),
  "path-advanced": pathDetail("進階：整合理論決策", "能根據年齡、能力與關係狀態選方法", ["家庭星座。", "冰山理論。", "青少年自主與界線。", "家庭會議。"], ["完成一份完整案例分析。", "設計一次家庭會議。", "做兩週追蹤計畫。"], "能說明自己為什麼使用某個方法，而不是只套技巧。"),
  "path-expert": pathDetail("專家級：自主分析複雜情境", "能整合多理論並支持其他家長學習", ["複雜家庭系統。", "高衝突溝通。", "案例督導。", "工具設計。"], ["撰寫三份案例報告。", "設計一份親職工具。", "帶領一次案例討論。"], "能辨識教育問題與需要轉介的心理、安全或醫療風險。"),

  "strategy-theories": simpleDetail("理論擴充路線", "平台應分階段納入理論，避免一次放太多造成混亂。", ["第一階段：阿德勒、冰山、情緒教養、正向教養、非暴力溝通。", "第二階段：依附理論、發展心理學、家庭系統、執行功能、SEL。", "第三階段：創傷知情、CBT、敘事治療、動機式晤談、特殊需求教育。"]),
  "strategy-conflict": simpleDetail("避免理論衝突", "不同理論不用互相取代，而是放在不同分析層級。", ["理論層解釋為什麼。", "案例層判斷發生什麼。", "工具層決定怎麼做。", "追蹤層檢查是否有效。"]),
  "strategy-five-layer": simpleDetail("跨理論五層分析", "用五層框架整合不同理論，讓平台越擴充越清楚。", ["行為層：看見具體事件。", "情緒層：理解感受。", "需求層：推測目的。", "關係層：看親子互動。", "能力層：找需要訓練的技能。"]),
  "strategy-method": simpleDetail("平台方法論", "建立平台自己的共同流程，所有文章、案例、工具都用同一套語言。", ["看見：發生什麼。", "理解：孩子可能怎麼了。", "回應：家長當下怎麼說。", "練習：接下來怎麼做。", "追蹤：怎麼知道有進展。"]),

  "layer-behavior": simpleDetail("行為層", "先描述孩子做了什麼，不急著下判斷。", ["錯誤示範：他就是懶。", "較好的描述：他連續三天回家後超過一小時才開始功課。", "可用工具：行為紀錄表。"]),
  "layer-emotion": simpleDetail("情緒層", "同時看孩子和家長的情緒，避免只處理表面行為。", ["孩子可能是挫折、害怕、委屈或生氣。", "家長可能是焦慮、失控、無力或被挑戰。", "可用工具：情緒觀察表。"]),
  "layer-need": simpleDetail("需求層", "推測孩子透過行為想獲得什麼，例如連結、自主、能力感或安全感。", ["阿德勒可用來看歸屬感與行為目的。", "冰山理論可用來看渴望與期待。", "可用工具：需求判讀表。"]),
  "layer-relationship": simpleDetail("關係層", "評估現在親子之間是合作、疏離、權力拉扯，還是彼此防衛。", ["關係緊張時，先修復連結，再談規範。", "關係穩定時，可以更有效地討論責任與後果。", "可用工具：親子連結檢核。"]),
  "layer-capability": simpleDetail("能力層", "判斷孩子不是不願意，而是缺少某項能力。", ["可能缺任務拆解、情緒調節、時間估算、表達需求、等待能力。", "可用工具：技能訓練表與工作表。"])
};

const genericTags = {
  "tag-age": ["年齡階段", "案例需要依孩子年齡分層，因為幼兒、學齡兒童與青少年的理解能力、界線需求與自主程度不同。", ["0-3 歲：安全與依附。", "3-6 歲：常規與情緒命名。", "7-12 歲：責任與自我管理。", "13-18 歲：自主、界線與價值觀對話。"]],
  "tag-emotion": ["情緒問題", "用來分類哭鬧、生氣、焦慮、挫折、自卑等案例。重點是找觸發點與需求，不只停止情緒。", ["情緒命名。", "安頓方式。", "事後討論。", "追蹤恢復時間。"]],
  "tag-learning": ["學習問題", "包含拖延、不寫功課、考試焦慮、缺乏動機、害怕失敗。", ["區分能力不足與不願意。", "拆解任務。", "建立回饋與追蹤。"]],
  "tag-sibling": ["手足衝突", "包含搶玩具、比較、爭寵、告狀、肢體衝突。", ["不急著審判。", "看見每個孩子的位置感。", "訓練輪流、協商與修復。"]],
  "tag-social": ["人際關係", "包含交朋友、被排擠、霸凌、戀愛、分手。", ["先聽孩子版本。", "判斷風險程度。", "提供選項與支持。"]],
  "tag-communication": ["親子溝通", "包含頂嘴、說謊、關門不說話、情緒勒索、權力衝突。", ["先降低攻防。", "使用我的訊息。", "練習傾聽與邀請合作。"]],
  "tag-self": ["自我管理", "包含生活常規、手機使用、時間管理、金錢管理、責任感。", ["建立可視化規範。", "把責任還給孩子。", "用追蹤表看進展。"]],
  "tag-parent": ["家長困境", "分類家長自己的卡點，例如忍不住罵、怕孩子受傷、夫妻不同調、長輩介入。", ["先處理家長反應。", "再處理孩子行為。", "必要時設家庭一致規則。"]],
  "tag-theory": ["理論標籤", "用於把案例連到阿德勒、冰山、依附、家庭系統、執行功能等不同視角。", ["一個案例可有多個理論標籤。", "標籤要說明它負責解釋哪一層。"]],
  "tag-tool": ["工具類型", "用於把案例連到檢核表、腳本、工作表、觀察表、追蹤表。", ["先分析，再推薦工具。", "工具要有填寫範例與完成標準。"]]
};

Object.entries(genericTags).forEach(([key, item]) => {
  detailContent[key] = simpleDetail(item[0], item[1], item[2]);
});

const stripHtml = (html) => {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.textContent.replace(/\s+/g, " ").trim();
};

const escapeHtml = (text) =>
  String(text).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[char];
  });

const sectionSearchRecords = [
  {
    type: "section",
    key: "positioning",
    label: "頁面區塊",
    title: "平台定位",
    summary: "核心使命、使用者輪廓、差異化定位與平台要解決的親子教育問題。",
    keywords: "定位 mission 使命 幼兒 學齡 青少年 教育工作者"
  },
  {
    type: "section",
    key: "knowledge",
    label: "頁面區塊",
    title: "知識體系",
    summary: "領域、理論、核心概念與應用層級的樹狀知識架構。",
    keywords: "knowledge tree 知識樹 阿德勒 冰山 理論 架構"
  },
  {
    type: "page",
    key: "consequences",
    label: "整合教學頁",
    title: "後果怎麼選：自然後果 × 邏輯後果",
    summary: "先判斷責任歸屬，再比較自然後果與邏輯後果，最後用 4R 檢查是否尊重且合理。",
    keywords: "自然後果 邏輯後果 4R 相關 尊重 合理 事前告知 Jane Nelsen"
  },
  {
    type: "section",
    key: "content",
    label: "頁面區塊",
    title: "內容模組",
    summary: "理論起源、核心概念、迷思、案例、情境、練習、檢核與 FAQ。",
    keywords: "內容模板 content framework FAQ 延伸學習"
  },
  {
    type: "section",
    key: "cases",
    label: "頁面區塊",
    title: "案例系統",
    summary: "案例資料庫欄位、分類標籤與匿名案例分析。",
    keywords: "案例 手足 功課 青少年 衝突 分類"
  },
  {
    type: "section",
    key: "tools",
    label: "頁面區塊",
    title: "工具系統",
    summary: "檢核表、問卷、對話腳本、活動、觀察表、紀錄表與工作表。",
    keywords: "工具 checklist 腳本 問卷 觀察表 工作表"
  },
  {
    type: "section",
    key: "path",
    label: "頁面區塊",
    title: "學習路徑",
    summary: "初階、中階、進階、專家級的學習目標、任務與晉級標準。",
    keywords: "初階 中階 進階 專家級 學習地圖"
  },
  {
    type: "section",
    key: "strategy",
    label: "頁面區塊",
    title: "發展策略",
    summary: "理論擴充、跨理論整合框架、平台方法論與長期競爭力。",
    keywords: "發展策略 跨理論 方法論 五層分析"
  }
];

const buildSearchRecords = () => {
  const detailRecords = Object.entries(detailContent).map(([key, content]) => {
    const body = content.body.map(stripHtml).join(" ");
    return {
      type: "detail",
      key,
      label: content.kicker,
      title: content.title,
      summary: body.slice(0, 96),
      keywords: `${content.kicker} ${content.title} ${body}`
    };
  });

  return [...detailRecords, ...sectionSearchRecords];
};

const searchRecords = buildSearchRecords();

const normalizeSearchText = (text) => String(text).toLowerCase().replace(/\s+/g, "");

const scoreSearchRecord = (record, query) => {
  const normalizedQuery = normalizeSearchText(query);
  const normalizedTitle = normalizeSearchText(record.title);
  const normalizedLabel = normalizeSearchText(record.label);
  const normalizedKeywords = normalizeSearchText(record.keywords);

  if (!normalizedQuery) return 0;
  if (normalizedTitle === normalizedQuery) return 100;
  if (normalizedTitle.includes(normalizedQuery)) return 80;
  if (normalizedLabel.includes(normalizedQuery)) return 58;
  if (normalizedKeywords.includes(normalizedQuery)) return 40;

  return query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .reduce((score, token) => {
      const normalizedToken = normalizeSearchText(token);
      if (normalizedTitle.includes(normalizedToken)) return score + 18;
      if (normalizedKeywords.includes(normalizedToken)) return score + 8;
      return score;
    }, 0);
};

const searchSite = (query) =>
  searchRecords
    .map((record) => ({ ...record, score: scoreSearchRecord(record, query) }))
    .filter((record) => record.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "zh-Hant"))
    .slice(0, 8);

const hideSearchResults = () => {
  const results = document.querySelector("[data-search-results]");
  if (results) {
    results.hidden = true;
    results.innerHTML = "";
  }
  searchInput?.setAttribute("aria-expanded", "false");
};

const openSearchRecord = (record) => {
  hideSearchResults();
  if (record.type === "page") {
    window.location.href = `${record.key}.html`;
    return;
  }
  if (record.type === "detail") {
    openDetail(record.key, searchInput);
    return;
  }

  const section = document.getElementById(record.key);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const renderSearchResults = (query) => {
  const results = document.querySelector("[data-search-results]");
  if (!results) return;

  const trimmed = query.trim();
  if (!trimmed) {
    hideSearchResults();
    return;
  }

  const matches = searchSite(trimmed);
  if (!matches.length) {
    results.innerHTML = `<p class="search-empty">找不到相關內容，試試「鼓勵」「課題分離」「青少年」或「工具」。</p>`;
    results.hidden = false;
    searchInput?.setAttribute("aria-expanded", "true");
    return;
  }

  results.innerHTML = matches
    .map(
      (record, index) => `
        <button class="search-result" type="button" data-search-index="${index}">
          <strong>${escapeHtml(record.title)}</strong>
          <span>${escapeHtml(record.summary)}</span>
          <small>${escapeHtml(record.label)}</small>
        </button>
      `
    )
    .join("");
  results.hidden = false;
  searchInput?.setAttribute("aria-expanded", "true");

  results.querySelectorAll("[data-search-index]").forEach((button) => {
    button.addEventListener("click", () => {
      openSearchRecord(matches[Number(button.dataset.searchIndex)]);
    });
  });
};

const searchForm = document.querySelector("[data-site-search]");
const searchInput = document.querySelector("[data-search-input]");

if (searchForm && searchInput) {
  searchInput.addEventListener("input", () => renderSearchResults(searchInput.value));
  searchInput.addEventListener("focus", () => renderSearchResults(searchInput.value));
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      hideSearchResults();
      searchInput.blur();
    }
  });
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const [firstMatch] = searchSite(searchInput.value);
    if (firstMatch) {
      openSearchRecord(firstMatch);
    } else {
      renderSearchResults(searchInput.value);
    }
  });

  document.addEventListener("click", (event) => {
    if (!searchForm.contains(event.target)) {
      hideSearchResults();
    }
  });
}

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

const closeMobileMenu = () => {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "開啟選單");
  mobileMenu.hidden = true;
};

const toggleMobileMenu = () => {
  if (!menuToggle || !mobileMenu) return;
  const willOpen = mobileMenu.hidden;
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "關閉選單" : "開啟選單");
  mobileMenu.hidden = !willOpen;
};

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", toggleMobileMenu);
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

function block(title, items) {
  return `<section><h3>${title}</h3><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></section>`;
}

function script(title, text) {
  return `<section><h3>${title}</h3><p class="script-box">${text}</p></section>`;
}

function moduleDetail(title, purpose, sections, example) {
  return {
    kicker: "內容模組",
    title,
    body: [
      block("為什麼需要", [purpose]),
      block("應包含內容", sections),
      script("範例", example),
      block("下一步", ["連到相關案例。", "提供至少一個可操作工具。", "設定一個學習任務。"])
    ]
  };
}

function simpleDetail(title, summary, items) {
  return {
    kicker: "詳細內容",
    title,
    body: [block("說明", [summary]), block("內容重點", items)]
  };
}

function toolDetail(title, purpose, steps, examples, outcome) {
  return {
    kicker: "實踐工具",
    title,
    body: [
      block("適用情境", [purpose]),
      block("使用流程", steps),
      block("可製作工具", examples),
      block("預期成果", [outcome])
    ]
  };
}

function pathDetail(title, goal, required, tasks, standard) {
  return {
    kicker: "學習路徑",
    title,
    body: [
      block("學習目標", [goal]),
      block("必修內容", required),
      block("實作任務", tasks),
      block("晉級標準", [standard])
    ]
  };
}

const tabGroups = document.querySelectorAll("[data-tabs]");

tabGroups.forEach((group) => {
  const buttons = Array.from(group.querySelectorAll("[data-tab]"));
  const panels = Array.from(group.querySelectorAll("[data-panel]"));

  const activateTab = (button, moveFocus = false) => {
    const target = button.dataset.tab;

    buttons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
      item.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === target;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });

    if (moveFocus) button.focus();
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => activateTab(button));
    button.addEventListener("keydown", (event) => {
      const currentIndex = buttons.indexOf(button);
      let nextIndex = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (currentIndex + 1) % buttons.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = buttons.length - 1;
      if (nextIndex !== null) {
        event.preventDefault();
        activateTab(buttons[nextIndex], true);
      }
    });
  });
});

document.querySelectorAll(".tree-toggle").forEach((button) => {
  const nested = button.nextElementSibling;
  if (!nested) return;

  button.classList.add("open");
  button.setAttribute("aria-expanded", "true");
  nested.hidden = false;

  button.addEventListener("click", () => {
    const isOpen = !nested.hidden;
    nested.hidden = isOpen;
    button.classList.toggle("open", !isOpen);
    button.setAttribute("aria-expanded", String(!isOpen));
  });
});

document.querySelectorAll("article[data-detail]").forEach((card) => {
  if (card.querySelector(".detail-button")) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "detail-button";
  button.dataset.detail = card.dataset.detail;
  button.textContent = "查看內容";
  card.appendChild(button);
});

const drawer = document.querySelector("[data-detail-drawer]");
const drawerTitle = document.querySelector("[data-detail-title]");
const drawerKicker = document.querySelector("[data-detail-kicker]");
const drawerBody = document.querySelector("[data-detail-body]");
const drawerPanel = drawer?.querySelector(".detail-panel");
const drawerClose = drawer?.querySelector(".detail-close");
const pageRegions = document.querySelectorAll("header, main, footer");
let detailReturnFocus = null;

const openDetail = (key, returnFocus = document.activeElement) => {
  const content = detailContent[key];
  if (!content) return;

  drawerKicker.textContent = content.kicker;
  drawerTitle.textContent = content.title;
  drawerBody.innerHTML = content.body.join("");
  drawer.hidden = false;
  document.body.style.overflow = "hidden";
  detailReturnFocus = returnFocus;
  pageRegions.forEach((region) => {
    region.inert = true;
  });
  drawerClose?.focus();
};

const closeDetail = () => {
  if (!drawer || drawer.hidden) return;
  drawer.hidden = true;
  document.body.style.overflow = "";
  pageRegions.forEach((region) => {
    region.inert = false;
  });
  if (detailReturnFocus instanceof HTMLElement) detailReturnFocus.focus();
  detailReturnFocus = null;
};

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-detail]");
  if (!trigger) return;

  const key = trigger.dataset.detail;
  if (!key) return;
  event.preventDefault();
  openDetail(key);
});

document.querySelectorAll("[data-close-detail]").forEach((item) => {
  item.addEventListener("click", closeDetail);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && drawer && !drawer.hidden) {
    closeDetail();
    return;
  }
  if (event.key === "Tab" && drawer && !drawer.hidden && drawerPanel) {
    const focusable = Array.from(
      drawerPanel.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')
    ).filter((item) => !item.hidden);
    if (focusable.length) {
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

const scrollToPageTop = (event) => {
  const isAnchor = event?.currentTarget?.tagName === "A";
  if (event && !isAnchor) {
    event.preventDefault();
  }
  if (drawer && !drawer.hidden) {
    closeDetail();
  }
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
  setTimeout(() => window.scrollTo(0, 0), 0);
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
};

const bindScrollTopControls = () => {
  document.querySelectorAll("[data-scroll-top], #back-to-top").forEach((item) => {
    item.removeEventListener("click", scrollToPageTop);
    item.addEventListener("click", scrollToPageTop);
  });
};

bindScrollTopControls();
document.addEventListener("DOMContentLoaded", bindScrollTopControls);

const navLinks = document.querySelectorAll(".top-nav a");
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveNav = () => {
  let current = null;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 120) current = section;
  });
  if (!current) return;

  document.querySelectorAll('.top-nav a, .mobile-menu a').forEach((link) => {
    const isActive = link.getAttribute("href") === `#${current.id}`;
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

window.addEventListener("scroll", setActiveNav, { passive: true });
setActiveNav();
