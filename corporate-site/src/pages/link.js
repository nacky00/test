import React from 'react'
import { Link } from 'components/Router'
import styled from 'styled-components'
import Theme from 'theme'
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { FullPageSectionStyle } from 'components/atoms/Section/style'
import { PageMainTitle, ElementHeader, NormalText } from 'components/atoms/Text/style'
import { AppleButton } from 'components/atoms/AppleButton'
import { GooglePlayButton } from 'components/atoms/GooglePlayButton'

export default function Terms() {
    return (
        <Section>
            <Wrapper>
                <Container>
                    <Text>スポット直感型アプリ</Text>
                    <Title>Sassy(サッシー)</Title>
                    <SubContainer>
                        <AppIcon src="/img/app-logo.png" alt="Sassyアプリロゴ" />
                    </SubContainer>
                    <SubContainer>
                        <PrimaryButton><Link to="/sassy">アプリ詳細はこちら</Link></PrimaryButton>
                    </SubContainer>
                    <StoreButtonsSubContainer>
                        <AppleButton href={`https://apps.apple.com/jp/app/id1496112424`}/>
                        <GooglePlayButton href={`https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob`}/>
                    </StoreButtonsSubContainer>
                </Container>
                <Header style={{ marginBottom: "1rem" }}>関連リンク集</Header>
                <LinkCard style={{ marginBottom: "1rem" }}>
                    <a href="https://note.com/caviia/" target="_blank"/>
                    <img src="/img/circle_note.png" />
                    <div>
                        <p>編集部による公式note（ブログ）はこちら。</p>
                        <p>アプリの便利な使い方やオリジナルテーマに合わせたおすすめスポットを紹介しています。</p>
                    </div>
                </LinkCard>
                <LinkCard>
                    <a href="https://www.instagram.com/sassy.trip/" target="_blank"/>
                    <img src="/img/circle_instagram.png" />
                    <div>
                        <p>Instagramでは動画と豊富な写真付きでアプリ内のスポットを紹介しています。アプリのイメージを知りたい方はぜひご覧ください。</p>
                    </div>
                </LinkCard>
            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    ${FullPageSectionStyle};
    background-color: ${Theme.color.grey900};
`
const Wrapper = styled.div`
    ${NormalWrapperStyle};
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6rem;
`

const SubContainer = styled.div`
    margin-bottom: 2rem;
`

const StoreButtonsSubContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Title = styled.div`
    ${PageMainTitle};
`

const Header = styled.div`
    ${ElementHeader};
`

const Text = styled.p`
    font-size: ${Theme.font.medium};
    color: ${Theme.color.grey400};
    line-height: 1;
    margin: 0;
`

const PrimaryButton = styled.button`
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid ${Theme.color.grey700};
    border-radius: 8px;
    a {
        display: block;
        padding: 1rem 4rem;
        color: ${Theme.color.white};
        font-size: ${Theme.font.medium};
        font-weight: ${Theme.weight.normal};
    }
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`

const AppIcon = styled.img`
    width: 120px;
    height: auto;
`

const LinkCard = styled.div`
    background-color: #2B2D30;
    border-radius: 1rem;
    box-shadow: 0 0 0.8rem rgb(64 48 52 / 4%);
    padding: 1.5rem;
    max-width: 360px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    a {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    img {
        display: block;
        width: 3rem;
        height: auto;
    }
    div {
        margin-left: 2rem;
        p {
            margin: 0;
            line-height: 1.8;
            font-size: ${Theme.font.small};
            color: #D1D2D3;
        }
    }
`
