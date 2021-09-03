import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { InnerSectionStyle } from 'components/atoms/Section/style'
import { SectionHeader } from 'components/atoms/Text/style'

export const ContactSection = props => {
    return (
        <Section>
            <Wrapper>
                <Header>Contact</Header>
                <Button><a href="https://docs.google.com/forms/d/e/1FAIpQLSf0hMiTOxYSTDbsYl3uevU_f9uhFxnL4-9d2uXbQPAmSNo8zQ/viewform" target="_blank">お問い合わせはこちら</a></Button>
            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    ${ InnerSectionStyle };
    background-color: ${Theme.color.goldDark};
`

const Wrapper = styled.div`
    ${NormalWrapperStyle};
`

const Header = styled.h1`
    ${SectionHeader};
    color: ${Theme.color.grey400};
    margin-bottom: ${Theme.space.tiny};
`

const Button = styled.button`
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid ${Theme.color.grey700};
    border-radius: 8px;
    a {
        display: block;
        padding: ${Theme.space.tiny} ${Theme.space.medium};
        color: ${Theme.color.white};
        font-size: ${Theme.font.large};
        font-weight: ${Theme.weight.normal};
        ${Theme.mediaQuery.mobile} {
            padding: ${Theme.space.tiny} ${Theme.space.tiny};
        }
    }
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`