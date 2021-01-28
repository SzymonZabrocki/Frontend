import React from 'react'

const meme = (props) => (
  <div className="container-sm"  style={{padding: "30px"}}>
    <div className="row align-items-center m-3">

      <div className="col">
        <div className="card" style={{padding: "30px",
                                      backgroundColor: "lightgray",
                                      marginTop: "30px"}}>

          <div className="card-body" style={{color: "white", backgroundColor: "#545452"}}>
            <h3 className="card-title" >{props.title}</h3>
            <p className="card-text"><small style={{color:"#d1d1c5"}} >{props.tags}</small></p>
          </div>
          <img src={props.image} className="card-img-bottom mx-auto" alt="..." />
        </div>
      </div>

    </div>
  </div>



)

export default meme