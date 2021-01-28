import React, { Component } from 'react'
import axios from 'axios'

class AddMeme extends Component {
  state = {
    title: '',
    tags: '',
    memeImage: ''
  }

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      tags: this.state.tags,
      memeImage: this.state.memeImage
    }

    axios.post('http://localhost:3000/memes', data)
      .then(response => {
        console.log(response);
      })
  }

  render() {
    return (
      <div>
        <h1>Dodaj Mema</h1>
        <label>Tytuł</label>
        <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
        <label>Tagi</label>
        <input type="text" value={this.state.tags} onChange={(event) => this.setState({ tags: event.target.value })} />
        <label>Obrazek</label>
        <input type="text" value={this.state.memeImage} onChange={(event) => this.setState({ memeImage: event.target.value })} />
        <button onClick={this.postDataHandler}>Dodaj</button>
      </div>
    )
  }
}
export default AddMeme