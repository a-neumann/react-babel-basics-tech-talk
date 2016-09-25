class ProductList extends React.Component {
    
    clickedAdd(product, event) {
        
        event.preventDefault();

        var cb = this.props.onAdd;
        if (cb && (typeof cb === "function")) {
            cb(product);
        }
    }

    renderProduct(product) {
        return (<div key={product.id} className="product-item">{product.name} ({product.price})
            <p>{product.description}</p>
            <a href="#" onClick={e => this.clickedAdd(product, e)}>add to Cart</a>
        </div>);
    }
    
    render()  {

        var prods = this.props.products;
        var productElems = prods.map(p => this.renderProduct(p));

        return (<div className="product-list">
            {productElems}
        </div>);
    }
}