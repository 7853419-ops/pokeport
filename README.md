# PokePort — 寶可夢卡牌投資組合追蹤器

## 部署步驟（完全不需要技術背景）

### 第一步：把程式碼上傳到 GitHub

1. 登入 [github.com](https://github.com)
2. 點右上角 **+** → **New repository**
3. Repository name 填入 `pokeport`
4. 選 **Public**，點 **Create repository**
5. 點頁面上的 **uploading an existing file** 連結
6. 把這個資料夾裡的**所有檔案**拖進去（注意：`api` 資料夾要整個拖）
7. 點 **Commit changes**

### 第二步：連接 Vercel

1. 登入 [vercel.com](https://vercel.com)
2. 點 **Add New Project**
3. 選 **Import Git Repository**，選剛剛建立的 `pokeport`
4. **Framework Preset** 選 **Other**
5. **Root Directory** 填 `public`（非常重要！）
6. 先**不要**點 Deploy，繼續第三步

### 第三步：設定 API Key（保護你的金鑰）

在 Vercel 的 Deploy 頁面：

1. 展開 **Environment Variables**
2. NAME 填入：`POKEMON_PRICE_TRACKER_API_KEY`
3. VALUE 填入：你的 PokémonPriceTracker API key
4. 點 **Add**
5. 現在點 **Deploy**

等待約 1 分鐘，部署完成後你會拿到一個網址，例如：
`https://pokeport-xxxx.vercel.app`

---

## 功能說明

- **新增卡牌**：搜尋卡牌名稱（支援英文），選擇評級，輸入買入價格
- **更新價格**：點「更新所有價格」從 TCGPlayer/eBay 取得最新成交價
- **走勢圖**：點擊任何一張卡牌查看 7日/30日/90日 價格走勢
- **價格提醒**：設定目標買入或賣出價，系統提示是否已達成
- **損益計算**：自動計算每張卡的未實現損益與整體投資報酬

## 匯率說明

目前 USD → NTD 匯率固定為 32.5，可在 `public/index.html`
第一行 `const USD_TO_TWD = 32.5;` 自行修改。

## 注意事項

- 卡牌資料存在**瀏覽器 localStorage**，換裝置後需重新輸入
- API 免費版每天限 100 次查詢；多人使用建議升級付費方案
- 若「更新價格」失敗，可能是 API key 未正確設定或每日額度用完
