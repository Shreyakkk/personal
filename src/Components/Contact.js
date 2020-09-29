import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      //var message = this.props.data.contactmessage;
      var image_contact= "images/"+this.props.data.image_contact;
    }
    return (
      <section id="contact">
      <img src={image_contact} width="250" height="250" alt="Scan this">
      </img>
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
               <h3>Scan To Connect With Me!</h3>
					   <h4>Contact Information</h4>
					   <p className="address">
						   {name}<br />
               {email}<br/>
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>
            </aside>
   </section>
    );
  }
}

export default Contact;
