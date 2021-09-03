import React from 'react'
import styled from 'styled-components'

export const AppleButton = props => {
    return (
        <StoreButton width={props.width} href={props.href} target="_blank">
            <img src="/img/apple-badge.png" alt="apple storeからダウンロード" />
        </StoreButton>
    )
}

const StoreButton = styled.a.attrs(props => ({
    href: props.href,
    width: props.width || "124px",
    marginRight: props.marginRight || "1rem"
}))`
    display: block;
    width: ${props => props.width};
    height: auto;
    margin-right: ${props => props.marginRight};
`