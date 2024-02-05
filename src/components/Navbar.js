import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
                <div className="container-fluid">
                {/* eslint-disable-next-line */}
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                 {/* eslint-disable-next-line */}
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                 {/* eslint-disable-next-line */}
                                <a className="nav-link mx-3" href="#">About</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input mx-1" onClick={props.toggleTheme} type="checkbox" role="switch"
                                   id="flexSwitchCheckChecked"/>
                            <label className={`form-check-label mx-3 text-${props.theme==='light'?'dark':'light'}`}
                                   htmlFor="flexSwitchCheckDefault">{props.theme==='light'?'Dark':'Light'}</label>

                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 mx-1" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,

}

Navbar.defaultProps = {
    title: 'Set title here'
};
