import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { WideWrapperStyle } from 'components/atoms/Wrapper/wideStyle'

export const CompanySection = props => {
    return (
        <Section>
            <Wrapper>
            <h1>Mission</h1>
            <h1>Vision</h1>
            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    background-color: ${Theme.color.white};
`

const Wrapper = styled.div`
    ${WideWrapperStyle}
`