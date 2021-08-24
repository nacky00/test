import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { newsData } from 'data';
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { FullPageSectionStyle  } from 'components/atoms/Section/style'

const outputNews = newsData.filter((output) => {
    return output.target == "all" || "company"
})


export default function News() {
    return (
        <Section>
            <Wrapper>
                <h1 style={{ color: "white" }}>お知らせ</h1>
                {outputNews.reverse().map((body,key) => {
                    return(
                        <ItemWrapper key={key}>
                            <Item href={body.url} target="_blank">
                                <Date>{body.date}</Date>
                                <Summary>{body.title}</Summary>
                            </Item>
                        </ItemWrapper>
                    )
                })}
            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    ${FullPageSectionStyle};
    background-color: ${Theme.color.black};
`

const Wrapper = styled.div`
    ${NormalWrapperStyle};
`

const ItemWrapper = styled.div`
    padding: 2rem 0;
    border-bottom: solid 1px ${Theme.color.grey900};
    width: 100%;
`

const Item = styled.a`
    display: flex;
    flex-direction: row;
`

const Date = styled.div`
    color: ${Theme.color.grey700};
    font-weight: ${Theme.weight.normal};
    letter-spacing: ${Theme.letterSpacing.mediumWide};
    padding-right: 2rem;
    width: 20%;
`
const Summary = styled.div`
    color: ${Theme.color.grey400};
    font-weight: ${Theme.weight.normal};
    letter-spacing: ${Theme.letterSpacing.mediumWide};
`