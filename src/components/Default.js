import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 text-center mx-auto text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>Page not fount</h2>
                        <h3>the requested URl
                            <span className="text-danger">
                                {this.props.location.pathname}
                            </span>
                            {" "}was not foung=d
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}
