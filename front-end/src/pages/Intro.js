import { useNavigate } from 'react-router-dom'
import { create } from 'zustand'

import './../static/css/Intro.css'

import LoginGoogle from './../static/img/login_google.svg'
import LoginKakao from './../static/img/login_kakao.svg'
import LoginEmail from './../static/img/login_email.svg'

const useStore = create((set) => ({
  loginType: "",
  setLoginType: (val) => { set({ loginType: val }) }

}))


const Intro = () => {
  const { loginType, setLoginType } = useStore();
  let navigete = useNavigate();

  if (loginType === "") {
    return (
      <>
        <IntroPage></IntroPage>
      </>
    );
  } else if (loginType === "G") {
    return (
      <>
        <div>Google Login</div>
      </>
    )

  } else if (loginType === "K") {
    return (
      <>
        <div>Kakao Login</div>
      </>
    )
  } else if (loginType === "E") {
    return (
      <>
        <div>Email Login</div>
        <button onClick={()=>{navigete('/home')}}></button>
      </>
    )
  }


};

const IntroPage = () => {
  const { setLoginType } = useStore();

  return (
    <div>
      <div className='logo-text'>LinkIN</div>
      <div className='btn-container'>
        <div className="method-control google" onTouchEnd={() => { setLoginType("G") }}>
          <img src={LoginGoogle}></img>
        </div>
        <div className="method-control kakao" onTouchEnd={() => { setLoginType("K") }}>
          <img src={LoginKakao}></img>
        </div>
        <div className="method-control email" onClick={() => { setLoginType("E") }}>
          <img src={LoginEmail}></img>
        </div>
      </div>
    </div>
  )
}



export default Intro;