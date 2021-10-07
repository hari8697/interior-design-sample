import Lottie from 'react-lottie';
import styled from 'styled-components'
import * as animationData from '../../public/lottie_json/signature_1.json'
 

const SignatureLottieAnim = ({AnimWrap}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <AnimWrap>
            <Lottie options={defaultOptions}
              isStopped={false}
              isPaused={false}/>
        </AnimWrap>
    )
}

export default SignatureLottieAnim
