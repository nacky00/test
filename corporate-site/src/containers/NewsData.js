import React from "react";
import { newsData } from "../data";

export const NewsData = () => {
    return (
        <div>
            {newsData.map((body,key) => {
                return(
                    <div key={key}>
                        <p>{body.date}</p>
                        <p><a href={body.url} target="_blank">{body.title}</a></p>
                    </div>
                )
            })}
        </div>
    )
}