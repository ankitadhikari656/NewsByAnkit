import React, { Component } from 'react'



export default class Newsitem extends Component {
 
  render() {
      let {title,description,imageUrl,newsUrl,author,date}=this.props
    return (
      <div>
        <div className="card" style={{ width:"18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body" style={{width:"18rem;"}}>
            <h5 className="card-title" >{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"> <small className="text-muted">By {author} on {date}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">read more</a>
          </div>
        </div>
      </div>
    )
  }
}
