const db ={
    products :[
        {
            id:1,
            name :'Orient electric',
            price: 100.75,
            category: 'Fans',
            rating:3,
            color:'red',
            size : 'S',
            details : {
                product :"",
                warranty : "",
                merchant:""
            },
            image:'fan',
            images :['fan-square','fan-square','fan-square']
        },
        {
            id:2,
            name :'Apple Watch 2',
            price: 500.75,
            category: 'SmartWatch',
            rating:4,
            color:'black',
            size : '',
            details : {
                product :"",
                warranty : "",
                merchant:""
            },
            image:'trunk',
            images :['trunk-square','trunk-square','trunk-square']
        },
        {
            id:3,
            name :'Apple iPhone 11',
            price: 799.75,
            category: 'Bicycle',
            rating:4,
            color:'black',
            size : '',
            details : {
                product :"",
                warranty : "",
                merchant:""
            },
            image:'bicycle-square',
            images :['bicycle-square','bicycle-square','bicycle-square']
        }
    ]
}


export default db