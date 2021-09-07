import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { Link } from 'components/Router'
import { newsData } from 'data';
import { NormalWrapperStyle } from 'components/atoms/Wrapper/style';
import { InnerSectionStyle } from 'components/atoms/Section/style';
import { NewsItem } from 'components/molecules/NewsItem';
import { SectionHeader } from 'components/atoms/Text/style'

const outputNews = newsData.filter((output) => {
    return output.target == "all" || "company"
})

export const NewsSection = props => {
    return (
        <Section>
            <Wrapper>
                <Header>News</Header>
                {outputNews.slice(0,4).map((body,key) => {
                    return(
                        <NewsItem body={body} key={key}/>
                    )
                })}
                <BottomWrapper>
                    <MoreButton>
                        <Link to="/news">
                            <p>View All</p><img src="/img/icon-arrow-right.png" />
                        </Link>
                    </MoreButton>
                </BottomWrapper>
            </Wrapper>
        </Section>
    )
}

const Section = styled.section`
    ${InnerSectionStyle};
    background-color: ${Theme.color.black};
`

const Wrapper = styled.div`
    ${NormalWrapperStyle}
`

const Header = styled.h1`
    ${SectionHeader};
    color: ${Theme.color.grey400};
    margin-bottom: ${Theme.space.micro};
`

const BottomWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-top: 2rem;
`

const MoreButton = styled.div`
a {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: solid 1px ${Theme.color.white};
    p {
        color: ${Theme.color.white};
        font-family: 'Hiragino Mincho Pro';
        letter-spacing: 0.1rem;
        font-size: ${Theme.font.large};
        font-weight: ${Theme.weight.normal};
        margin-right: ${Theme.space.micro};
    }
    img {
        width: 1.2rem;
    }
}`
