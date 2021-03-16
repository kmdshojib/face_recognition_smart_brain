import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';
import Rank from './Components/Rank';
import ImageLinkForm from './Components/ImageLinkForm';
import FaceRecogintion from './Components/FaceRecogintion'

const app = new Clarifai.App({
 apiKey: '9aa93ce48b66460f85b3b39e6a0b2cb2'
});

const paricleOption ={
    particles:{
      number:{
        value:50,
        density:{
          enable:true,
          value_area:200
        }
      }
    }
}

class App extends Component {
  constructor(){
    super();
      this.state ={
        input: '',
        imageUrl:'',
      }
  }
onInputChange = (event) => {
  this.setState( {input:event.target.value});
}

onButtonSubmit =()=>{
    this.setState({imageUrl: this.state.input})
  app.models
    .predict(
        Clarifai.FACE_DETECT_MODEL,
          this.state.input)
        .then(
        function(response){
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err){

        }
      );
}
  render(){
     return (
    <div className="App">
     <Particles className='paricles'
       params={paricleOption}
     />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecogintion imageUrl={this.state.imageUrl} />
    </div>
  );
  }
 
}

export default App;
