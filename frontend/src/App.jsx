import {Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/auth/login/Login"
import SignUp from "./pages/auth/signup/SignUp"
import Sidebar from "./components/common/SideBar"
import RightPanel from "./components/common/RightPanel"
import NotificationPage from "./pages/notifications/NotificationPage"
import ProfilePage from "./pages/profile/Profilepage"


function App() {

  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/notifications' element={<NotificationPage/>}/>
          <Route path='/profile/:username' element={<ProfilePage/>}/>

      </Routes>
      <RightPanel/>
    </div>
  )
}

export default App
