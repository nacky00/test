import React from 'react'
import { useRouteData } from 'react-static'
import { NewsData } from "../containers/NewsData";
//
import { Link } from 'components/Router'

export default function News() {
    const { news } = useRouteData()
    return (
    <div>
        <h1>NewsPage</h1>
        <div>
        <a href="#bottom" id="top">
            Scroll to bottom!
        </a>
        </div>
        <br />
        All Posts:
        <NewsData />
        {/* <ul>
        {posts.map(post => (
            <li key={post.id}>
            <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
            </li>
        ))}
        </ul> */}
        <a href="#top" id="bottom">
        Scroll to top!
        </a>
    </div>
    )
}
