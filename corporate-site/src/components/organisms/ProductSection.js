import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
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
                    <img src="/img/thumbnail-caviia.png" />
                    <StoreButtonsContainer>
                        <AppleButton/>
                        <GooglePlayButton/>
                    </StoreButtonsContainer>
                </Item>
                <Item>
                    <img src="/img/thumbnail-sassy.png" />
                    <StoreButtonsContainer>
                        <AppleButton/>
                        <GooglePlayButton/>
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
        div:first-child {
            margin-bottom: ${Theme.space.tiny};
        }
    }
    div:first-child {
        margin-right: ${Theme.space.medium};
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