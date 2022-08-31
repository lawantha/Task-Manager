import React, { Component } from 'react'
import logo from '../../logo.svg';

export class Home extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Lawantha Bandara
                        <br />
                        <a className='small'>Simple Task Manager app. (Sample react js project)</a>
                        <br />
                        <hr />
                        <code>Find me on</code>
                    </p>
                    <a
                        className="App-link"
                        href="https://github.com/lawantha"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                    <a
                        className="App-link"
                        href="https://lawanthabandara.blogspot.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Blog
                    </a>
                </header>
            </div>
        )
    }
}

export default Home