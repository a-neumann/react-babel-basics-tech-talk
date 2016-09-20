class LoggingComponent extends React.Component {

    constructor(props, name) {
        super(props);

        this.name = name;
        this.logEvent("constructed");      
    }

    logEvent(eventName) {
        console.log(`${this.name} - ${eventName}`);
    }

    componentWillMount() {
        this.logEvent("componentWillMount");
    }

    componentDidMount() {
        this.logEvent("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        this.logEvent("componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.logEvent("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        this.logEvent("componentWillUpdate");
        // wer hier this.setState() benutzt stirbt in einem Feuerball
    }

    componentDidUpdate(prevProps, prevState) {
        this.logEvent("componentDidUpdate");
    }

    componentWillUnmount() {
        this.logEvent("componentWillUnmount");
    }
}

class JustInTimeText extends LoggingComponent {

    constructor(props) {
        super(props, "JustInTimer");

        this.state = {
            text: null
        };
    }

    componentDidMount() {
        this.logEvent("componentDidMount");

        setTimeout(() => {
            this.setState({
                text: this.props.text
            });
        }, this.props.time || 0);
    }

    render() {
        console.log("JustInTimer renders");
        return <CrazyDomManipulator newText={this.state.text} />;
    }
}

class CrazyDomManipulator extends LoggingComponent {

    constructor(props) {
        super(props, "CrazyDomManipulator");
    }

    componentDidUpdate() {

        if (this.props.newText) {
            // nicht zuhause nachmachen!
            var p = ReactDOM.findDOMNode(this);
            p.innerText = this.props.newText;
        }

        this.logEvent("componentDidUpdate");
    }

    render() {
        console.log("CrazyDomManipulator renders");
        return <p>Ich sehe unschuldig aus aber ich werde <code>ReactDOM.findDOMNode</code> verwenden</p>;
    }
}

ReactDOM.render(
    <JustInTimeText time={3000} text="Dieser Text wird nur zu Demonstrationszwecken mit DOM-Manipulation gesetzt." />,
    document.getElementById("root")
);