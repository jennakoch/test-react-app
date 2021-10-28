function getData(){
    fetch(
    "https://randomuser.me/api/")
              .then((res) => res.json())
              .then((json) => {
                  this.setState({DataisLoaded: true, items: json.results});
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