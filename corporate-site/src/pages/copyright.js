import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'
import { NarrowWrapperStyle } from 'components/atoms/Wrapper/style'
import { FullPageSectionStyle } from 'components/atoms/Section/style'
import { PageMainTitle, NormalText } from 'components/atoms/Text/style'
import { NormalContainer } from 'components/atoms/Container/style'

export default function Terms() {
    return (
        <Section>
            <Wrapper>
                <Title>掲載情報の著作権について</Title>
                <Text>
                    Sassyアプリ内の一部スポット情報は以下の著作物を改変して利用しています。
                </Text>
                <Container>
                    <Text>山形県・天童市・長井市・船方町</Text>
                    <Text>岩手県・盛岡市・奥州市・一関市</Text>
                    <Text>青森県</Text>
                    <Text>群馬県</Text>
                    <Text>石川県</Text>
                    <Text>金沢市</Text>
                    <Text>富山県</Text>
                    <Text>富山市</Text>
                    <Text>山梨県</Text>
                    <Text>静岡県</Text>
                    <Text>福井県</Text>
                    <Text>名古屋市</Text>
                    <Text>岐阜県</Text>
                    <Text>三重県</Text>
                    <Text>長野県</Text>
                    <Text>札幌市</Text>
                    <Text>仙台市</Text>
                </Container>
                <Container>
                    <Text>クリエイティブ・コモンズ・ライセンス 表示 4.0 国際</Text>
                    <Text>（<a href="https://creativecommons.org/licenses/by/4.0/deed.ja" target="_blank">https://creativecommons.org/licenses/by/4.0/deed.ja</a>）</Text>
                </Container>
            </Wrapper>
        </Section>
        
    )
}

const Section = styled.section`
    ${FullPageSectionStyle};
`
const Wrapper = styled.div`
    ${NarrowWrapperStyle};
`

const Container = styled.div`
    ${NormalContainer};
`

const Title = styled.div`
    ${PageMainTitle};
    width: 100%;
    text-align: center;
`

const Text = styled.p`
    ${NormalText};
    margin-top: 0;
    margin-bottom: ${Theme.space.nano};
`