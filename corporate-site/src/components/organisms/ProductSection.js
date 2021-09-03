import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { Link } from 'components/Router'
import { AppleButton } from 'components/atoms/AppleButton'
import { GooglePlayButton } from 'components/atoms/GooglePlayButton'
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { InnerSectionStyle  } from 'components/atoms/Section/style'
import { SectionHeader } from 'components/atoms/Text/style'

export const ProductSection = props => {
    return (
        <Section>
            <Wrapper>
            <Header>Product</Header>
            <Text>観光・飲食系アプリ『 Sassy (サッシー) 』と<br />『 Caviia (キャビア) 』を開発しています。</Text>
            <Container>
                <Item>
                <Image><img src="/img/thumbnail-sassy.png" /><Link to="/sassy" /></Image>
                    <StoreButtonsContainer>
                        <AppleButton href={`https://apps.apple.com/jp/app/id1496112424`}/>
                        <GooglePlayButton href={`https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob`}/>
                    </StoreButtonsContainer>
                </Item>
                <Item>
                    <Image><img src="/img/thumbnail-caviia.png" /><Link to="https://caviia.com" /></Image>
                    <StoreButtonsContainer>
                        <AppleButton />
                        <GooglePlayButton />
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

const Header = styled.h1`
    ${SectionHeader};
    color: ${Theme.color.grey900};
    margin-bottom: ${Theme.space.micro};
`

const Text = styled.p`
    color: ${Theme.color.gre900};
    margin: 0;
    text-align: center;
    br {
        display: none;
        ${Theme.mediaQuery.mobile} {
            display: inline;
        }
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${Theme.space.small} 0;
    ${Theme.mediaQuery.mobile} {
        flex-direction: column;
        >div:first-child {
            padding-bottom: ${Theme.space.small};
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
    ${Theme.mediaQuery.mobile} {
        width: 100%;
    }
`

const Image = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: ${Theme.space.micro};
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