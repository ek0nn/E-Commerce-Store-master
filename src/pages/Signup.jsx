import React, { Component } from 'react'
import axios from 'axios';

export default class Signup extends Component {
    constructor(){
        super()
        this.state ={
            firstName:"",
            surName:"",
            email:"",
            password:""
        };
        this.changeFirstName= this.changeFirstName.bind(this)
        this.changeSurName= this.changeSurName.bind(this)
        this.changeEmail= this.changeEmail.bind(this)
        this.ChangePassword= this.ChangePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
 
    changeFirstName(event){
      this.setState({
        firstName:event.target.value
      })
    }
    changeSurName(event){
      this.setState({
        surName:event.target.value
      })
    }
    changeEmail(event){
      this.setState({
        email:event.target.value
      })
    }
    ChangePassword(event){
      this.setState({
        password:event.target.value
      })
    }

    onSubmit(event){
      event.preventDefault()
      const signedUp = {
        firstName: this.state.firstName,
        surName: this.state.surName,
        email: this.state.email,
        password: this.state.password

      }

      axios.post("http://localhost:3000/app/signup", signedUp)
      .then(response => console.log(response.data))

      this.setState({
        firstName: "",
        surName: "",
        email: "",
        password: ""

      })

    }
    render() {
        return (

          <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" 
                  className="img-fluid" alt="Phone"/>
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <h4 >Hello</h4>
                  <h5 className='py-2'>Please sign in below or Create an Account</h5>
                  <form onSubmit={this.onSubmit}>
      
                <div className="form-outline mb-4">
                     <label className="form-label" htmlFor="changeFirstName">First Name</label>
      
                    <input type="text" 
                    alt='ss' 
                    onChange={this.changeFirstName}
                    defaultValue={this.state.firstName}
                    id="form1Example13" className="form-control form-control-lg" />
               
                  </div>
                  
                  <div className="form-outline mb-4">
                     <label className="form-label" htmlFor="form1Example13">Surname</label>
      
                    <input type="text"
                    onChange={this.changeSurName}
                    defaultValue={this.state.surName}
                    id="form1Example13" className="form-control form-control-lg" />
                      
          
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example13">Email address</label>
      
                    <input type="email"  
                    onChange={this.changeEmail}
                    defaultValue={this.state.email}id="form1Example13" className="form-control form-control-lg" />
                    
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example23">Password</label>
      
                    <input type="password"  
                    onChange={this.ChangePassword}
                    defaultValue={this.state.password}id="form1Example23" className="form-control form-control-lg"/>
                
                  </div>
                  
        <button type="submit" className="btn btn-primary btn-lg btn-block" defaultValue = "submit">Sign up</button>
      
        
        </form>
      
                
        
              </div>
      
            </div>
            
          </div>
        </section>
  )
}
}


