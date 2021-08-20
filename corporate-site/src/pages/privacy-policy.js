import React from 'react'
import styled from 'styled-components'
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { FullPageSectionStyle  } from 'components/atoms/Section/style'
import { PageMainTitle, ElementHeader, NormalText, NormalLi, NormalOl } from 'components/atoms/Text/style'
import { NormalContainer, SubContainer } from 'components/atoms/Container/style'

export default function PricavyPolicy() {
    return (
        <Section>
            <Wrapper>
                <Title>プライバシーポリシー</Title>
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

const FirstContainer = styled.div`
    ${NormalContainer};
`

const SecondContainer = styled.div`
    ${SubContainer};
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