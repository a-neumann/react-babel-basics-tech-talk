var startDiv = document.getElementById("start-div");

// 1.) React.createClass()
// 2.) React.createElement()
// 3.) ReactDOM.render()

var DumbGreeter = React.createClass({
    render: function() {
        // children (Inhalt) --------------------
        // props (Attribute) --------------     |
        // zu renderndes Element ---      |     |
        //                         |      |     |
        return React.createElement("p", null, "Halli hallo");
    }
});

// DOM-Element ------------------------------------
// React-Elem. --                                 |
//              |                                 |
ReactDOM.render(React.createElement(DumbGreeter), startDiv);

/*

var Greeter = React.createClass({
    render: function() {
        var greetText = "Hallo " + this.props.greet;
        return React.createElement("p", { className: "greeter-component" }, greetText);
    }
});

ReactDOM.render(
    React.createElement(Greeter, { greet: "Chuck Norris" }),
    startDiv
);

*/