const options = {mode: 'cors', method: 'GET', headers: {'Content-Type': 'application/json'}
};

export default {
    get_allProducts(){
        return fetch('https://store-api-nwh6.onrender.com/products/allProducts', options)
    },

    get_productById(Id){
        return fetch('https://store-api-nwh6.onrender.com/products/getProduct/' + Id, {method: 'GET'})
    }
}