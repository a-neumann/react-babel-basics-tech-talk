// items
// onItemUpdate

class ShoppingCart extends React.Component {

    static get defaultProps() {
        return {
            items: []
        };
    }

    updateItem(item, amt) {

        var cb = this.props.onItemUpdate;

        if (cb && (typeof cb === "function")) {
            cb(item, amt);
        }
    }

    getTotal() {
        var total = 0;
        this.props.items.forEach(i => { total += i.product.price * i.amount });
        return total;
    }

    render() {

        var items = this.props.items || [];

        return <div className="cart-display">
            {items ? "" : "Der Warenkorb ist leer. Kauf was!"}
            <ul className="cart-items">
            {items.map(i => (
                <li className="cart-item">{i.product.name} <AmountControl amount={i.amount} min={0} max={10} onRaise={amt => this.updateItem(i, amt)} /></li>   
            ))}
            </ul>
            <p>Summe: {this.getTotal().toFixed(2)}</p>
        </div>;
    }
}