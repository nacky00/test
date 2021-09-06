import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { newsData } from 'data';
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { FullPageSectionStyle  } from 'components/atoms/Section/style'
import { PageMainTitle } from 'components/atoms/Text/style'
import { NewsItem } from 'components/molecules/NewsItem';

const outputNews = newsData.filter((output) => {
    return output.target == "all" || "company"
})


export default function News() {
    return (
        <Section>
            <Wrapper>
                <Title>お知らせ</Title>
                {outputNews.map((body,key) => {
                    return(
                        <NewsItem body={body} key={key}/>
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
const Title = styled.div`
    ${PageMainTitle};
`
