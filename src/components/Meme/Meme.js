import React from 'react'

const meme = (props) => (
  // <article className="border border-secondary rounded-2 mb-4" style={{ textAlign: 'center', width: "500px" }}>
  <div className="container-sm">
    <div className="row align-items-center m-3">

      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"><small className="text-muted">{props.tags}</small></p>
          </div>
          <img src={props.image} className="card-img-bottom mx-auto" alt="..." />
        </div>
      </div>

    </div>
  </div>



)

export default meme