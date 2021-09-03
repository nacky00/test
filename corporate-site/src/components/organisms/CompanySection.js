import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { InnerSectionStyle } from 'components/atoms/Section/style'
import { SectionHeader } from 'components/atoms/Text/style'

export const CompanySection = props => {
    return (
        <Section>
            <Wrapper>
                <Element>
                    <Header>Mission</Header>
                    <Message>人と人がもっとつながれる世界をつくる</Message>
                </Element>
                <Element>
                    <Header>Vision</Header>
                    <Message>つながりの中のわずらわしさを<br />ITで解決する</Message>
                </Element>
                <Element>
                    <Header>Company</Header>
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
                        <Body>スポット直感型アプリ「Sassy」、人生No.1飲食店SNS「Caviia」の企画・開発・運営、マイクロツーリズムの企画・コンサルティング 等</Body>
                    </Row>
                </Element>
            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    ${InnerSectionStyle}
    background-color: ${Theme.color.black};
`

const Wrapper = styled.div`
    ${NormalWrapperStyle};
`

const Header = styled.h1`
    ${SectionHeader};
    color: ${Theme.color.grey400};
    margin-bottom: ${Theme.space.micro};
`

const Message = styled.div`
    color: ${Theme.color.grey200};
    font-size: ${Theme.font.large};
    font-weight: ${Theme.weight.normal};
    letter-spacing: ${Theme.letterSpacing.mediumWide};
    text-align: center;
    br {
        display: none;
        ${Theme.mediaQuery.mobile} {
            display: inline;
        }
    }
`

const Element = styled.div`
    margin-bottom: ${Theme.space.small};
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
    padding: ${Theme.space.micro} 0;
`