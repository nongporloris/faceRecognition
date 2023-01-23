import './App.css';
import React from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from './components/Particles';

class App extends React.Component{

  render(){


    return(

      <div className="App">

  
        <Navigation/>

        <Logo/>

        <Rank/>

        <ImageLinkForm/>
{/*}
        <FaceRecognition/>
        */}

        <Particles className='parti' style={{zIndex:'-10'}}/>

      </div>




      );

  }


}

export default App;