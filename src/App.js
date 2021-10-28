import React from "react";
import './App.css';
class App extends React.Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }

  componentDidMount() {
      this.fetchData();
}


async fetchData(){
  fetch(
    "https://randomuser.me/api/?results=30")
              .then((res) => res.json())
              .then((json) => {
                  this.setState({
                    DataisLoaded: true, 
                    items: json.results});
              })
      }
      render() {
            const { DataisLoaded, items } = this.state;
            if (!DataisLoaded) return (
            <div>
                <h1>An error has occurred.</h1>
            </div>)
      
            return (
              <div className = "App">
                {
                items.map((user) => ( 
                <Card firstname={user.name.first} 
                lastname={user.name.last} 
                title={user.title} 
                imagesrc={user.picture.large}
                email={user.email}
                age={user.dob.age}
                phone={user.cell}/>
                ))
            } 
           </div>
        );
      }
}


const Card = ({firstname, lastname, title, imagesrc, email, age, phone}) => {
           return(
              <div className="user-card">
               <div><img className="user-image" src={imagesrc} /></div>
               <h2 className="name">{title} {firstname} {lastname}</h2>
               <div className="user-details">
                 <div>{email}</div>
                 <div>Age: {age}</div>
                 <div>Phone: {phone}</div>
               </div>
             </div>
           )
          
}
 
export default App;