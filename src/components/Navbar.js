import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">News By Ankit</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Business">Buisness</Link>
                </li>
                <li className="nav-item"><Link className="nav-link active" to="/science">science</Link>
                </li>
                
                <li className="nav-item"><Link className="nav-link active"  to="/sports">sports</Link>
                </li>
                <li className="nav-item"><Link className="nav-link active"  to="/technology">technology</Link>
                </li>
                <li className="nav-item"><Link className="nav-link active" to="/health">health</Link>
                </li>

              
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
