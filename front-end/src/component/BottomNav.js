import bottomHome from "./../static/img/bottom_home.png"
import bottomList from "./../static/img/bottom_list.png"
import bottomAdd from "./../static/img/bottom_add.png"
import bottomCal from "./../static/img/bottom_cal.png"
import bottomMy from "./../static/img/bottom_my.png"

import { useNavigate } from 'react-router-dom'
import { create } from 'zustand'

const useStore = create((set)=>({
    activeNav : 1,
    setActiveNav : (val)=>{ set({activeNav : val}) }

}))

const BottomNav = () => {
    let navigete = useNavigate();
    
    const {activeNav, setActiveNav} = useStore();

    return (
        <nav className="wrapper">   {/* 하단 네비게이션 최상위 태그 */}
            <div onClick={()=>{ setActiveNav(1); navigete('/home'); }}>
                <img src={bottomHome} alt="Home" className={activeNav === 1 ? "bottom-icon active" : "bottom-icon"}></img>
            </div>      {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
            <div onClick={()=>{ setActiveNav(2); navigete('/list')}}>
                <img src={bottomList} alt="List" className={activeNav === 2 ? "bottom-icon active" : "bottom-icon"}></img>
            </div>
            <div onClick={()=>{ setActiveNav(3); navigete('/add')}}>
                <img src={bottomAdd} alt="Add" className={activeNav === 3 ? "bottom-icon active" : "bottom-icon"}></img>
            </div>
            <div onClick={()=>{ setActiveNav(4); navigete('/schedule')}}>
                <img src={bottomCal} alt="Home" className={activeNav === 4 ? "bottom-icon active" : "bottom-icon"}></img>
            </div>
            <div onClick={()=>{ setActiveNav(5); navigete('/mypage')}}>
                <img src={bottomMy} alt="My" className={activeNav === 5 ? "bottom-icon active" : "bottom-icon"}></img>
            </div>
        </nav>
    )
}

export default BottomNav