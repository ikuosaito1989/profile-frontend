#### 概要
洋楽が大好きでランキングをよく調べていたのですが、なんのランキングかわからないサイト、解説がないサイト、情報が古いなど洋楽に関してまともなサイトがなかったため作りました。2021/11 現在は約1500記事投稿されています。月間アクティブユーザー数は3万、15万PVとSEOも順調に増加しています。いずれは日本で１番有名な洋楽サイトにすることを目標としています。
  
  
#### アーキテクチャ

![みんなの洋楽ランキングのアーキテクチャ](/architecture/mygkrnk.png)

#### 使用技術

- Cloud
  - Azure App Service on Linux
  - Azure SQL Database
  - Azure Logic App
- Framework
  - .NET Core 3.1
- Program
  - C# 8.0
  - React 16.9
  - Typescript 4.0.3
  - Jquery 3.2.1
- Http
  - Let's Encrypt
- CI/CD
  - Github Actions
- Mail
  - Send Grid

#### 技術選定の背景

- .Net Core

BtoCサービスでC#を使っていたこともあり、サービスローンチ直後は.Net Frameworkで作りました。Windowsのみの開発、Visual Studio縛りやOSSの貧弱さ、エコシステムの貧弱さなど悪いところをあげたらキリがなく、将来的にはRailsに移行する予定でしたが、ちょうど.Net CoreがLinuxで安定して動くと聞き、Macでも安定して開発できるか検証もふくめて全面移行しました。

- React

経験的にはAngularの方がありましたが、局所的にフロントエンドで動かすためにはReactが最適だと思い、Reactで開発しました。個人的はこの選定は大正解で、Angularであればバージョンアップやモダンな開発に一歩遅れたものとなっていたと思います。

- Github Actions

CircleCIと迷いましたが、ちょうどGithub Actionsのローンチ直後と重なり、Githubで一元管理できる良さからGithub Actionsを選定しました。

#### 技術負債

改善したいが、そこまで影響がないので放置された負債です。

- Jquery

とあるデザイナーサイトのCSS&Jqueryのボイラープレートを使い、デザインはそれに則った形で実装しました。Jqueryはアニメーションを使っていて、大幅なデザインアップデートをしなければ消せないので、負債として残っております。また、モダンフロントエンドが本当に効率良いのか？と疑問視している時期があり、レビュー機能など一部Jqueryで実装してしまったため、デザイン以外にも負債が残っています。

- App Service on Linux

Github Actionsで1回目のデプロイが必ず失敗するというバグがあり、プランをアップデートしないと解決しないというひどい仕組みなので余裕があればコンテナ化し、Google Cloud Runに移行したいと思っています。

[Failed to deploy web package to App Service](https://github.com/projectkudu/kudu/issues/3042)

#### サービスローンチからアーキテクチャが変わったところ

- .Net Framework → .Net Core

一番大きなアーキテクチャ変更です。ローンチ直後に実施したため、1ヶ月間で移行が完了しました。データアクセスも遅いEntitiy FrameworkからDapperへ脱却しています。

- Windows Server → Debian Linux

Azure App ServiceからAzure App Service on Linuxに移行しました。変更が大きかったですが、月の固定費が10000円から1500円と激減しました。

- React＆TypeScript導入

サービスが成熟するにつれてフロントエンドを強化する必要が出てきました。Jqueryで開発することも検討しましたが、肥大化やメンテナンスが困難になりそうだったのでReactを導入しました。