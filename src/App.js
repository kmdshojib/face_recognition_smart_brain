import React,{Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';
import Rank from './Components/Rank';
import ImageLinkForm from './Components/ImageLinkForm';
import Particles from 'react-particles-js';

const paricleOption ={
    particles:{
      number:{
        value:30,
        density:{
          enable:true,
          value_area:200
        }
      }
    }
}

class App extends Component {
  render(){
     return (
    <div className="App">
     <Particles className='paricles'
       params={paricleOption}
     />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm/>
      {/* <FaceRecogintion /> */}
    </div>
  );
  }
 
}

export default App;
