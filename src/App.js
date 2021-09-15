import React from "react";

//lifecycle examples....

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  //lifecycle - mounting
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }


  // lifecycle - updating phase it will run whenever there is a update in UI
  componentDidUpdate(){
    // console.log(`updated at ${new Date()}`)
  }

  // lifecycle - unmounting 
  componentWillUnmount() {
    // console.log('I am unmounting');
    clearInterval(this.timerID);
  }

 componentDidCatch(){
   // I catch errors....
 }

  tick() {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    return (
      <div>
        This is a digital clock.
        <p>
          {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    )
  }


}

export default Clock;



// class NewForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//     }
//   }

//   handleNameChange =  (event) => {
//     console.log(event.target.value);
//     this.setState({
//       name: event.target.value,
//     })
//   }

//   handleEmailChange =  (event) => {
//     console.log(event.target.value);
//     this.setState({
//       email: event.target.value,
//     })
//   }

//   render(){
//     return (<div>
//       <form>
//         <label htmlFor="name">
//           Name:-
//           <input id="name" onChange={this.handleNameChange} value={this.state.name} />
//         </label>
//         <label htmlFor="email">
//           Email:-
//           <input id="email" onChange={this.handleEmailChange} value={this.state.email} />
//         </label>
//       </form>
//     </div>)
//   }

// }

// export default NewForm;