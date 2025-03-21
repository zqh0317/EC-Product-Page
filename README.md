# 日本語の紹介 [English version follows after Japanese] 【中文版请下拉至最后】  
# EC商品の詳細ページ（js & html & css & less）

こんにちは、私は郑绮慧（ジン・チーヒ）と申します。フロントエンド開発者で、効率的で保守可能なフロントエンドアプリケーションの構築を得意としています。  
このプロジェクトは、私が独自に開発したEC商品の詳細ページで、豊富な機能とスタイルで商品を表示しています。

## オンラインデモ
[ここをクリックして体験](http://product-page-for-ec.vercel.app)

## プロジェクトの背景と目標
ECプラットフォームにおいて、商品詳細ページのデザインはユーザーの購入決定に直接影響を与えます。商品の明確な表示、スムーズなインタラクション体験、および便利な価格比較機能は、直帰率を減少させ、転換率を向上させるのに役立ちます。

このプロジェクトの主な目標：
- ✅ **高画質の商品閲覧**：マウスをホバーすると画像が拡大され、商品詳細を確認でき、購入意欲を高めます
- ✅ **スマートな価格更新**：異なる構成やアクセサリーを選択すると、商品価格がリアルタイムで更新され、ユーザーが価格を直感的に比較できます
- ✅ **ワンクリックでカートに追加**：追加のアクセサリーを選択すると、システムが自動的に総価格を計算し、ユーザーの意思決定を簡素化します

**ビジネス価値**
- **ユーザーの直帰率を削減**：高画質な画像表示とインタラクションの最適化により、商品の詳細が不明確でユーザーが離れることを防ぎます
- **客単価を向上**：ワンクリックでアクセサリーを追加する機能は、ユーザーに追加のアクセサリー購入を促し、平均注文額を増加させます

私は要件分析、UIデザイン、フロントエンド開発を独自に行いました。

## 画面スクリーンショットと使用方法

### 画像拡大機能
<img src="https://github.com/user-attachments/assets/0500e896-156f-4a07-b5d5-d65ff8fde8e0">

### 価格自動更新機能
<img src="https://github.com/user-attachments/assets/d09ae715-9c77-40d3-99fb-f0d3ed5e1909">

### 使用方法
1️⃣ **大画像を確認**：商品画像領域にマウスを移動させると、右側に拡大エリアが表示され、マウスを移動させると拡大エリアも動きます。同時に下の矢印をクリックすると、すべての画像を確認できます    
2️⃣ **パラメータを選択**：好きなパラメータを選んで、価格の変化を比較できます  
3️⃣ **アクセサリーをカートに追加**：好きなアクセサリーを選択すると、総価格が直接表示され、手動で計算する必要はありません  

## 技術スタック
| 技術 | 説明 |
|------|------|
| JavaScript (ES6) | インタラクションのロジックを処理し、商品データを動的にレンダリング |
| CSS3 | 基本的なスタイルのデザイン |
| Less | Mixinを使ってスタイルの再利用性を高め、コードの重複を減らす |
| HTML5 | ページ構造を担当し、セマンティックな原則を遵守してSEOの親和性を高める |

## 特徴

- **高画質な画像の拡大**：商品画像にマウスをホバーすると、右側に拡大エリアが自動で表示され、**スムーズな移動をサポートし、より自然な閲覧体験を提供**  
- **価格の動的更新**：ユーザーが異なるパラメータを選択すると、価格エリアが**リロードなしで自動更新**され、ショッピングのスムーズさが向上

## コード構成
```bash
 ┣ 📂 css              
    ┣ 📂 mixins         
       ┣ 📜 clear.less # スタイルを再利用し、レイアウト変数を封装
    ┣ 📜 index.less    # 主なスタイルファイル、詳細なスタイル設計を担当
    ┣ 📜 reset.css     # スタイルの初期化（デフォルト設定のリセット）
 ┣ 📂 images           # 画像の保存
 ┣ 📂 js               
    ┣ 📜 data.js       # 商品データのシミュレーション、パラメータ変更をサポート
    ┣ 📜 index.js      # データのレンダリング、インタラクションロジック（画像拡大、価格更新など）を処理
 ┣ 📜 index.html       # ページの基本構造
```
## 📬 連絡先
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin: https://www.linkedin.com/in/qihui-zheng-ab2618275/



# English Version of Project Introduction
# E-commerce Product Detail Page (js & html & css & less)

Hello, I’m Zheng Qihui, a front-end developer skilled in building efficient and maintainable front-end applications.  
This project is an e-commerce product detail page I developed independently, showcasing the product with rich features and styles.

## Online Demo
[Click here to try](http://product-page-for-ec.vercel.app)

## Project Background & Goals
On e-commerce platforms, the design of the product detail page directly impacts users' purchasing decisions. Clear product displays, smooth interaction experiences, and convenient price comparison features effectively reduce bounce rates and improve conversion rates.

The core goals of this project are:
- ✅ **High-Quality Product Viewing**: Hovering the mouse will enlarge the image, helping users view product details and increasing purchase desire
- ✅ **Intelligent Price Updates**: When selecting different configurations or accessories, the product price updates in real time, allowing users to compare prices intuitively
- ✅ **One-Click Add to Cart Calculation**: When users select additional accessories, the system automatically calculates the total price, simplifying the decision-making process

**Business Value**
- **Reduce Bounce Rate**: High-quality image display and interaction optimization prevent user loss due to unclear product details
- **Increase Average Order Value**: The one-click add-to-cart feature encourages users to buy more accessories, increasing the average order amount

I independently completed the requirement analysis, UI design, and front-end development.

## Screenshots & Usage 

### Image Zoom Feature
<img src="https://github.com/user-attachments/assets/0500e896-156f-4a07-b5d5-d65ff8fde8e0">

### Price Change Feature
<img src="https://github.com/user-attachments/assets/d09ae715-9c77-40d3-99fb-f0d3ed5e1909">

### How to Use
1️⃣ **View Large Image**: Hover the mouse over the product image area, and the enlarged view will appear on the right. As you move the mouse, the enlarged area will follow. You can also click the arrow below to view all images  
2️⃣ **Select Parameters**: Choose your preferred parameters and compare the updated prices  
3️⃣ **Add Accessories to Cart**: Select your favorite accessories, and the total price will be displayed directly, no need to calculate manually

## Tech Stack
| Technology | Description |
|------------|-------------|
| JavaScript (ES6) | Handles interaction logic and dynamically renders product data |
| CSS3 | Responsible for basic style design |
| Less | Enhances style reusability through Mixins and reduces code repetition |
| HTML5 | Responsible for page structure, following semantic principles to improve SEO friendliness |

## Features

- **High-Quality Image Zoom**: When hovering over the product image, the enlarged area appears automatically on the right, **supporting smooth movement for a more natural viewing experience**  
- **Dynamic Price Updates**: When users select different parameters, the price area **automatically updates without refresh**, enhancing shopping smoothness

## Code Structure
```bash
 ┣ 📂 css              
    ┣ 📂 mixins         
       ┣ 📜 clear.less # Reusable styles, encapsulating layout variables
    ┣ 📜 index.less    # Main style file, responsible for detailed style design
    ┣ 📜 reset.css     # Style initialization (reset default settings)
 ┣ 📂 images           # Stores images
 ┣ 📂 js               
    ┣ 📜 data.js       # Simulates product data, supports parameter changes
    ┣ 📜 index.js      # Renders data, handles interaction logic (image zoom, price updates, etc.)
 ┣ 📜 index.html       # Basic page structure  
```
## Contect
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin: https://www.linkedin.com/in/qihui-zheng-ab2618275/


# 中文版项目简介
# 电商商品详情页面（js & html & css & less）

你好，我是郑绮慧，一名前端开发者，擅长构建高效、可维护的前端应用。
这个项目是我独立开发的电商商品详情页面，用丰富的功能和样式来展现商品。

## 线上demo
[点击这里体验](http://product-page-for-ec.vercel.app)

## 项目背景 & 目标
在电商平台上，商品详情页面的设计直接影响用户的购买决策。清晰的商品展示、流畅的交互体验以及便捷的价格对比功能，能有效减少跳出率，提高转化率。  

本项目的核心目标：
- ✅ **高清商品查看**：鼠标悬停即可放大图片，帮助用户查看商品细节，增强购买欲  
- ✅ **智能价格更新**：选择不同配置或配件时，商品价格实时更新，让用户直观对比价格  
- ✅ **一键加购计算**：当用户勾选额外配件时，系统自动计算总价，简化用户决策流程  

**商业价值**
- **减少用户跳出率**：高清大图展示和交互优化，避免因商品细节不清而流失用户  
- **提升客单价**：一键加购功能鼓励用户购买更多配件，提高平均订单金额  

我独立完成了需求分析，UI设计和前端开发。

## 页面截图 & 使用方法

### 图片放大功能
<img src="https://github.com/user-attachments/assets/0500e896-156f-4a07-b5d5-d65ff8fde8e0">

### 价格变化功能
<img src="https://github.com/user-attachments/assets/d09ae715-9c77-40d3-99fb-f0d3ed5e1909">

### 使用方法
1️⃣ **查看大图**：鼠标移入商品图片区域，右侧产生放大效果，移动鼠标时放大区域也随之移动；同时可以点击下方箭头查看所有图片 
2️⃣ **选择参数**：选择喜欢的参数，比较变化后的价格  
3️⃣ **加购配件**：勾选喜欢的配件，直接显示总价，无需手动计算      

## 技术栈
| 技术 | 说明 |
|------|------|
| JavaScript (ES6) | 处理交互逻辑，动态渲染商品数据 |
| CSS3 | 负责基本样式设计 |
| Less | 通过Mixin提高样式复用性，减少重复代码 |
| HTML5 | 负责页面结构，遵循语义化原则，提高 SEO 友好度 |

## 亮点

- **高清图片放大**：鼠标移入商品图片时，右侧自动显示放大区域，**支持平滑移动，提供更自然的查看体验**  
- **价格动态更新**：用户选择不同参数时，价格区域**无刷新自动更新**，提升购物流畅度       

## 代码结构
```bash
 ┣ 📂 css              
    ┣ 📂 mixins         
       ┣ 📜 clear.less # 复用样式，封装布局变量
    ┣ 📜 index.less    # 主要样式文件，负责详细样式设计
    ┣ 📜 reset.css     # 样式的初始化（重置一些默认设置）
 ┣ 📂 images           # 存储图片
 ┣ 📂 js               
    ┣ 📜 data.js       # 商品数据模拟，支持参数变化
    ┣ 📜 index.js      # 渲染数据，处理交互逻辑（图片放大、价格更新等）
 ┣ 📜 index.html       # 网页基础结构  
```   

 ## 联系方式
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin: https://www.linkedin.com/in/qihui-zheng-ab2618275/



