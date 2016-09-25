var startDiv = document.getElementById("start-div");

class Greeter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            greet: this.props.greet || ""
        };
    }

    getGreeting(who) {

        if (!who) {
            return null;
        }

        if (who === "Texas Ranger") {
            who = "Chuck Norris";
        }
        return `Hallo ${who}`;
    }

    clickedGreet() {
        var text = this.getGreeting(this.state.greet);
        if (text) {
            window.confirm(text);
        }
    }

    changeGreet(who) {
        this.setState({
            greet: who
        });
    }

    render() {
        return <div className="greeter-component">
            <button onClick={() => this.clickedGreet()}>greet</button>
            <input type="text" value={this.state.greet} onChange={(ev) => this.changeGreet(ev.target.value)} />
        </div>;
    }
}

ReactDOM.render(
    (<div>
        <Greeter greet="Welt" />
        <Greeter greet="Texas Ranger" />
    </div>),
    startDiv
);