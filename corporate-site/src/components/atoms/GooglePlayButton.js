import React from 'react'
import styled from 'styled-components'

export const GooglePlayButton = props => {
    return (
        <StoreButton width={props.width} href="https://apps.apple.com/us/app/caviia/id1546375547" target="_blank">
            <img src="/img/google-play-badge.png" alt="google play storeからダウンロード" />
        </StoreButton>
    )
}

const StoreButton = styled.a.attrs(props => ({
    width: props.width || "153px",
}))`
    display: block;
    width: ${props => props.width};
    height: auto;
`