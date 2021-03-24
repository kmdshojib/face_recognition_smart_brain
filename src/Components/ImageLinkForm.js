import React from 'react';
import './style/imageForm.css'


const ImageLinkForm =({onInputChange,onButtonSubmit})=>{
    return(
        <div className='ma4 mt0'>
            <p className="f3">
                {'This Magic Brain will detect faces in your picture!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-3 ' >
                <input type="tex" className="w-70 f4 pa2 center" onChange={(onInputChange)}/>
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                onClick={(onButtonSubmit)}>Detect</button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;
