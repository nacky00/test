import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'

export const CompanySection = props => {
    return (
        <Section>
            <Wrapper>
                <Element style={{ marginBottom: "3rem" }}>
                    <Title>Mission</Title>
                    <Message>人と人がもっとつながれる世界をつくる</Message>
                </Element>
                <Element style={{ marginBottom: "6rem" }}>
                    <Title>Vision</Title>
                    <Message>つながりの中のわずらわしさをITで解決する</Message>
                </Element>
                <Element>
                    <Title>Company</Title>
                    <Row>
                        <Heading>会社名</Heading>
                        <Body>株式会社RelyonTrip（リリオントリップ）</Body>
                    </Row>
                    <Row>
                        <Heading>代表者</Heading>
                        <Body>代表取締役CEO 西村 彰仁</Body>
                    </Row>
                    <Row>
                        <Heading>設立日</Heading>
                        <Body>2019年（令和元年）10月1日</Body>
                    </Row>
                    <Row>
                        <Heading>所在地</Heading>
                        <Body>東京都国分寺市戸倉3丁目30番11号</Body>
                    </Row>
                    <Row>
                        <Heading>事業内容</Heading>
                        <Body>おでかけアプリ「Sassy」、人生No.1飲食店SNS「Caviia」の企画・開発・運営、マイクロツーリズムの企画・コンサルティング 等</Body>
                    </Row>
                </Element>
            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    background-color: ${Theme.color.black};
    padding: 3rem 0;
`

const Wrapper = styled.div`
    ${NormalWrapperStyle};
`

const Title = styled.div`
    font-size: ${Theme.font.xlarge};
    font-weight: ${Theme.weight.bold};
    color: ${Theme.color.grey400};
    margin-bottom: 1rem;
`

const Message = styled.div`
    color: ${Theme.color.grey200};
    font-size: ${Theme.font.large};
    font-weight: ${Theme.weight.normal};
    letter-spacing: ${Theme.letterSpacing.mediumWide};
`

const Element = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Heading = styled.div`
    font-size: ${Theme.font.medium};
    color: ${Theme.color.grey700};
    flex-basis: 140px;
`

const Body = styled.div`
    font-size: ${Theme.font.medium};
    color: ${Theme.color.grey400};
    flex-basis: auto;
    width: 100%;
`

const Row = styled.div`
    display: flex;
    width: 100%;
    padding: 0.8rem 0;
`