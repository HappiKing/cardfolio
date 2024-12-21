import { useNavigate } from 'react-router-dom'
import { create } from 'zustand'

import './../static/css/Intro.css'

import pageback from './../static/img/arrow_back_ios.svg'
import LoginGoogle from './../static/img/login_google.svg'
import LoginKakao from './../static/img/login_kakao.svg'
import LoginEmail from './../static/img/login_email.svg'

const useStore = create((set) => ({
  pageType: "",
  setPageType: (val) => { set({ pageType: val }) }

}))


const Intro = () => {
  const { pageType, setPageType } = useStore();
  let navigete = useNavigate();

  if (pageType === "") {
    return (
      <>
        <IntroPage></IntroPage>
      </>
    );
  } else if (pageType === "G") {
    return (
      <>
        <div className='back-btn' onClick={() => { setPageType("") }}>
          <img src={pageback}></img>
        </div>
        <div>Google Login</div>
      </>
    );
  } else if (pageType === "K") {
    return (
      <>
        <div className='back-btn' onClick={() => { setPageType("") }}>
          <img src={pageback}></img>
        </div>
        <div>Kakao Login</div>
      </>
    );
  } else if (pageType === "E") {
    return (
      <>
        <div className='back-btn' onClick={() => { setPageType("") }}>
          <img src={pageback}></img>
        </div>
        <div className='cont'>
          <div className='login-content'>
            <div className='login-contents'>
              <h1>로그인</h1>
              <div className='id-section'>
                <input type="text" autocapitalize="none" autocorrect="off" spellcheck="false" required></input>
                <label>아이디</label>
                <span></span>
              </div>
              <div className='id-section'>
                <input type="password" autocapitalize="none" autocorrect="off" required></input>
                <label>비밀번호</label>
                <span></span>
              </div>
            </div>
            <div className='login-btn'>
              <button>로그인</button>
            </div>
            <div className='login-reg-find-pw'>
              <span onClick={() =>{ setPageType("F") }}>비밀번호 찾기</span>
              <span onClick={() =>{ setPageType("R") }}>회원가입</span>
            </div>
          </div>
        </div>
      </>
    );
  } else if (pageType === "F") {
    return (
      <>
        <div className='back-btn' onClick={() => { setPageType("") }}>
          <img src={pageback}></img>
        </div>
        <div>비밀번호 찾기</div>
      </>
    )
  } else if (pageType === "R") {
    return (
      <>
        <div className='back-btn' onClick={() => { setPageType("") }}>
          <img src={pageback}></img>
        </div>
        <div>회원가입</div>
      </>
    )
  }



};

const IntroPage = () => {
  const { setPageType } = useStore();

  return (
    <div>
      <div className='logo-text'>LinkIN</div>
      <div className='btn-container'>
        <div className="method-control google" onTouchEnd={() => { setPageType("G") }}>
          <img src={LoginGoogle}></img>
        </div>
        <div className="method-control kakao" onTouchEnd={() => { setPageType("K") }}>
          <img src={LoginKakao}></img>
        </div>
        <div className="method-control email" onClick={() => { setPageType("E") }}>
          <img src={LoginEmail}></img>
        </div>
      </div>
    </div>
  )
}



export default Intro;