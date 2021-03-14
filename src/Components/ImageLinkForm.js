import React from 'react';
import './style/imageForm.css'


const ImageLinkForm =()=>{
    return(
        <div className='ma4 mt0'>
            <p className="f3">
                {'This Magic Brain will detect faces in your picture!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-3 ' >
                <input type="text" className="w-70 f4 pa2 center"/>
                <button className="w-30 grow f4 link ph3  br-pill pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;