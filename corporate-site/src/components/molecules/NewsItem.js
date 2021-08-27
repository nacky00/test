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
    flex-basis: 20%;
`
const Summary = styled.div`
    color: ${Theme.color.grey400};
    font-weight: ${Theme.weight.normal};
    letter-spacing: ${Theme.letterSpacing.mediumWide};
    flex-basis: 100%;
`