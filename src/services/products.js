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

    add_cartProduct(userId, productId){
        return fetch('https://store-api-nwh6.onrender.com/cart/product',{ mode:'cors', method:'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({userId:userId, productId: productId})});
    },

    delete_productCart(userId, productId){
        console.log(productId);
        return fetch('https://store-api-nwh6.onrender.com/cart/product/' + userId,{ method:'DELETE', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({productId: productId})});

    }
}