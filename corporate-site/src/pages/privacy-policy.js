import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { FullPageSectionStyle  } from 'components/atoms/Section/style'

export default function PricavyPolicy() {
    return (
        <Section>
            <Wrapper>

            </Wrapper>
        </Section>
        )
}

const Section = styled.section`
    ${FullPageSectionStyle};
`

const Wrapper = styled.div`
    ${NormalWrapperStyle};
`