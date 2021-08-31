import React from 'react'
import styled from 'styled-components'
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { FullPageSectionStyle  } from 'components/atoms/Section/style'
import { PageMainTitle, ElementHeader, ElementSubHeader, NormalText, NormalLi, NormalOl, NormalUl } from 'components/atoms/Text/style'
import { NormalContainer, SubContainer } from 'components/atoms/Container/style'

export default function PricavyPolicy() {
    return (
        <Section>
            <Wrapper>
                <Title>プライバシーポリシー</Title>
                <Text>株式会社RelyonTrip（以下「当社」といいます。）は、当社の提供するサービス（以下「本サービス」といいます。）における、お客様についての個人情報を含む利用者情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。</Text>
                <FirstContainer>
                    <Header>第1条(収集する利用者情報及び収集方法)</Header>
                    <Text>本ポリシーにおいて、「利用者情報」とは、お客様の識別に係る情報、通信サービス上の行動履歴、その他のお客様またはお客様の端末に関連して生成または蓄積された情報であって、本ポリシーに基づき当社が収集するものを意味するものとします。本サービスにおいて当社が収集する利用者情報は、その収集方法に応じて、以下のようなものとなります。</Text>
                    <SecondContainer>
                        <SecondHeader>(1) お客様からご提供いただく情報</SecondHeader>
                        <Text>本サービスを利用するために、または本サービスの利用を通じてお客様からご提供いただく情報は以下のとおりです。</Text>
                        <Ol>
                            <Li>ニックネーム、生年月日、性別等プロフィールに関する情報</Li>
                            <Li>メールアドレス等連絡先に関する情報</Li>
                            <Li>お客様の肖像を含む静止画情報</Li>
                            <Li>入力フォームその他当社が定める方法を通じてお客様が入力または送信する情報</Li>
                        </Ol>
                    </SecondContainer>
                    <SecondContainer>
                        <SecondHeader>(2) お客様が本サービスの利用において、他のサービスと連携を許可することにより、当該他のサービスからご提供いただく情報</SecondHeader>
                        <Text>お客様が、本サービスを利用するにあたり、ソーシャルネットワーキングサービス等の他のサービスとの連携を許可した場合には、その許可の際にご同意いただいた内容に基づき、以下の情報を当該外部サービスから収集します。</Text>
                        <Ul>
                            <Li>当該外部サービスでお客様が利用するID</Li>
                            <Li>その他当該外部サービスのプライバシー設定によりお客様が連携先に開示を認めた情報</Li>
                        </Ul>
                    </SecondContainer>
                    <SecondContainer>
                        <SecondHeader>(3) お客様が本サービスを利用するにあたって、当社が収集する情報</SecondHeader>
                        <Text>当社は、本サービスへのアクセス状況やそのご利用方法に関する情報を収集することがあります。これには以下の情報が含まれます。</Text>
                        <Ol>
                            <Li>リファラ</Li>
                            <Li>IPアドレス</Li>
                            <Li>サーバーアクセスログに関する情報</Li>
                            <Li>Cookie、ADID、IDFAその他の識別子</Li>
                        </Ol>
                    </SecondContainer>
                    <SecondContainer>
                        <SecondHeader>(4) お客様が本サービスを利用するにあたって、当社がお客様の個別同意に基づいて収集する情報</SecondHeader>
                        <Text>当社は、お客様が3-1に定める方法により個別に同意した場合、当社は以下の情報を利用中の端末から収集します。</Text>
                        <Ol>
                            <Li>位置情報</Li>
                        </Ol>
                    </SecondContainer>
                </FirstContainer>
                <FirstContainer>
                    <Header>第2条(利用目的)</Header>
                    <Text>本サービスのサービス提供にかかわる利用者情報の具体的な利用目的は以下のとおりです。</Text>
                    <Ol>
                        <Li>本サービスに関する登録の受付、本人確認、お客様の認証、お客様設定の記録、利用料金の決済計算等本サービスの提供、維持、保護及び改善のため</Li>
                        <Li>お客様のトラフィック測定及び行動測定のため</Li>
                        <Li>広告の配信、表示及び効果測定のため</Li>
                        <Li>本サービスに関するご案内、お問い合わせ等への対応のため</Li>
                        <Li>本サービスに関する当社の規約、ポリシー等（以下「規約等」といいます。）に違反する行為に対する対応のため</Li>
                        <Li>本サービスに関する規約等の変更などを通知するため</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第3条(通知・公表または同意取得の方法、利用中止要請の方法)</Header>
                    <SecondContainer>
                        <Text>3-1 以下の利用者情報については、その収集が行われる前にお客様の同意を得るものとします。</Text>
                        <Ol>
                            <Li>位置情報</Li>
                            <Li>端末情報</Li>
                        </Ol>
                    </SecondContainer>
                    <SecondContainer>
                        <Text>3-2 お客様は、本サービスの所定の設定を行うことにより、利用者情報の全部または一部についてその収集又は利用の停止を求めることができ、この場合、当社は速やかに、当社の定めるところに従い、その利用を停止します。なお利用者情報の項目によっては、その収集または利用が本サービスの前提となるため、当社所定の方法により本サービスを退会した場合に限り、当社はその収集又は利用を停止します。</Text>
                    </SecondContainer>
                </FirstContainer>
                <FirstContainer>
                    <Header>第4条(第三者提供)</Header>
                    <Text>当社は、利用者情報のうち、個人情報については、あらかじめお客様の同意を得ないで、第三者（日本国外にある者を含みます。）に提供しません。但し、次に掲げる必要があり第三者（日本国外にある者を含みます。）に提供する場合はこの限りではありません。</Text>
                    <Ol>
                        <Li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</Li>
                        <Li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</Li>
                        <Li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合</Li>
                        <Li>その他、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の法令で認められる場合</Li>
                    </Ol>
                </FirstContainer>
                <FirstContainer>
                    <Header>第5条(個人情報の開示)</Header>
                    <Text>当社は、お客様から、個人情報保護法の定めに基づき個人情報の開示を求められたときは、お客様ご本人からのご請求であることを確認の上で、お客様に対し、遅滞なく開示を行います（当該個人情報が存在しないときにはその旨を通知いたします。）。但し、個人情報保護法その他の法令により、当社が開示の義務を負わない場合は、この限りではありません。なお、個人情報の開示につきましては、手数料（1件あたり1,000円）を頂戴しておりますので、あらかじめ御了承ください。</Text>
                </FirstContainer>
                <FirstContainer>
                    <Header>第6条(個人情報の訂正及び利用停止等)</Header>
                    <SecondContainer>
                        <Text>6-1 当社は、お客様から、(1)個人情報が真実でないという理由によって個人情報保護法の定めに基づきその内容の訂正を求められた場合、及び(2)あらかじめ公表された利用目的の範囲を超えて取扱われているという理由または偽りその他不正の手段により収集されたものであるという理由により、個人情報保護法の定めに基づきその利用の停止を求められた場合には、お客様ご本人からのご請求であることを確認の上で遅滞なく必要な調査を行い、その結果に基づき、個人情報の内容の訂正または利用停止を行い、その旨をお客様に通知します。なお、訂正または利用停止を行わない旨の決定をしたときは、お客様に対しその旨を通知いたします。</Text>
                    </SecondContainer>
                    <SecondContainer>
                        <Text>6-2 当社は、お客様から、お客様の個人情報について消去を求められた場合、当社が当該請求に応じる必要があると判断した場合は、お客様ご本人からのご請求であることを確認の上で、個人情報の消去を行い、その旨をお客様に通知します。</Text>
                    </SecondContainer>
                    <SecondContainer>
                        <Text>6-3 個人情報保護法その他の法令により、当社が訂正等または利用停止等の義務を負わない場合は、6-1および6-2の規定は適用されません。</Text>
                    </SecondContainer>
                </FirstContainer>
                <FirstContainer>
                    <Header>第7条(お問い合わせ窓口)</Header>
                    <Text>ご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関するお問い合わせは、下記の窓口までお願いいたします。 </Text>
                    <Text>住所：東京都国分寺市戸倉3丁目30番11号</Text>
                    <Text>会社名：株式会社RelyonTrip</Text>
                    <Text>個人情報取扱責任者：西村 彰仁</Text>
                    <Text>連絡先：sassy_support@relyontrip.com</Text>
                    </FirstContainer>
                <FirstContainer>
                    <Header>第8条(プライバシーポリシーの変更手続)</Header>
                    <Text>当社は、必要に応じて、本ポリシーを変更します。但し、法令上お客様の同意が必要となるような本ポリシーの変更を行う場合、変更後の本ポリシーは、当社所定の方法で変更に同意したお客様に対してのみ適用されるものとします。なお、当社は、本ポリシーを変更する場合には、変更後の本ポリシーの施行時期及び内容を当社のアプリ上での表示その他の適切な方法により周知し、またはお客様に通知します。</Text>
                    </FirstContainer>
                <FirstContainer>
                    <Text>2020年2月10日 制定</Text>
                </FirstContainer>
            </Wrapper>
        </Section>
        )
}

const Section = styled.section`
    ${FullPageSectionStyle};
`

const Wrapper = styled.div`
    ${NormalWrapperStyle};
`

const FirstContainer = styled.div`
    ${NormalContainer};
`

const SecondContainer = styled.div`
    ${SubContainer};
`

const Title = styled.div`
    ${PageMainTitle};
`

const Header = styled.div`
    ${ElementHeader};
`

const SecondHeader = styled.div`
    ${ElementSubHeader};
`

const Text = styled.p`
    ${NormalText};
`

const Li = styled.li`
    ${NormalLi};
`
const Ol = styled.ol`
    ${NormalOl};
`

const Ul = styled.ul`
    ${NormalUl};
`

