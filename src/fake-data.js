// import all the Photos from Asset Account

import jacket_arise from './assets/aries-x-fila-flag-logo.jpg';
import plumifero from './assets/Plumifero_negro.jpeg';
import filaShirt from './assets/aries-x-fila-bull.jpg';
import airforce from './assets/airforce.jpeg';

//Create the fake Data, with 6 is enough

export const products = [
    {
    id: '1',
    name: 'Fila x Aries Arise Flag Logo Jacket',
    price: '330',
    description: 'La marca iconica Fila colabora con la marca de diseño aries arise para dar lugar a este piezon iconico del street wear',
    imageUrl: jacket_arise,
    averageRating: '5.0',
    sizes: [
        'XS',
        'S',
        'M',
        'XL'
    ],
    discount:{
        haveDiscount: true,
        discount: '60'
    }
    },
    {
        id: '2',
        name: 'Zara puffer black',
        price: '380',
        description: 'Si el fast fashion es lo tuyo, este plumas debes adquirirlo ya, antes de venderlo por vinted dos meses despues porque han sacado otro tejido',
        imageUrl: plumifero,
        averageRating: '3.0',
        sizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        discount:{
            haveDiscount: false,
            discount: '0'
        } 
    },
    {
        id: '3',
        name: 'Fila x Aries Arise Flag Logo LongSleeve',
        price: '180',
        description: 'La marca iconica Fila colabora con la marca de diseño aries arise para dar lugar a este piezon iconico del street wear',
        imageUrl: filaShirt,
        averageRating: '5.0',
        sizes: [
            'XS',
            'XL'
        ],
        discount:{
            haveDiscount: true,
            discount: '40'
        } 
    },
    {
        id: '4',
        name: 'Air force 1',
        price: '140',
        description: 'Nada se puede decir que no se sepa ya de un clasico del mundo de los sneaker',
        imageUrl: airforce,
        averageRating: '5.0',
        sizes: [
            '39',
            '44'
        ],
        discount:{
            haveDiscount: false,
            discount: '40'
        }   
    }
]