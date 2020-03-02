import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../assets/json/home.json'
 
export default class LottieControl extends React.Component {
 
  render() { 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      setSpeed:2.5,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return <div>
      <Lottie options={defaultOptions}
              height={200}
              width={200}></Lottie>
    </div>
  }
}
 