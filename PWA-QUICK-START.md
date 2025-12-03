# 📱 快速部署指南

## 🎯 你現在有什麼？

你的油爐管理系統已經升級成 **PWA APP**！

✅ 可以安裝到手機桌面
✅ 像真正的 APP 一樣使用
✅ 支援離線查看
✅ 不需要上架 App Store

---

## 📦 檔案清單

需要上傳到伺服器的檔案（共 7 個）：

```
📁 上傳這些檔案到同一個目錄：
├── ⭐ boiler-dashboard-simple.html    (主儀表板 - 這是入口)
├── ⭐ qr-mobile-multilang.html        (手機輸入頁面)
├── ⭐ manifest.json                   (PWA 設定檔)
├── ⭐ service-worker.js               (離線功能)
├── ⭐ icon-192.png                    (APP 小圖示)
├── ⭐ icon-512.png                    (APP 大圖示)
└── 📄 pwa-check.html                  (檢查工具 - 可選)
```

---

## 🚀 3 步驟部署

### 1️⃣ 上傳檔案
把上面 6 個檔案（標記⭐的）上傳到你的網站

### 2️⃣ 確認 HTTPS
確保網址是 `https://` 開頭（PWA 必要條件）

### 3️⃣ 測試
開啟 `pwa-check.html` 檢查是否正常

---

## 📱 員工如何安裝 APP？

### **Android 手機：**
1. 開啟 `https://你的網址/boiler-dashboard-simple.html`
2. 點擊右下角 **"📱 安裝 APP"** 按鈕
3. 完成！桌面會出現油爐管理 APP

### **iPhone：**
1. 用 Safari 開啟網址
2. 點擊底部「分享」按鈕 📤
3. 選擇「加入主畫面」
4. 完成！

---

## ✨ 新功能

### 自動安裝提示
第一次開啟時，右下角會有浮動按鈕：
```
┌─────────────────┐
│  📱 安裝 APP    │  ← 點這裡
└─────────────────┘
```

### 離線功能
- 有網路時：正常使用所有功能
- 沒網路時：可以開啟 APP 查看已快取的資料

### 自動更新
當你更新程式碼，員工下次開啟 APP 會自動下載最新版本

---

## 🔧 如何更新 APP？

修改程式後：

1. 開啟 `service-worker.js`
2. 找到第 2 行：
   ```javascript
   const CACHE_NAME = 'boiler-management-v1.0.0';
   ```
3. 改變版本號：
   ```javascript
   const CACHE_NAME = 'boiler-management-v1.0.1';  // 改這裡
   ```
4. 重新上傳檔案
5. 員工重開 APP 會自動更新

---

## 📊 功能對照表

| 功能 | Web 版本 | PWA APP 版本 |
|------|----------|--------------|
| 多語言 (中/越/泰) | ✅ | ✅ |
| 工號登入 | ✅ | ✅ |
| 水煤比監控 | ✅ | ✅ |
| 即時圖表 | ✅ | ✅ |
| QR Code 輸入 | ✅ | ✅ |
| **安裝到桌面** | ❌ | ✅ 新增 |
| **全螢幕顯示** | ❌ | ✅ 新增 |
| **離線查看** | ❌ | ✅ 新增 |
| **更快載入** | - | ✅ 新增 |

---

## 🧪 測試檢查

部署後請測試：

- [ ] 能開啟儀表板
- [ ] 出現「安裝 APP」按鈕
- [ ] 可以安裝到手機桌面
- [ ] APP 圖示正常顯示
- [ ] 登入功能正常
- [ ] 語言切換正常
- [ ] QR 頁面正常運作

---

## 🆘 遇到問題？

### 沒有出現「安裝 APP」按鈕？
→ 檢查網址是否為 `https://`
→ 開啟 `pwa-check.html` 查看問題

### APP 圖示是空白的？
→ 確認 `icon-192.png` 和 `icon-512.png` 已上傳
→ 檢查檔案路徑是否正確

### 無法連線 Google Sheets？
→ 確認 `google-apps-script.js` 的網址已設定
→ 檢查 Google Apps Script 權限

---

## 📞 檔案說明

### 核心檔案（必要）：
- `boiler-dashboard-simple.html` - 主儀表板（✨ 已支援 PWA）
- `qr-mobile-multilang.html` - QR 輸入頁面（✨ 已支援 PWA）
- `manifest.json` - PWA 設定檔（✨ 新增）
- `service-worker.js` - 離線功能（✨ 新增）
- `icon-192.png` - APP 小圖示（✨ 新增）
- `icon-512.png` - APP 大圖示（✨ 新增）

### 輔助檔案（可選）：
- `pwa-check.html` - 部署檢查工具
- `PWA-INSTALL-GUIDE.md` - 完整安裝指南
- `google-apps-script.js` - 後端程式（需要部署到 Google）

---

## 🎉 完成！

你的系統現在是一個可以安裝的 APP 了！

**優點：**
✅ 不用上架 App Store
✅ 不用每次更新都重新安裝
✅ 員工可以像用 APP 一樣使用
✅ 支援離線查看資料

**網址分享給員工：**
```
https://你的網址/boiler-dashboard-simple.html
```

第一次開啟時，點擊「安裝 APP」即可！
