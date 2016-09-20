class AmountControl extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            amount: this.props.amount || 0
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ amount: nextProps.amount });
    }

    static get defaultProps() {

        return {
            amount: 0,
            min: -Infinity,
            max: Infinity
        };
    }

    raise(value) {

        var nextValue = this.state.amount + (value || 1);
        if (nextValue >= this.props.min && nextValue <= this.props.max) {
            this.setState({
                amount: nextValue
            });

            var cb = this.props.onRaise;
            if (cb && (typeof cb === "function")) {
                cb(nextValue);
            }
        }
    }

    onClickedDecrement(event) {

        this.raise(-1);
        event.preventDefault();
    }

    onClickedIncrement(event) {

        this.raise(1);
        event.preventDefault();
    }

    render() {

        return <div className="amount-control">
            <a href="#" onClick={e => this.onClickedDecrement(e)}>−</a>
            <span>{this.state.amount}</span>
            <a href="#" onClick={e => this.onClickedIncrement(e)}>+</a>
        </div>;
    }
}