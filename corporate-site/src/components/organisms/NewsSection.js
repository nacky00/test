import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { Link } from 'components/Router'

export const NewsSection = props => {
    return (
        <Section>
            <Wrapper>
                <h1 style={{ color: "white" }}>News</h1>
                <NewsItem>
                    <a href=""><p>2021.05.12</p><p>「Okinawa Startup Program」のデモデイが開催され、代表の西村が発表いたしました</p></a>
                </NewsItem>
                <NewsItem>
                    <a href=""><p>2021.05.12</p><p>「Okinawa Startup Program」のデモデイが開催され、代表の西村が発表いたしました</p></a>
                </NewsItem>
                <MoreButton>
                    <Link to="/news">
                        <p>News</p><p>→</p>
                    </Link>
                </MoreButton>
            </Wrapper>
        </Section>
    )
}

const NewsStoreButton = styled.a.attrs(props => ({
    width: props.width || "153px",
}))`
    display: block;
    width: ${props => props.width};
    height: auto;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 800px;
    padding: 3rem 0;
`

const Section = styled.section`
    background-color: ${Theme.color.black};
`

const MoreButton = styled.div`
a {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: solid 1px ${Theme.color.white};
    p {
        color: ${Theme.color.white};
    }
}`

const NewsItem = styled.div`
border-bottom: solid 1px ${Theme.color.white};
a {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
        color: ${Theme.color.white};
    }
}`