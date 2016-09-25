var startDiv = document.getElementById("start-div");

// 1.) React.createClass()
// 2.) React.createElement() ---> <MyElement />
// 3.) ReactDOM.render()

var Greeter = React.createClass({
    getGreeting: function(who) {

        if (who === "Texas Ranger") {
            who = "Chuck Norris";
        }
        return "Hallo " + who;
    },
    render: function() {
        // return React.createElement("p", { className: "greeter-component" }, this.getGreeting(this.props.greet));

        // ATTENTION !!! JSX ahead !!!
        return (<p className="greeter-component">{this.getGreeting(this.props.greet)}</p>);

        //                                   an dieser Stelle rendern:  return dynamischerInhalt;
        //                                                           |
        // <p>Statischer Text oder <span>Child-Elemente</span>, oder {dynamischerInhalt}</p>
    }
});

ReactDOM.render(
    (<div>
        <Greeter greet="Welt" />
        <Greeter greet="Texas Ranger" />
    </div>),
    startDiv
);

/*

JSX ist nicht an React gebunden und kann auch mit anderen Libraries verwendet werden die JSX unterstützen.
Beispiele: 
    Deku: https://github.com/anthonyshort/deku
    Preact: https://preactjs.com/
Auch das Babel-React-Preset kann einfach für andere DOMs bzw. Virtual-DOMs konfiguriert werden:
    https://babeljs.io/docs/plugins/transform-react-jsx/

*/