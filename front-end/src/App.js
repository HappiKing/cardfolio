import './App.css';

// 페이지 라우터
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Intro from './pages/Intro.js';

import Home from "./pages/Home.js"  // Home
import List from "./pages/List.js"  // Home
import Add from "./pages/Add.js"  // Home
import Schedule from "./pages/Schedule.js"  // Home
import Mypage from "./pages/Mypage.js"  // Home

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        {/* /로 진입하면 /intro로 리디렉션 */}
        <Route path="/" element={<Navigate to="/intro" replace />} />
        <Route path="/intro" element={<Intro />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
