'use strict';

import React from 'react'
import { Head } from 'react-static'

const Meta = (props) => (
    <Head>
        <title>{props.title ? `${props.title} - ` : ""}Relyon Trip</title>

        <meta itemProp="name" content={props.title ? props.title : "RelyonTrip"}/>
        <meta itemProp="description" content={props.description ? props.description : "株式会社RelyonTrip(リリオントリップ)のコーポレートサイトです。"}/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@akihito_sassy"/>
        <meta name="twitter:title" content={props.title ? props.title : "株式会社RelyonTrip"}/>
        <meta name="twitter:creator" content="@akihito_sassy"/>
        <meta name="twitter:description" content={props.description ? props.description : "株式会社RelyonTrip(リリオントリップ)のコーポレートサイトです。"}/>
        <meta name="twitter:image" content={props.image_url ? props.image_url : "https://relyontrip.com/img/ogp.jpg"} />

        <meta property="og:title" content={props.title ? props.title : "RelyonTrip"} />
        <meta property="og:description" content={props.description ? props.description : "株式会社RelyonTrip(リリオントリップ)のコーポレートサイトです。"} />
        <meta property="og:url" content={props.url ? props.url : "https://relyontrip.com"} />
        <meta property="og:image" content={props.image_url ? props.image_url : "https://relyontrip.com/img/ogp.jpg"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
    </Head>
)

export default Meta;