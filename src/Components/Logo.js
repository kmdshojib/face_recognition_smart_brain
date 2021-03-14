import React from 'react';
import Tilt from 'react-tilt';
import brain from './style/logo/icons8-brain-100.png'
import './style/logo.css'

const Logo =()=>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2 " options={{ max : 50}} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"><img alt='logo' style={{paddingTop:'5px'}} src={brain}/></div>
            </Tilt>
        </div>
    )
}
export default Logo;