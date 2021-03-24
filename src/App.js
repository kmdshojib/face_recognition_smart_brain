import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';
import Rank from './Components/Rank';
import ImageLinkForm from './Components/ImageLinkForm';
import FaceRecogintion from './Components/FaceRecogintion';
import SignIn from './Components/signIn/signin';

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
        box: {},
        route:'signin'
      }
  }
  calulateFaceloaction =(data)=>{
     const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
     const image  = document.getElementById('inputImage');
     const width = Number(image.width);
     const height =Number(image.height);
    return{
      leftCol:clarifaiFace.left_col * width,
      topRow:clarifaiFace.top_row * height,
      rightCol:width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

displayFaceBox =(box) =>{
  console.log(box);
  this.setState({box:box})
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
        .then(response =>this.displayFaceBox( this.calulateFaceloaction(response)))
        .catch(err => console.log(err))
}
onRouteChange =(route) =>{
  this.setState({route:route})
}
  render(){
     return (
    <div className="App">
     <Particles className='paricles'
       params={paricleOption}
     />
      <Navigation onRouteChange={this.onRouteChange}/>

     {this.state.route === 'signin' 
    ?<SignIn onRouteChange ={this.onRouteChange}/>
      :<div> 
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecogintion box={this.state.box} imageUrl={this.state.imageUrl} />
    </div> 
    }
    </div>
  );
  }
 
}

export default App;
