# 📚 油爐管理系統 PWA - 完整檔案索引

## 🎯 從這裡開始

**新手？** 先看這個：
- 📋 **[README-PWA.md](./README-PWA.md)** - 總覽與快速開始

**要部署？** 看這個：
- 🚀 **[DEPLOY.txt](./DEPLOY.txt)** - 視覺化部署步驟（推薦）

---

## 📦 核心檔案（需要上傳到伺服器）

### ⭐ 必須上傳（6 個檔案）

| 檔案 | 大小 | 說明 |
|------|------|------|
| `boiler-dashboard-simple.html` | 34 KB | 主儀表板（入口頁面）|
| `qr-mobile-multilang.html` | 41 KB | QR 掃描輸入頁面 |
| `manifest.json` | 840 B | PWA 設定檔 |
| `service-worker.js` | 3.3 KB | 離線功能 |
| `icon-192.png` | 2.5 KB | APP 小圖示 |
| `icon-512.png` | 6.4 KB | APP 大圖示 |

---

## 📖 說明文件（閱讀參考）

### 部署指南

| 文件 | 適合對象 | 閱讀時間 |
|------|---------|---------|
| [README-PWA.md](./README-PWA.md) | 所有人 | 2 分鐘 |
| [DEPLOY.txt](./DEPLOY.txt) | 要部署的人 | 3 分鐘 |
| [PWA-QUICK-START.md](./PWA-QUICK-START.md) | 快速上手 | 5 分鐘 |
| [PWA-INSTALL-GUIDE.md](./PWA-INSTALL-GUIDE.md) | 深入了解 | 15 分鐘 |
| [FILE-LIST.md](./FILE-LIST.md) | 檔案詳解 | 10 分鐘 |

### 技術文件

| 文件 | 說明 |
|------|------|
| [README-multilang.md](./README-multilang.md) | 多語言系統說明 |
| [README.md](./README.md) | 原始系統說明 |
| [google-apps-script.js](./google-apps-script.js) | Google Sheets 後端程式 |

---

## 🔧 輔助工具

| 檔案 | 用途 |
|------|------|
| [pwa-check.html](./pwa-check.html) | PWA 部署檢查工具 |

---

## 🗃️ 歷史版本（參考用，不需上傳）

| 檔案 | 說明 |
|------|------|
| `boiler-management-system.html` | 初版儀表板（無多語言）|
| `boiler-management-multilang.html` | React 版本（較大）|
| `qr-mobile-input.html` | 初版 QR 頁面（無多語言）|

---

## 🚀 快速開始流程

```
1. 讀 README-PWA.md         (2 分鐘)
   ↓
2. 讀 DEPLOY.txt            (3 分鐘)
   ↓
3. 上傳 6 個必要檔案        (5 分鐘)
   ↓
4. 開啟 pwa-check.html 檢查 (1 分鐘)
   ↓
5. 測試安裝                 (2 分鐘)
   ↓
6. 分享給員工               (完成！)
```

---

## 📱 安裝流程

### Android
```
開啟網址 → 點擊「安裝 APP」→ 完成
```

### iOS
```
開啟網址 → 點「分享」→ 選「加入主畫面」→ 完成
```

---

## 🆘 遇到問題？

**問題排查順序：**
1. 開啟 `pwa-check.html` 檢查檔案
2. 閱讀 `PWA-INSTALL-GUIDE.md` 的「疑難排解」章節
3. 確認網址是 `https://` 開頭
4. 清除瀏覽器快取重試

---

## 📊 檔案結構樹

```
📁 你的網站目錄/
│
├── 🎯 入口檔案
│   └── boiler-dashboard-simple.html    (主儀表板)
│
├── 📱 PWA 核心
│   ├── manifest.json                   (PWA 設定)
│   ├── service-worker.js               (離線功能)
│   ├── icon-192.png                    (小圖示)
│   └── icon-512.png                    (大圖示)
│
├── 🔧 功能頁面
│   └── qr-mobile-multilang.html        (QR 輸入)
│
├── 🔍 檢查工具
│   └── pwa-check.html                  (部署檢查)
│
└── 📚 文件資料（可選）
    ├── README-PWA.md
    ├── DEPLOY.txt
    ├── PWA-QUICK-START.md
    ├── PWA-INSTALL-GUIDE.md
    ├── FILE-LIST.md
    └── google-apps-script.js
```

---

## ✨ 功能特色

✅ **多語言支援** - 中文 / 越南文 / 泰文
✅ **工號登入** - 自動切換對應語言
✅ **水煤比監控** - 即時計算與狀態判斷
✅ **PWA 安裝** - 可安裝到手機桌面
✅ **離線功能** - 沒網路也能開啟查看
✅ **自動更新** - 不需重新安裝
✅ **專業設計** - 深色工業風格
✅ **響應式** - 支援電腦、平板、手機

---

## 🎯 建議閱讀順序

### 初次使用
1. README-PWA.md
2. DEPLOY.txt
3. PWA-QUICK-START.md

### 深入了解
4. PWA-INSTALL-GUIDE.md
5. FILE-LIST.md
6. README-multilang.md

### 開發維護
7. google-apps-script.js
8. service-worker.js（程式碼）

---

## 📞 常用連結

**部署後的網址：**
- 儀表板：`https://你的網址/boiler-dashboard-simple.html`
- QR 輸入：`https://你的網址/qr-mobile-multilang.html`
- 檢查工具：`https://你的網址/pwa-check.html`

**測試帳號：**
- `TEST` - 中文
- `A001` - 越南文
- `B001` - 泰文
- `C001` - 中文

---

## 🎊 完成！

你現在擁有一個專業的 PWA 油爐管理系統！

**下一步：**
1. 選擇上面的「建議閱讀順序」開始
2. 或直接看 `DEPLOY.txt` 快速部署

**分享網址給員工，開始使用！**

---

最後更新：2024-12-03  
版本：v1.0.0  
技術：PWA + JavaScript + Chart.js + Google Apps Script
