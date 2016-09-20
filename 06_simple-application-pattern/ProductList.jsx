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

    renderEmpty() {
        // key hinzufügen damit React nicht meckert
        return <div key="0">keine Produkte vorhanden</div>;
    }
    
    render()  {

        var prods = this.props.products;
        var productElems = prods ? prods.map(p => this.renderProduct(p)) : [this.renderEmpty];

        return (<div className="product-list">
            {productElems}
        </div>);
    }
}