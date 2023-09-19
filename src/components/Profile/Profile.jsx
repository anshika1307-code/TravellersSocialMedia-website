import React from 'react'
import Mainhome from '../../components/Mainhome'
import Sidebar from '../../components/Sidebar'
import Postimage from '../../components/Postimage'
import Sideprofile from "../../components/Sideprofile";

import Experence from "../../components/Experence";
const Profile = () => {
  return (
    <div className="Profile">
        <Mainhome/>

        <div className="Profile-center">
            <Sidebar/>
            <Sideprofile />
            <Postimage/>
            <Experence />
        </div>

        
    </div>
  )
}

export default Profile