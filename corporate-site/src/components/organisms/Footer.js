import React from 'react'
import { Link } from 'components/Router'
import styled from 'styled-components'
import Theme from 'theme'
import { InnerSectionStyle } from 'components/atoms/Section/style';
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style';

class Footer extends React.Component {
    render() {
            return(
                <Section>
                    <Wrapper>
                        <Header><Link to="/"><img src="/img/corporate-logo.png" /></Link></Header>
                        <Contents>
                            <Block>
                                <Element><Link to="/sassy">おでかけアプリ「Sassy」</Link></Element>
                                <Element><Link to="/">人生No.1飲食店SNS「Caviia」</Link></Element>
                                <Element><Link to="/link">関連リンク集</Link></Element>
                            </Block>
                            <Block>
                                <Element><Link to="/">RelyonTrip</Link></Element>
                                <Element><a href="https://docs.google.com/forms/d/e/1FAIpQLSf0hMiTOxYSTDbsYl3uevU_f9uhFxnL4-9d2uXbQPAmSNo8zQ/viewform" target="_blank">お問い合わせ</a></Element>
                                <Element><Link to="/privacy-policy">プライバシーポリシー</Link></Element>
                                <Element><Link to="/terms">利用規約</Link></Element>
                            </Block>
                        </Contents>
                        <Bottom>
                            <div>
                                <p>©RelyonTrip</p>
                            </div>
                            <div>
                                <Icon href="https://www.instagram.com/sassy.trip/" target="_blank"><img src="/img/icon-instagram.png"/></Icon>
                                <Icon href="https://twitter.com/akihito_sassy" target="_blank"><img src="/img/icon-twitter.png"/></Icon>
                                <Icon href="https://www.facebook.com/akihito.nishimura.9" target="_blank"><img src="/img/icon-facebook.png"/></Icon>
                            </div>
                        </Bottom>
                    </Wrapper>
                </Section>
            );
    }
}

export default Footer

const Section = styled.section`
    ${InnerSectionStyle};
    background-color: ${Theme.color.black};
`;

const Wrapper = styled.div`
    ${NormalWrapperStyle};
    align-items: normal;
`

const Header = styled.div`
    img {
        width: 120px;
        height: auto;
    }
`

const Contents = styled.div`
    display: flex;
    padding-top: ${Theme.space.tiny};
    padding-bottom: ${Theme.space.tiny};
    ${Theme.mediaQuery.mobile} {
        flex-direction: column;
    }
`

const Block = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    ${Theme.mediaQuery.mobile} {
        width: 100%;
    }
`

const Element = styled.div`
    margin-bottom: ${Theme.space.micro};
    a {
        color: ${Theme.color.white};
        font-size: ${Theme.font.medium};
        font-weight: ${Theme.weight.normal};
    }
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: ${Theme.font.medium};
        color: ${Theme.color.white};
    }
`

const Icon = styled.a`
    margin-left: ${Theme.space.tiny};
    img {
        width: 32px;
        height: 32px;
    }
`