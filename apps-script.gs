// 鏡球團購：把這段貼到 Google 試算表的「擴充功能 → Apps Script」
const HEADERS = ['時間','訂單編號','姓名','手機','7-11 門市','店號','IG','匯款後五碼','單買鏡球','單買支架','合購組','品項','小計','運費','總計','備註'];

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
  sh.appendRow([new Date(), d.orderId, d.name, d.phone, d.store, d.storeNo, d.ig, d.last5,
    d.ball, d.stand, d.set, d.items, d.subtotal, d.shipping, d.total, d.note]);
  return ContentService.createTextOutput('ok');
}
