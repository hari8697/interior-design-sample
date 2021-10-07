import type { NextComponentType } from 'next'
import styled from 'styled-components';
import SignatureHeader from './molecules/SignatureHeader';

const App: NextComponentType = () => {
    const elemArr = [
        {title: "Heya", subtitle: ""},
        {title: "Hello World", subtitle: ""},
        {title: "Lorem Ipsum", subtitle: ""},
        {title: "Linen", subtitle: ""},
        {title: "Smoothness", subtitle: ""},
    ]

    const allElements = elemArr.map((item, key) => {
        return <SignatureHeader title={item.title} subtitle={item.subtitle} key={key} center="" rtl={true}/>
    })

    return (
        <AppWrap>
            {allElements}
        </AppWrap>
    )
}

const AppWrap = styled.div`
    min-height: 100vh;
    display: grid;
    place-items: center;
`

export default App
