var data = {
    products: [
        {
            id: 1,
            name: "Pizza",
            price: 8,
            description: "A useful item to powerup nerds."
        },
        {
            id: 2,
            name: "Beer",
            price: 4,
            description: "Can't Get Enough of That Wonderful Duff. The original from Duff brewery in Duffless"
        },
        {
            id: 3,
            name: "R2D2",
            price: 1200,
            description: "Astromech droid. Useful to repair a spaceship. Makes a great breamer too."
        },
        {
            id: 666,
            name: "Unicorn",
            price: 9999.95,
            description: "The weaponized form of a Pony"
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <ShopApp products={data.products} />,
        document.getElementById("root")
    );
});