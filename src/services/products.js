const options = {mode: 'cors', method: 'GET', headers: {'Content-Type': 'application/json'}
};

export default {
    get_allProducts(){
        return fetch('https://store-api-nwh6.onrender.com/products/allProducts', options)
    },

    get_productById(Id){
        return fetch('https://store-api-nwh6.onrender.com/products/getProduct/' + Id, {method: 'GET'})
    },

    get_userCart(userId){
        return fetch('https://store-api-nwh6.onrender.com/cart/allProducts/' + userId, {method: 'GET'})
    },

    add_cartProduct(userId, cartProductInfo){
        return fetch('https://store-api-nwh6.onrender.com/cart/product',{ mode:'cors', method:'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({userId:userId, productId: cartProductInfo.productId, size:cartProductInfo.size})});
    },

    delete_productCart(userId, id){
        return fetch('https://store-api-nwh6.onrender.com/cart/product/' + userId,{ mode:'cors', method:'DELETE', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: id})});

    },
    delete_cart(){
        return fetch('https://store-api-nwh6.onrender.com//cart/allProducts/1',{ mode:'cors', method:'DELETE', headers: {'Content-Type': 'application/json'}});
    },
}