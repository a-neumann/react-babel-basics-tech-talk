class Collapser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsed: this.props.collapsed != false
        };
        this.textCollapsed = this.props.text;
        this.textOpened = this.props.textOpened || this.props.text;
    }

    toggle() {
        var currently = this.state.collapsed;
        this.setState({
            collapsed: !currently
        });
    }

    getToggle() {
        return <a onClick={() => this.toggle()}>{this.props.text}</a>;
    }

    render() {

        var wrapperClass = "collapser-component" + (this.state.collapsed ? " collapsed" : "");

        var text = this.state.collapsed ?
            this.textCollapsed : this.textOpened;

        return (
            <div className={wrapperClass}>
                {this.getToggle()}
                <div className="collapser-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


var coll2 = <Collapser text="zeigen">Nummer 2</Collapser>;

ReactDOM.render(
    (<div>
        <Collapser text="zeigen">Nummer <b>1</b></Collapser>
        {coll2}
        <Collapser text="zeigen" textOpened="verstecken" collapsed={false}>
            <div style={{ backgroundColor: "pink" }}>Nummer 3</div>
        </Collapser>
    </div>),
    document.getElementById("start-div")
);

/*

class MyCollapser extends Collapser {

    // in TypeScfript wäre auch das möglich:
    // static defaultProps = { text:... }
    static get defaultProps() {
        return {
            text: "zeigen",
            textOpened: "ausblenden"
        };
    }

    getToggle() {
        var text = this.state.collapsed ?
            this.textCollapsed : this.textOpened;

        return <button onClick={() => this.toggle()}>{text}</button>;
    }
}

var collapsers = [];
for(var i = 1; i <= 3; i++) {
    //  Wenn ein Array mit React Elementen gerendert wird, möchte React einen unique key
    //  Hier wird natürlich noch nichts gerendert, also an dieser Stelle noch optional
    //                           |
    collapsers.push(<MyCollapser key={i}>Inhalt {i}</MyCollapser>);
}

// hier wird ein Array von React-Elementen in einem div gerendert, 
// darum die unique keys
ReactDOM.render(
    (<div>
        {collapsers}
    </div>),
    document.getElementById("start-div")
);

*/