import React from 'react'
import { useRouteData } from 'react-static'
import { NewsData } from "../containers/NewsData";

export default function News() {
    return (
    <div>
        <div>
        <a href="#bottom" id="top">
            Scroll to bottom!
        </a>
        </div>
        <br />
        <h1>お知らせ一覧</h1>
        <NewsData />
        <a href="#top" id="bottom">
        Scroll to top!
        </a>
    </div>
    )
}
