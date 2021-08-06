import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { Link } from 'components/Router'

export const NewsSection = props => {
    return (
        <Section>
            <Wrapper>
            <h1 style={{ color: "white" }}>News</h1>
                <ItemWrapper>
                    <Item href="" target="_blank">
                        <Date>2021.05.12</Date>
                        <Summary>「Okinawa Startup Program」のデモデイが開催され、代表の西村が発表いたしましたあああああああああああああああ</Summary>
                    </Item>
                </ItemWrapper>
                <MoreButton>
                    <Link to="/news">
                        <p>News</p><p>→</p>
                    </Link>
                </MoreButton>
            </Wrapper>
        </Section>
    )
}

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


const ItemWrapper = styled.div`
    padding: 2rem 0;
    border-bottom: solid 1px ${Theme.color.grey900};
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
`
const Summary = styled.div`
    color: ${Theme.color.grey400};
    font-weight: ${Theme.weight.normal};
    letter-spacing: ${Theme.letterSpacing.mediumWide};
`
