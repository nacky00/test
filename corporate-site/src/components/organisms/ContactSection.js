import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'

export const ContactSection = props => {
    return (
        <Section>
            <Wrapper>
                    <Title>Contact</Title>
                    <Button href="" target="_blank">お問い合わせはこちら</Button>
            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    background-color: ${Theme.color.goldDark};
    padding: 3rem 0;
`

const Wrapper = styled.div`
    ${NormalWrapperStyle};
`

const Title = styled.div`
    font-size: ${Theme.font.xlarge};
    font-weight: ${Theme.weight.bold};
    color: ${Theme.color.grey400};
    margin-bottom: 2rem;
`

const Button = styled.button`
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid ${Theme.color.grey700};
    padding: 2rem 6rem;
    border-radius: 8px;
    font-size: ${Theme.font.large};
    font-weight: ${Theme.weight.bold};
    color: ${Theme.color.grey400};
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`