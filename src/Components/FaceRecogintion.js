import React from 'react';
import './style/Face.css'

const FaceRecogintion =({imageUrl, box})=>{
    return(
        <div className='center ma'>
        <div className="absolute mt2 ">
            <img id='inputImage' alt='' src={imageUrl} width="500px" height="auto" />
            {box.map(boxes =>{
              return  <div key={boxes.topRow} className="bounding-box" style={{top: boxes.topRow, right: boxes.rightCol, left: boxes.leftCol, bottom: boxes.bottomRow }}></div>
            })
            }  
        </div>  
        </div>
    )
}
export default FaceRecogintion;