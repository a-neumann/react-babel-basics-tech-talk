var startDiv = document.getElementById("start-div");

// 1.) React.createClass() ---> class MyElement extends React.Component { 
// 2.) React.createElement() ---> <MyElement />
// 3.) ReactDOM.render()

class Greeter extends React.Component {
    
    getGreeting(who) {
        if (who === "Texas Ranger") {
            who = "Chuck Norris";
        }
        return `Hallo ${who}`;
    }

    render() {        
        return (<p className="greeter-component">{this.getGreeting(this.props.greet)}</p>);
    }
}

ReactDOM.render(
    (<div>
        <Greeter greet="Welt" />
        <Greeter greet="Texas Ranger" />
    </div>),
    startDiv
);