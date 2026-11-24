// ===== 鏡球團購設定：要改價格、截止日、連結，改這個檔案就好 =====
window.SHOP = {
  // 截止時間（台灣時間）← 請改成實際收單日
  deadline: '2026-11-25T23:59:59+08:00',

  // Google 試算表的 Apps Script 網址（/exec 結尾，照 README 步驟取得後貼在引號裡）
  // 留空 = 測試模式，訂單不會真的送出
  sheetUrl: 'https://script.google.com/macros/s/AKfycbzUAxxTk0MVD5yHSrPCQvMIe7EStElzKWbeRLul98R2W7CMx9DsqZElr47NugGxmEvt/exec',

  // 賣場 IG 帳號（不含 @）
  ig: 'smooch_home',

  // 7-11 超取運費（每筆訂單）
  shipping: 60,

  // 商品與價格
  products: {
    set:   { name: '鏡球＋支架 合購', en: 'Ball & Stand', price: 450, note: '比分開買省 20 元' },
    ball:  { name: '單買鏡球',       en: 'Mirror Ball',  price: 290 },
    stand: { name: '單買支架',       en: 'Chrome Stand', price: 180 }
  },

  // 匯款資訊
  bank: { name: '彰化銀行（009）', account: '22005113364100', memo: '鏡球' }
};
