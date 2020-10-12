import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
// import Background from './components/Background/Background'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ClarifaiStub from 'clarifai'

const stub = ClarifaiStub.json();
const metadata = new grpc.Metadata();
metadata.set("authorization", "5462c8c2ace242d68d28f95aa92de699");


class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click')
    // stub.PostModelOutputs(
    //   {
    //       model_id: "aaa03c23b3724a16a56b629203edc62c",
    //       inputs: [{data: {image: {url: "https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1"}}}]
    //   },
    //   metadata,
    //   (err, response) => {
    //     if (err) {
    //         console.log("Error: " + err);
    //         return;
    //     }

    //     if (response.status.code !== 10000) {
    //         console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
    //         return;
    //     }

    //     for (const c of response.outputs[0].data.concepts) {
    //         console.log(c.name + ": " + c.value);
    //     }
    //   }
    // );
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Background /> */}
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
