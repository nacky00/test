import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'

export const NewsItem = props => {
    return (
        <ItemWrapper key={props.key}>
            <Item href={props.body.url} target="_blank">
                <Date>{props.body.date}</Date>
                <Summary>{props.body.title}</Summary>
            </Item>
        </ItemWrapper>
    )
}

const media = {
    tablet: "@media(max-width: 1024px)",
    mobile: "@media(max-width: 599px)"
}

const ItemWrapper = styled.div`
    padding: ${Theme.space.tiny} 0;
    border-bottom: solid 1px ${Theme.color.grey900};
    width: 100%;
`

const Item = styled.a`
    display: flex;
    flex-direction: row;
    ${media.mobile} {
        flex-direction: column;
    }
`

const Date = styled.div`
    color: ${Theme.color.grey700};
    font-weight: ${Theme.weight.normal};
    letter-spacing: ${Theme.letterSpacing.mediumWide};
    padding-right: ${Theme.space.tiny};
    flex-basis: 20%;
    ${media.mobile} {
        margin-bottom: ${Theme.space.micro};
    }
`
const Summary = styled.div`
    color: ${Theme.color.grey400};
    font-weight: ${Theme.weight.normal};
    letter-spacing: ${Theme.letterSpacing.mediumWide};
    flex-basis: 80%;
`