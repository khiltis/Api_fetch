import React from "react";

export default class FetchRandomUser extends React.Component {
   
// loding we do
    state = {
        loading: true,
        person: null,
    }
//    component as render atleast once
    // fetch the data from api
    async componentDidMount(){
        const url ="https://api.randomuser.me/";
        const response = await fetch(url); // fetch is allowed make  to http request 
        const data = await response.json(); //json call 
        this.setState({person: data.results[0], loading: false})
        // console.log(data.results[0]);

    }
  render() {
    return (
     <div>
        {/* condition for loading  */}
        {this.state.loading || !this.state.person? (
        <div> loding... </div>
        ) : (
        <div className="main"> 
        <div className="sub-main">
            <div> 
            <label> Title:</label> {this.state.person.name.title}
            </div>
            <div className="second-input"> 
            <label> First Name:</label> {this.state.person.name.first}
            </div>
            <div className="second-input"> 
            <label> Last Name:</label> {this.state.person.name.last}
            </div>
            <div className="second-input">
            <label> Picture:</label> 
            </div>
            <div className="img">
            <img src={this.state.person.picture.large} />
            </div>
        </div>
        </div>)} 
     </div>
    );
  }
}