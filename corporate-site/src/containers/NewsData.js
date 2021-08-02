import React from "react";
import { newsData } from "../data";

export const NewsData = () => {
    return (
        <div>
            {newsData.map((body,key) => {
                return(
                    <div key={key}>
                        { body.title }
                    </div>
                )
            })}
        </div>
    )
}