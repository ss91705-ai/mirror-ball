# Mirror Ball 鏡球團購頁

## 上線
1. 在 GitHub 開新 repo（例如 `mirror-ball`），把 `index.html`、`config.js`、`images/` 整包上傳。
2. Settings → Pages → Branch 選 `main` / root → Save。網址會是 `https://ss91705-ai.github.io/mirror-ball/`。

## 接 Google 試算表
1. 開一個新的 Google 試算表 → 擴充功能 → Apps Script。
2. 貼上 `apps-script.gs` 的內容 → 部署 → 新增部署作業 → 類型「網頁應用程式」，執行身分「我」，存取權「所有人」。
3. 複製 `/exec` 結尾的網址，貼到 `config.js` 的 `sheetUrl`。

## 常改的地方（都在 config.js）
- `deadline` 收單時間
- `products` 價格
- `shipping` 運費
- `bank` 匯款帳戶
