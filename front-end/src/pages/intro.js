import { useNavigate } from 'react-router-dom'

const Intro = () => {
    let navigete = useNavigate();
    
    return (
        <div>
            <h1>Intro Page</h1>
            <button onClick={()=>{ navigete('/home')}}>로그인</button>
        </div>
    );
};

export default Intro;