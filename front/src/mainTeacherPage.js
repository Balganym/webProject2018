import React, {Component} from 'react';
import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.jpg';
import bg3 from './images/bg3.jpg';
import bg4 from './images/bg4.jpg';
import './App.css';
class MainTeacherPage extends Component {
	constructor () {
    super();
    this.state = { editing: false, getInfo: false}
  }

  componentDidMount () {
    this.setState({ 
        changedName: this.props.files,
        // changedImg: this.props.contact.img,
        // changedPhone: this.props.contact.phone,
        // changedEmail: this.props.contact.email
    });
  }

  handleEditing (event) {
    this.setState({ 
        editing: true, 
        //changedName: this.props.contact.name,
        //chagedImg: this.props.contact.img
    });
  }

    handleEditingDone (event) {
        this.setState({ editing: false });
    
    }

    handleEditingChangeName (event) {
        var _changedName = event.target.value;
        this.setState({ 
            changedName: _changedName
        });
    }
    handleEditingChangePhone (event) {
        var _changedPhone = event.target.value;
        this.setState({ 
            changedPhone: _changedPhone
        });
    }
    handleEditingChangeImg (event) {
        var _changedImg = event.target.value;
        this.setState({ 
            changedImg: _changedImg
        });
    }

    handleSubmit(event){
        console.log(this.state.getInfo)
        this.setState({ 
            getInfo: true, 
            //changedName: this.props.contact.name,
            //chagedImg: this.props.contact.img
        });
    }
    getInfoDone(event){
        this.setState({getInfo: false})
    }
  render () {
    var files = this.props.files;

    var viewStyle = {};
    var editStyle = {};
    var contactInfo = {};

    if (this.state.editing) {
      viewStyle.display = 'none';
    } else {
      editStyle.display = 'none';
    }
    if (this.state.getInfo) {
        viewStyle.display = 'none';
    }else{

        contactInfo.display = 'none';
    }
    return (
    <div>
        <div style={viewStyle} >
        	<div className="row">
				<div className="col-4">
					<button onClick = {this.handleSubmit.bind(this)}><img className="img" src ={bg2}/>{this.state._changedName}</button>
				</div>
				
			</div>
			
            
        </div>
        
        <div style={contactInfo}>
            <h2>A1 Beginner </h2>
            <img className="rounded float-center" src={bg2} alt="contact image" height="100" width="100" />
            <div className="text">
                <h3>{this.state.changedName}</h3>
                
            </div>
            <button onClick = {this.getInfoDone.bind(this)}>OK</button>
            <button onClick={this.handleEditing.bind(this)} 
                className ="btn btn-danger">Edit</button>
            
        </div>
        <div style = {editStyle}> 
            <label>
                <div>
                    {this.state.changedName}
                </div>
                <div>
                  {this.state.changedPhone}
                </div>
            </label>
            

            <input type="text" onChange={this.handleEditingChangeName.bind(this)}
                value={this.state.changedName}/>
            
            <button onClick={this.handleEditingDone.bind(this)}> Save</button>
        </div>
    </div>
    );
	}
}
export default MainTeacherPage;