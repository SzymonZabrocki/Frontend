import React, { Component } from 'react'
import axios from 'axios'
import Meme from '../../components/Meme/Meme'

class MainPage extends Component {
  state = {
    memes: [],
    error: false,
    purchasing: false,
    searchFor: ''
  }

  componentDidMount() {
    axios.get('http://localhost:3000/memes')
      .then(response => {
        const memes = response.data.data
        this.setState({ memes: memes })
        console.log(memes)
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  onSearchForChange = (event) => {
    this.setState({searchFor: event.target.value})
  }

  render() {
    let memes = <p style={{ textAlign: 'center' }}>Something went wrong</p>
    if (!this.state.error) {
      memes = this.state.memes.map(meme => {
        if(this.state.searchFor === '' || (meme.title).includes(this.state.searchFor) || (meme.tags).includes(this.state.searchFor)){
           return <Meme key={meme._id} title={meme.title} tags={meme.tags} image={meme.memeImage} />
        }
      })
    }

    return (
      <div className="container-md" style={{ width: "50%"}}>
        <section>
          <input className="container-md" style={{ marginLeft:"auto", height:"50px"}} placeholder="Wyszukaj mema" style={{ marginTop: "100px"}} type="text" value={this.state.searchFor} onChange={this.onSearchForChange} />
          {memes}
        </section>
      </div>
    )
  }
}

export default MainPage