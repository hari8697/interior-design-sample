import styled from 'styled-components'
import SignatureLottieAnim from './SignatureLottieAnim';

const SignatureHeader = (props: any) => {
    return (
        <SignatureHeaderWrap>
            <h1>{props.title}</h1>
            <SignatureLottieAnim />
        </SignatureHeaderWrap>
    )
}


const SignatureHeaderWrap = styled.div`
    display: grid;
    place-items: center;
        /* max-width: 90vw; */
    h1 {
        margin: 0;
        font-size: 8vw;
        font-weight: 500;
    }

`

export default SignatureHeader
