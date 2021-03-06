import React, { Component } from 'react';
import { database } from '../firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      x: '',
      y: ''
    };
    //bind
    this.handleChange = this.handleChange.bind(this)
    this.handlesubmit = this.handlesubmit.bind(this)
  }



  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }

  handlesubmit(e) {
    e.preventDefault()
    const note = {
      title: this.state.title,
      body: this.state.body
    }
    database.push(note)
    this.setState({
      title: '',
      body: ''
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 mx-auto mt-5">
            <form onSubmit={this.handlesubmit}>
              <div className="form-group">
                <input onChange={this.handleChange} value={this.state.title} type="text" name="title" className="form-control no-border" placeholder="Enter Title" required />
              </div>
              <div className="form-group">
                <textarea onChange={this.handleChange} value={this.state.body} type="text" name="body" className="form-control no-border" placeholder="Enter Title" required />
              </div>
              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
            </form>
            {this.state.x}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
