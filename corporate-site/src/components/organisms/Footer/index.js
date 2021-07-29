import React from 'react'
import { Link } from 'components/Router'

import styled from 'styled-components'
import Theme from '../../../theme'

const Wrapper = styled.div`
    background-color: ${Theme.colors.black};
    padding: 1.6rem;
`;

const Container = styled.div`
    padding: 2rem 0;
    max-width: 800px;
    margin: 0 auto;
`

const Title = styled.h1`
    font-size: 1.2rem;
    color: ${Theme.colors.white};
    margin-bottom: 2rem;
`

const Contents = styled.div`
    display: flex;
`

const Block = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const Element = styled.div`
    margin-bottom: 1rem;
    a {
        color: ${Theme.colors.white};
        font-size: 1rem;
        font-weight: 400;
    }
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    p {
        font-size: 0.8rem;
        color: white;
    }
    a {
        font-size: 0.8rem;
        font-weight: 400;
        color: ${Theme.colors.white};
        margin-left: 2rem;
    }
`

class Footer extends React.Component {
    render() {
            return(
                <Wrapper>
                    <Container>
                        <Title>RelyonTrip</Title>
                        <Contents>
                            <Block>
                                <Element><Link to="/">おでかけアプリ「Sassy」</Link></Element>
                                <Element><Link to="/">人生No.1飲食店SNS「Caviia」</Link></Element>
                                <Element><Link to="/">関連リンク集</Link></Element>
                            </Block>
                            <Block>
                                <Element><Link to="/">RelyonTrip</Link></Element>
                                <Element><Link to="/">お問い合わせ</Link></Element>
                                <Element><Link to="/">プライバシーポリシー</Link></Element>
                                <Element><Link to="/">利用規約</Link></Element>
                            </Block>
                        </Contents>
                        <Bottom>
                            <div>
                                <p>©RelyonTrip</p>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/sassy.trip/" target="_blank">IG</a>
                                <a href="https://twitter.com/akihito_sassy" target="_blank">TW</a>
                                <a href="https://www.facebook.com/akihito.nishimura.9" target="_blank">FB</a>
                            </div>
                        </Bottom>
                    </Container>
                </Wrapper>
            );
    }
}

export default Footer