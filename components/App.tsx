import type { NextComponentType } from 'next'
import styled from 'styled-components';
import SignatureHeader from './molecules/SignatureHeader';

const App: NextComponentType = () => {
    const elemArr = [
        {title: "SupBitch", subtitle: "Lol"},
        {title: "Hari", subtitle: "Lol"},
        {title: "SupBitch", subtitle: "FUCKOOFFFFF"},
        {title: "FUCKOOFFFFF", subtitle: "Lol"},
        {title: "ANUSHSSAAAA", subtitle: "Lol"},
    ]

    const allElements = elemArr.map(item => {
        return <SignatureHeader title={item.title} subtitle={item.subtitle} center="" rtl={true}/>
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
