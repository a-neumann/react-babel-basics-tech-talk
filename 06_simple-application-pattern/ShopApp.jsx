class ShopApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cartItems: []
        };
    }

    static get defaultProps() {
        return {
            products: []
        };
    }

    addProductToCart(product, amount) {

        if (isNaN(amount)) {
            amount = 1;
        }

        if (product) {
            var existingItem = this.getCardItemByProductId(product.id);

            if (existingItem) {
                if (amount <= 0) {
                    this.removeCartItem(existingItem);
                } else {
                    this.updateCartItem(existingItem, existingItem.amount + amount);
                }
            } else if (amount > 0) {
                var newItem = {
                    amount: amount || 1,
                    product: product
                };
                this.state.cartItems.push(newItem);
                this.setState();
            }
        }
    }

    getCardItemByProductId(productId) {

        return this.state.cartItems.filter(i => i.product.id === productId)[0] || null;
    }

    updateCartItem(item, amount) {
        if (amount > 0) {
            item.amount = amount;
            this.setState();
        } else {
            this.removeCartItem(item);
        }
    }

    removeCartItem(item) {

        var itemIdx = this.state.cartItems.indexOf(item);
        if (itemIdx !== -1) {

            this.state.cartItems.splice(itemIdx, 1);
            this.setState();
        }
    }

    render() {
        
        return (<div id="app">
            <ProductList products={this.props.products} onAdd={p => this.addProductToCart(p)} />
            <ShoppingCart items={this.state.cartItems} onItemUpdate={(i, a) => this.updateCartItem(i, a)} />
        </div>);
    }
}