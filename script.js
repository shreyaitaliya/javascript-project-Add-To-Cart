product = [
    {
        name: "Julia Coat",
        description: "Full Set",
        price: 249,
        quty: 1,
        image: './img/img1.jpg',
        id: 2121,
    },
    {
        name: "Samboka Blouse",
        description: "Set of Lara",
        price: 39,
        quty: 1,
        image: './img/img2.jpg',
        id: 3232,
    },
    {
        name: "Maori Sweater",
        description: "Sweater Set",
        price: 99,
        quty: 1,
        image: './img/img3.jpg',
        id: 5252,
    },
    {
        name: "Birdie Sneakers",
        description: "Colourfull Sneakers",
        price: 79,
        quty: 1,
        image: './img/img4.jpg',
        id: 6565,
    },
    {
        name: "Stylish Black Blouse",
        description: "Cotton",
        price: 129,
        quty: 1,
        image: './img/img5.jpg',
        id: 7878,
    },
    {
        name: "Blue Pocket Wallet",
        description: "Lether",
        price: 17,
        quty: 1,
        image: './img/img6.jpg',
        id: 8989,
    },
    {
        name: "Mini Marine Pullover",
        description: "Sweater",
        price: 39,
        quty: 1,
        image: './img/img7.jpg',
        id: 1919,
    },
    {
        name: "Wooden Veja Grouped",
        description: "Plathfom Heels For Women",
        price: 75,
        quty: 1,
        image: './img/img8.jpg',
        id: 2828,
    },
]
const viewproduct = () => {
    let tbl = ' ';
    product.map((value) => {
        tbl += `
        <div class="col-md-3">
        <div class="card" style="width: 18rem;">
            <img src="${value.image}" class="card-img-top" alt="...">
            <div class="card-body" style="padding:30px;">
                <h3 class="card-title">${value.name}</h3>
                <p class="card-text">${value.description}</p>
                <h4>$${value.price}</h4>
                <a onclick="addcart(${value.id})" class="btn btn-primary" style="width:100%;">ADD To Cart</a>
            </div>
        </div>
    </div>
        `
    })
    document.getElementById('product').innerHTML = tbl;
}
viewproduct();

let data = [];
const addcart = (id) => {
    let cartdata = product.find((value) => {
        return value.id == id
    })
    if (localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined) {
        data.push(cartdata);
        localStorage.setItem('cart', JSON.stringify(data));
    }
    else {
        olddata = JSON.parse(localStorage.getItem('cart'));
        olddata.push(cartdata);
        localStorage.setItem('cart', JSON.stringify(olddata));
    }
}