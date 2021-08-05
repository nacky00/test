import React from 'react'
import styled from 'styled-components'

export const AppleButton = props => {
    return (
        <StoreButton width={props.width} href="https://apps.apple.com/us/app/caviia/id1546375547" target="_blank">
            <img src="/img/apple-badge.png" alt="apple storeからダウンロード" />
        </StoreButton>
    )
}

const StoreButton = styled.a.attrs(props => ({
    width: props.width || "124px",
}))`
    display: block;
    width: ${props => props.width};
    height: auto;
`