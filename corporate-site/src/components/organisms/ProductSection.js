import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { Link } from 'components/Router'
import { AppleButton } from 'components/atoms/AppleButton'
import { GooglePlayButton } from 'components/atoms/GooglePlayButton'
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { InnerSectionStyle  } from 'components/atoms/Section/style'

export const ProductSection = props => {
    return (
        <Section>
            <Wrapper>
            <h1>Product</h1>
            <p>観光・飲食系アプリ『Sassy (サッシー)』と『Caviia (キャビア)』を開発しています。</p>
            <Container>
                <Item>
                    <Image><img src="/img/thumbnail-caviia.png" /><Link to="https://caviia.com" /></Image>
                    <StoreButtonsContainer>
                        <AppleButton href={`https://apps.apple.com/us/app/caviia/id1546375547`}/>
                        <GooglePlayButton href={`https://play.google.com/store`}/>
                    </StoreButtonsContainer>
                </Item>
                <Item>
                <Image><img src="/img/thumbnail-sassy.png" /><Link to="/sassy" /></Image>
                    <StoreButtonsContainer>
                        <AppleButton href={`https://apps.apple.com/jp/app/id1496112424`}/>
                        <GooglePlayButton href={`https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob`}/>
                    </StoreButtonsContainer>
                </Item>
            </Container>
            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    ${InnerSectionStyle};
    background-color: ${Theme.color.white};
`

const Wrapper = styled.div`
    ${NormalWrapperStyle}
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${Theme.mediaQuery.mobile} {
        flex-direction: column;
        >div:first-child {
            padding-bottom: ${Theme.space.tiny};
        }
    }
    ${Theme.mediaQuery.desktop} {
        >div:first-child {
            margin-right: ${Theme.space.medium};
        }
    }
`

const StoreButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`

const Image = styled.div`
    position: relative;
    width: 100%;
    img {
        width: 100%;
    }
    a {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`