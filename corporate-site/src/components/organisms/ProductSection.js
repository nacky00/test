import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { AppleButton } from 'components/atoms/AppleButton'
import { GooglePlayButton } from 'components/atoms/GooglePlayButton'

export const ProductSection = props => {
    return (
        <Section>
            <Wrapper>
            <h1>Product</h1>
                <Item style={{ marginBottom: "2rem" }}>
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
            </Wrapper>
        </Section>
    )
}

const StoreButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    img {
        margin-bottom: 1rem;
    }
`

const Section = styled.section`
    background-color: ${Theme.color.white};
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 800px;
    padding: 3rem 0;
`