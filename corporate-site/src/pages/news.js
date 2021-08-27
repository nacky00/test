import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { newsData } from 'data';
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style'
import { FullPageSectionStyle  } from 'components/atoms/Section/style'
import { NewsItem } from 'components/molecules/NewsItem';

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