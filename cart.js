const cart = () => {
    let productcart = JSON.parse(localStorage.getItem('cart'));
    let productTotal = 0;
    var tbl = "";
    productcart.map((value) => {
        productTotal += value.price * value.quty;
        tbl += `
            <tr>
                <td>
                    <img src = "${value.image}" width="100px">
                </td>
                <td>${value.name}</td>
                <td>$${value.price}</td>
                <td>
                    <input type="number" ${value.quty} width="50" value="${value.quty}" min="1" onchange="liveEdit(${value.id})" id="qty_${value.id}" class="form-control w-25">
                </td>
                <td>$${value.price * value.quty}</td>
                <td>
                    <button class="btn bg-danger" onclick=delteCart(${value.id})><i class="fa-solid fa-trash-can"></i></button>
                    <button class="btn bg-primary" onclick=editCart(${value.id})><i class="fa-solid fa-pen-to-square"></i></button>
                </td>
            </tr>
        `
    })
    document.getElementById('cart').innerHTML = tbl;
    document.getElementById('total').innerHTML = `TOTAL PRICE :- $${productTotal}`;
}
cart();

const delteCart = (id) => {
    let delet = JSON.parse(localStorage.getItem('cart'));
    let deletedata = delet.filter((value) => {
        return value.id != id;
    })
    localStorage.setItem('cart', JSON.stringify(deletedata));
    cart();
}

const editCart = (id) => {
    let qty = parseInt(document.getElementById(`qty_${id}`).value);
    let allCarrt = JSON.parse(localStorage.getItem('cart'));
    let update = allCarrt.map((value) => {
        if (value.id == id) {
            value.quty = qty;
        }
        return value;
    })
    localStorage.setItem('cart', JSON.stringify(update));
    cart();
}
const liveEdit = (id) => {
    let qty = parseInt(document.getElementById(`qty_${id}`).value);
    let allCarrt = JSON.parse(localStorage.getItem('cart'));
    let update = allCarrt.map((value) => {
        if (value.id == id) {
            value.quty = qty;
        }
        return value;
    })
    localStorage.setItem('cart', JSON.stringify(update));
    cart();
}