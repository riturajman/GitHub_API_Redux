import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getData, handleChange } from './actions'
import { bindActionCreators } from 'redux'

class APP extends React.Component {
  render() { 
    if(this.props.data.login === undefined){
      return (
        <div>
          <h2>GitHub API</h2>
          <form onSubmit={(e)=>{
            e.preventDefault()
            this.props.getData(this.props.input)}}>
            <input name={"input-tray"} placeholder={"Enter GitHub username"} value={this.props.input} onChange={this.props.handleChange} />
            <button>Submit</button>
          </form>
        </div>
        
      );
    } else {
      return (
        <div>
          <h2>GitHub API</h2>
          <form onSubmit={(e)=>{
            e.preventDefault()
            this.props.getData(this.props.input)}}>
            <input name={"input-tray"} placeholder={"Enter GitHub username"} value={this.props.input} onChange={this.props.handleChange} />
            <button>Submit</button>
          </form>
          <h1>Username : {this.props.data.login}</h1>
          <img alt="avatarURL" src={this.props.data.avatar_url}/>
        </div>
        )

  }
    
  }
}

const mapStateToProps = state => ({
  input: state.gitReducer.input,
  data: state.gitReducer.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData,
  handleChange
},dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(APP);