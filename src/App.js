import React,{Component} from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';
import Rank from './Components/Rank';
import ImageLinkForm from './Components/ImageLinkForm';
import FaceRecogintion from './Components/FaceRecogintion';
import SignIn from './Components/signIn/signin';
import Register from './Components/Reegister/register';



const paricleOption ={
    particles:{
      number:{
        value:80,
        density:{
          enable:true,
          value_area:400
        }
      }
    }
}

const initalState ={
   input: '',
        imageUrl:'',
        box: {},
        route:'signin',
        isSgnedIn:false,
        user:{
          id:'',
          name:'',
          email:'',
          password:'',
          entries:0,
          joined: ''
        }
}

class App extends Component {
  constructor(){
    super();
      this.state ={
        input: '',
        imageUrl:'',
        box: {},
        route:'signin',
        isSgnedIn:false,
        user:{
          id:'',
          name:'',
          email:'',
          password:'',
          entries:0,
          joined: ''
        }
      }
  }

loadUser = (data)=>{
  this.setState({user:{
          id:data.id,
          name:data.name,
          email:data.email,
          password:data.password,
          entries:data.entries,
          joined: data.joined
  }})
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
        fetch('http://localhost:3000/imageUrl',{
              method:'post',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                  input:this.state.input
            })
          })
          .then(response=> response.json())
        .then(response =>{
          if(response) {
            fetch('http://localhost:3000/image',{
              method:'put',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                  id:this.state.user.id
            })
            })
           .then(response=> response.json())
           .then(count =>{
             this.setState(Object.assign(this.state.user,{entries:count}))
           })
           .catch(console.log)

          }
          this.displayFaceBox( this.calulateFaceloaction(response))
        })
        .catch(err => console.log(err))
}
onRouteChange =(route) =>{
  if(route === 'signout'){
    this.setState(initalState)
  }else if(route === 'home'){
    this.setState({isSgnedIn:true})
  }
  this.setState({route:route})
}
  render(){
    const {isSgnedIn,imageUrl,route,box} = this.state;
     return (
    <div className="App">
     <Particles className='paricles'
       params={paricleOption}
     />
      <Navigation isSgnedIn={isSgnedIn} onRouteChange={this.onRouteChange}/>

     {route === 'home' 
    
    ?<div> 
        <Logo />
        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecogintion box={box} imageUrl={imageUrl} />
    </div> 
    :(
      route === 'signin'
      ?<SignIn loadUser={this.loadUser}  onRouteChange ={this.onRouteChange}/>
      :<Register loadUser={this.loadUser} onRouteChange ={this.onRouteChange}/>
    )
    }
    </div>
  );
  }
 
}

export default App;
