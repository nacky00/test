import React from 'react';
import "../product.css";

export default function Sassy() {
    return (
        <main>
            <section>
                <div className="hero-area-wrapper">
                    <div className="hero-area-concept-message pc">
                        <div style={{ borderRadius: "1rem 0 2rem 0", textAlign: "center" }}>
                            <h1>スワイプで､</h1>
                            <h1>｢行きたい｣を発見｡</h1>
                        </div>
                        <h2>スポット直感型アプリ</h2>
                    </div>
                    <div className="hero-area-concept-message sp">
                        <div style={{ borderRadius: "1rem 0 2rem 0", textAlign: "center" }}>
                            <h1>スワイプで､</h1>
                            <h1>｢行きたい｣を発見｡</h1>
                        </div>
                        <h2>スポット直感型アプリ</h2>
                    </div>
                    <img src="../images/logo/logo-white.png" alt="Sassyロゴ" width="180px" height="auto" className="logo" />
                    <div className="app-download-container">
                        <a href="https://itunes.apple.com/jp/app/id1496112424?mt=8" target="_blank" onclick="gtag('event', 'click', {'event_category':'link','event_label':'itunes.apple.com/jp/app/id1496112424?mt=8 in_sassy_index top','value':'1'});"><img src="../images/appstore.svg" alt="AppStoreでSassyをインストールする" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob" target="_blank" onclick="gtag('event', 'click', {'event_category':'link','event_label':'play.google.com/store/apps/details?id=com.relyontrip.sassy in_sassy_index top','value':'1'});"><img src="../images/playstore.svg" alt="GooglePlayでSassyをインストールする" /></a>
                    </div>
                    <video playsinline="" muted="muted" loop="loop" autoplay="autoplay" height="auto;" min-width="240px;" width="320px;" style={{ borderRadius: "16px", margin: "32px 0px" }}>
                        <source src="/movies/feature_movie.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
            <section className="app-description">
                <div className="contents-inner">
                    <h2>これまで体験したことのない<span>おでかけ</span>を。</h2>
                    <div>
                        <p>今までの「おでかけ」に溢れていた「メンドクサイ」。気づかぬうちに、積み重なっていませんか？</p>
                    </div>
                    <div>
                        <p>「インスタ」や「ネット検索」でスポットを探して、グルメサイトで営業時間やクチコミを調べて、マップで場所や経路を確認して、友だちに共有して…。</p>
                        <p>今度からは、あなたの「メンドクサイ」全部をSassyが解決します。</p>
                    </div>
                    <div>
                        <p>「ワクワク」だけを楽しんで欲しいから。Sassyは、直感的な操作と豊富な便利機能にこだわりました。</p>
                        <p>平日で計画でワクワク、休日は行ってワクワク。おでかけに、彩りを。</p>
                    </div>
                    <div className="app-download-container">
                        <a href="https://itunes.apple.com/jp/app/id1496112424?mt=8" target="_blank" onclick="gtag('event', 'click', {'event_category':'link','event_label':'itunes.apple.com/jp/app/id1496112424?mt=8 in_sassy_index middle','value':'1'});"><img src="../images/appstore.svg" alt="AppStoreでSassyをインストールする" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob" target="_blank" onclick="gtag('event', 'click', {'event_category':'link','event_label':'play.google.com/store/apps/details?id=com.relyontrip.sassy in_sassy_index middle','value':'1'});"><img src="../images/playstore.svg" alt="GooglePlayでSassyをインストールする" /></a>
                    </div>
                </div>
            </section>

            <section className="highlight-feature" id="dj">
                <div className="contents-inner">
                    <h2>テーマ別スポットまとめ集</h2>
                    <div className="dj-container">
                        <img src="../images/material/dj-01.jpg" className="dj-avatar" />
                        <img src="../images/material/dj-02.jpg" className="dj-avatar" />
                        <img src="../images/material/dj-03.jpg" className="dj-avatar" />
                        <img src="../images/material/dj-04.jpg" className="dj-avatar" />
                        <img src="../images/material/dj-05.jpg" className="dj-avatar" />
                    </div>
                    <div className="about-dj">
                        <p>数々の良質スポットを知り尽くした「おでかけのプロ」が、テーマにあわせたイチオシのスポットを厳選してパッケージ化しました。一般的な「まとめサイト」と違い、Sassyの「まとめ集」では複数のスポットをマップでまとめて把握でき、そのままお気に入り保存も可能です。</p>
                    </div>
                    <div className="card">
                        <img src="../images/feature-images/playlist-and-map.jpg" alt="おでかけDJセレクト" className="" />
                    </div>
                    <h3>コンテンツ、続々充実。</h3>
                    <div className="playlist-sample">
                        <img src="../images/material/playlist-sample.jpg" alt="おでかけDJセレクトサンプル" className="" />
                    </div>
                    <div className="about-dj">
                        <p>まとめ集では、数々のワクワクするテーマをご用意。</p>
                        <p>また、「こんなテーマが知りたい！」というリクエストも大募集中です。お気軽に下記フォームからお問い合わせください。</p>
                    </div>
                    <button className="request-btn"><a href="/sassy/contact.html" target="_blank" onclick="ga('send','event','btn-to-contact','click','in-sassy-index', 1)">お問い合わせフォーム</a></button>
                </div>
            </section>
            <section className="overflow">
                <div className="contents-inner">
                    <div className="feature-row">
                        <div className="feature-contents">
                            <h2>一緒に「行きたい」を共有</h2>
                            <div className="text">「どこか行きたいところある？」の会話。これからは、Sassyで。</div>
                            <div className="text">２人の「行きたい」スポットを自動でマッチング。</div>
                        </div>
                        <div className="bg-card card-blue">
                            <img src="../images/feature-images/friends.jpg" alt="友だちと「行きたい」を共有" className="screen-shot" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="overflow">
                <div className="contents-inner">
                    <div className="feature-row end">
                        <div className="bg-card card-left card-orange">
                            <img src="../images/feature-images/swipe.jpg" alt="直感で行きたいスポットを探す" className="screen-shot screen-shot-left" />
                        </div>
                        <div className="feature-contents margin-left">
                            <h2>自分の好みは「直感」で探す</h2>
                            <div className="text">次々出てくる写真を「好きかどうか」でスワイプするだけ。</div>
                            <div className="text">直感的な操作で、次のおでかけ先を見つけよう。</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="overflow">
                <div className="contents-inner">
                    <div className="feature-row">
                        <div className="feature-contents">
                            <h2>インスタとマップが連動</h2>
                            <div className="text">インスタで見つけたスポットを保存すれば、</div>
                            <div className="text">あなただけの「行きたいマップ」が自動で完成。</div>
                        </div>
                        <div className="bg-card card-biolate">
                            <img src="../images/feature-images/instagram-map.jpg" alt="インスタとマップが連動友だちと「行きたい」を共有" className="screen-shot" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="topic">
                <h2>Topic</h2>
                <div className="contents">
                    <a href="https://prtimes.jp/main/html/rd/p/000000017.000051474.html" target="_blank">
                        <p className="date">2021-07-31</p>
                        <p className="title">【自治体との取組は３ヶ月連続！】スポット直感型アプリ『Sassy』が、三重県、富山県、山梨県、長野県、岐阜県および群馬県における観光コンテンツの作成・配信を開始</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://otekomachi.yomiuri.co.jp/lifestyle/20210721-OYTET50000/" target="_blank">
                        <p className="date">2021-07-20</p>
                        <p className="title">読売新聞朝刊（全国紙）にて、近場で休日を楽しみたいという要望に応えるサービスとしてSassyが紹介されました。</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://prtimes.jp/main/html/rd/p/000000015.000051474.html" target="_blank">
                        <p className="date">2021-06-30</p>
                        <p className="title">【観光/おでかけ】スポット直感型アプリ『Sassy』が青森県、岩手県および久慈市と連携！地域コンテンツの作成・配信を開始</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://prtimes.jp/main/html/rd/p/000000014.000051474.html" target="_blank">
                        <p className="date">2021-05-31</p>
                        <p className="title">【観光/おでかけ】スポット直感型アプリ『Sassy』が、山形県と連携！地域コンテンツの作成、アプリ配信を開始。</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://prtimes.jp/main/html/rd/p/000000013.000051474.html" target="_blank">
                        <p className="date">2020-12-17</p>
                        <p className="title">【より便利に】直感型おでかけアプリ『Sassy』新機能のお知らせ & 『鬼滅の刃』聖地巡礼スポット特集が大好評！</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://prtimes.jp/main/html/rd/p/000000012.000051474.html" target="_blank">
                        <p className="date">2020-11-08</p>
                        <p className="title">【20代に人気】直感型おでかけアプリ「Sassy」が、マイクロツーリズムWebメディア「Sassy-Trip」をスタート！</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://prtimes.jp/main/html/rd/p/000000011.000051474.html" target="_blank">
                        <p className="date">2020-10-20</p>
                        <p className="title">【これが観光の未来形】おでかけアプリSassyが大リニューアル！おでかけDJセレクト機能を新リリース！</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://prtimes.jp/main/html/rd/p/000000010.000051474.html" target="_blank">
                        <p className="date">2020-09-30</p>
                        <p className="title">【東京マイクロツーリズム】直感型おでかけアプリSassyに、友だち共有機能が追加！</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://news.j-wave.co.jp/2020/09/post-6733.html" target="_blank">
                        <p className="date">2020-09-17</p>
                        <p className="title">J-WAVEラジオ「TOKYO MORNING RADIO（ナビゲーター：別所哲也さん）」の『MORNING INSIGHT』でSassyが紹介されました</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://www.j-wave.co.jp/original/colorswonder/entry/200719.html" target="_blank">
                        <p className="date">2020-07-19</p>
                        <p className="title">J-WAVEラジオ「CHINTAI COLORS OF WONDER」の『新しい旅を見つけよう！』のテーマでSassyが紹介されました</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://prtimes.jp/main/html/rd/p/000000008.000051474.html" target="_blank">
                        <p className="date">2020-06-30</p>
                        <p className="title">【マイクロツーリズムの新定番】１分でお出かけプランが完成！お出かけ・旅行計画アプリ「Sassy」のプラン機能がリニューアル</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://prtimes.jp/main/html/rd/p/000000007.000051474.html" target="_blank">
                        <p className="date">2020-05-31</p>
                        <p className="title">【テイクアウトの新しい形】飲食店応援プロジェクト「テイクアウトSassy」の事前登録スタート！１分で飲食店登録完了＆完全無料！</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://prtimes.jp/main/html/rd/p/000000004.000051474.html" target="_blank">
                        <p className="date">2020-04-25</p>
                        <p className="title">【#エアお出かけ】新感覚のお出かけ/旅行計画アプリ「Sassy （サッシー）」のAndroid版がリリース！（iOS版リニューアルも同時実施！）</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://prtimes.jp/main/html/rd/p/000000002.000051474.html" target="_blank">
                        <p className="date">2020-03-30</p>
                        <p className="title">【#エアお出かけ】Sassyユーザーの「行きたい場所ランキングin東京」発表（2020年3月）</p>
                    </a>
                </div>
                <div className="contents">
                    <a href="https://prtimes.jp/main/html/rd/p/000000001.000051474.html" target="_blank">
                        <p className="date">2020-02-22</p>
                        <p className="title">【新感覚】お出かけ/旅行の計画アプリ「Sassy （サッシー）」のiOS版が待望のリリース！</p>
                    </a>
                </div>
            </section>
            <section className="overflow-app-download">
                <div className="contents-inner">
                    <div className="feature-row">
                        <div className="bg-card card-left">
                            <img src="../images/feature-images/girls.jpg" alt="Sassyを使って友だちと出かけよう" className="screen-shot" />
                        </div>
                        <div className="feature-contents">
                            <h3>さあ、外に繰り出そう。</h3>
                            <img src="../images/logo/app-logo.png" alt="Sassyアプリロゴ" className="app-logo" />
                            <div className="app-download-container">
                                <a href="https://itunes.apple.com/jp/app/id1496112424?mt=8" target="_blank" onclick="gtag('event', 'click', {'event_category':'link','event_label':'itunes.apple.com/jp/app/id1496112424?mt=8 in_sassy_index bottom','value':'1'});"><img src="../images/appstore.svg" alt="AppStoreでSassyをインストールする" /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob" target="_blank" onclick="gtag('event', 'click', {'event_category':'link','event_label':'play.google.com/store/apps/details?id=com.relyontrip.sassy in_sassy_index bottom','value':'1'});"><img src="../images/playstore.svg" alt="GooglePlayでSassyをインストールする" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="overflow-app-download-sp">
                <div className="contents-inner">
                    <div className="feature-row end">
                        <h3>さあ、</h3>
                        <h3>外に繰り出そう。</h3>
                        <div className="bg-card card-left">
                            <img src="../images/feature-images/girls-for-sp.jpg" alt="Sassyを使って友だちと出かけよう" className="screen-shot" />
                        </div>
                        <div className="feature-contents">
                            <img src="../images/logo/app-logo.png" alt="Sassyアプリロゴ" className="app-logo" />
                            <div className="app-download-container">
                                <a href="https://itunes.apple.com/jp/app/id1496112424?mt=8" target="_blank" onclick="gtag('event', 'click', {'event_category':'link','event_label':'itunes.apple.com/jp/app/id1496112424?mt=8 in_sassy_index bottom','value':'1'});"><img src="../images/appstore.svg" alt="AppStoreでSassyをインストールする" /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob" target="_blank" onclick="gtag('event', 'click', {'event_category':'link','event_label':'play.google.com/store/apps/details?id=com.relyontrip.sassy in_sassy_index bottom','value':'1'});"><img src="../images/playstore.svg" alt="GooglePlayでSassyをインストールする" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="origin">
                <h4>Sassy(サッシー)の由来</h4>
                <ul>
                    <li>心に『刺さる』スポット</li>
                    <li>地図にピンを『刺す』</li>
                    <li>旅行『冊子』が不要に</li>
                    <li>困った時に手を『差し』伸べる</li>
                </ul>
            </section>
        </main>
        
    )
}

