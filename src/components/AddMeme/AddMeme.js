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
      <div className="card" style={{padding: "30px",
                                    backgroundColor: "lightgray",
                                    }}> 
        <h3 style={{marginBottom: "40px"}}>Dodaj mema</h3>
        <div className="form-group">
        <label>Tytuł</label>
        <input className="form-control" type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
        <label>Tagi</label>
        <input className="form-control" type="text" value={this.state.tags} onChange={(event) => this.setState({ tags: event.target.value })} />
        <label>Obrazek</label>
        <input className="form-control" type="text" value={this.state.memeImage} onChange={(event) => this.setState({ memeImage: event.target.value })} />
        <small  className="form-text text-muted">Podaj link URL do obrazka lub gifa</small>
        </div>
        <button className="btn btn-secondary" onClick={this.postDataHandler} style={{margin: "20px"}}>Dodaj</button>
      </div>
    )
  }
}
export default AddMeme