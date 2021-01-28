import React, { Component } from 'react'
import axios from 'axios'
import Meme from '../../components/Meme/Meme'
import Modal from '../../components/Modal/Modal'
import Addmeme from '../../components/AddMeme/AddMeme'

class MainPage extends Component {
  state = {
    memes: [],
    error: false,
    purchasing: false
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

  purchaseCancleHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    alert('You Continue')
  }

  render() {

    let memes = <p style={{ textAlign: 'center' }}>Something went wrong</p>
    if (!this.state.error) {
      memes = this.state.memes.map(meme => {
        return <Meme key={meme._id} title={meme.title} tags={meme.tags} image={meme.memeImage} />
      })
    }

    return (
      <div className="container-md" style={{ width: "50%", marginTop: "70px" }}>
        <section >
          {/* <Modal show={this.state.purchasing} modalClosed={this.purchaseCancleHandler}>
            <Addmeme/>
          </Modal> */}
          {memes}
        </section>
      </div>
    )
  }
}

export default MainPage