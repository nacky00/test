import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { FullPageSectionStyle  } from 'components/atoms/Section/style'
import { PageMainTitle, ElementHeader, NormalText, NormalLi, NormalOl } from 'components/atoms/Text/style'

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

const Title = styled.div`
    ${PageMainTitle};
`

const Header = styled.div`
    ${ElementHeader};
`

const Text = styled.p`
    ${NormalText};
`

const Li = styled.li`
    ${NormalLi};
`
const Ol = styled.ol`
    ${NormalOl};
`