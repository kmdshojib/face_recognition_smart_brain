import React from 'react';
import './style/imageForm.css'


const ImageLinkForm =({onInputChange,onButtonSubmit})=>{
    return(
        <div className='ma4 mt0'>
            <p className="f3">
                {'Copy and paste a image Link .! This Magic Brain will detect faces in your picture! '}
            </p>
           <div className='center '>
                <div className='form center pa4 br3 shadow-3 ' >
                    
                    <input 
                    type="text" 
                    className="w-90 f4 pa2 center" 
                    placeHolder="Enter a Image Url"
                    style={{marginBottom:'1px'}} 
                    onChange={(onInputChange)}

                    />

                    <div className="w-80">
                    <button 
                    type="submit" 
                    className="w-30 grow f5 link ph3 pv2 dib white bg-light-purple btn"
                    onClick={(onButtonSubmit)}
                    >Detect</button>
                    </div>
                </div>

              
            </div>
        </div>
    )
}
export default ImageLinkForm;
 