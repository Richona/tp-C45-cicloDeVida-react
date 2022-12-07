import React from 'react';
import Home from './components/Home.js'
import Navigation from './components/Navigation.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { gif: "" }
  }

  componentDidMount() {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=OhxK7loTLfGaFw7GjrX6MIVtHPevhRuX")
      .then(response => response.json())
      .then(data => {
        this.setState({ gif: data.data[0].images.original.url })
      })
      .catch(e => { console.log(e) })
  }
  render() {
    let contenido
    console.log(this.state.gif)
    if (this.state.gif === "") {
      contenido = <h3> cargando… </h3>
    } else {
      contenido = <img src={`${this.state.gif}`} alt="img" />
    }
    return (
      <div>
        <Navigation />
        {contenido}
        <button>Hace click aca par ver un Gif</button>
        <Home />
      </div>
    )

  }

}

export default App;
