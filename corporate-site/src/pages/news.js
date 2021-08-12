import React from 'react'
import { useRouteData } from 'react-static'
import { NewsData } from "../containers/NewsData";
import styled from 'styled-components'
import Theme from 'theme'
import { newsData } from 'data';

const outputNews = newsData.filter((output) => {
    return output.target == "all"
})


export default function News() {
    return (
    <div style={{ zIndex: "999", maxWidth: "800px", margin: "0 auto" }}>
        <h1>お知らせ</h1>
        <h1>お知らせ</h1>
        <h1>お知らせ</h1>
        <NewsGrid>
            <CardsWrapper>
                {outputNews.reverse().map((body,key) => {
                    return(
                        <CardContainer key={key}>
                            <NewsCard>
                                <ImageBlock style={{ backgroundImage: `url("/img/news/20210701-01.png")` }}/>
                                <TextBlock>
                                    <Stack>
                                        <Label><span>{body.category}</span></Label>
                                        <NewsCardTitle><a href={body.url} target="_blank">{body.title}</a></NewsCardTitle>
                                    </Stack>
                                </TextBlock>
                            </NewsCard>
                        </CardContainer>
                    )
                })}
            </CardsWrapper>
        </NewsGrid>
    </div>
    )
}

const NewsGrid = styled.div`
    width: 100%;
    background-color: pink;
`;


const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CardContainer = styled.div`
    width: 50%;
    flex: 0 0 auto;
`;

const NewsCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
`;

const ImageBlock = styled.div`
    padding-top: 56.25%;
    background-position: 50%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background-size: cover;
`;

const TextBlock = styled.div`
    flex-grow: 1;
    background-color: ${Theme.color.grey400};
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
`;

const Stack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Label = styled.div`
    div {
        span {
            background-color: ${Theme.color.white};
            color: ${Theme.color.grey900};
        }
    }
`;

const NewsCardTitle = styled.h3`
    a {
        color: ${Theme.color.white};
    }
    a::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`;
