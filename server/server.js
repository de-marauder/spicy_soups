require("dotenv").config()

const express = require("express")

const { onValue, ref } = require("firebase/database")

const db = require('./firebase-config').default

const app = express()

const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: "*"
}))

const port = process.env.PORT || 5000

console.log("Starting up ...")

// function MakeCORSRequest(func) {
//     return onValue((req, res) => {
//       res.set('Access-Control-Allow-Origin', '*');
//       if (req.method === 'OPTIONS') {
//         // Send response to OPTIONS requests
//         res.set('Access-Control-Allow-Methods', 'GET, POST');
//         res.set('Access-Control-Allow-Headers', 'Content-Type');
//         res.set('Access-Control-Max-Age', '3600');
//         res.status(204).send('');
//       } else {
//         return func(req, res);
//       }
//     });
//   }
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     if (req.method === 'OPTIONS') {
//         // Send response to OPTIONS requests
//         res.set('Access-Control-Allow-Methods', 'GET, POST');
//         res.set('Access-Control-Allow-Headers', 'Content-Type');
//         res.set('Access-Control-Max-Age', '3600');
//         res.status(204).send("We're good!");
//       } 
//     next();
// });

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
// console.log(stripe)
app.post('/api/luck', async (req, res) => {
    console.log(`${req.url} endpoint hit`)
    res.status(200).json(JSON.stringify({message: "success"}))
})
// app.get('/api/payment', async (req, res) => {
//     console.log(`${req.url} endpoint hit`)

//     res.send(`hello i'm running at ${req.hostname}:${port}`)
// })

app.post('/api/payment', async (req, res) => {
    console.log("before try block")
    // console.log(`res ==> ${res}`)
    // res.set("Access-Control-Allow-Origin", "https://spicy-soups.netlify.app")
    // res.set("Access-Control-Allow-heade", true)
    // res.set('Access-Control-Allow-Origin', '*');
    // if (req.method === 'OPTIONS') {
    //   // Send response to OPTIONS requests
    //   res.set('Access-Control-Allow-Methods', 'GET, POST');
    //   res.set('Access-Control-Allow-Headers', 'Content-Type');
    //   res.set('Access-Control-Max-Age', '3600');
    // }
    try {
        console.log("before onValue block ")
        // MakeCORSRequest( async (req, res)=>{
            onValue(ref(db, '/Products'), (snapshot) => {
                console.log("inside onValue block ")
                products = { ...snapshot.val() }
                console.log("inside then after onValue block before session ")
        
                // console.log(products)
                console.log("products got", products)
                console.log("items got ==> ", req.body.items)
                stripe.checkout.sessions.create({
                    line_items: req.body.items.map((item) => {
                        let orderedItem = {}
                        Object.values(products).forEach((product) => {
                            if (item.id === product.id) {
                                console.log("checking if order is in products object")
                                orderedItem = {
                                    name: product.name,
                                    price: product.price,
                                    quantity: item.quantity
                                }
                            }
        
                        })
                        console.log(orderedItem)
                        return {
                            price_data: {
                                currency: 'ngn',
                                product_data: {
                                    name: orderedItem.name,
                                },
                                unit_amount: orderedItem.price * 100
                            },
                            quantity: orderedItem.quantity
                        }
                    }),
                    shipping_options: [
                        {
                            shipping_rate_data: {
                                type:'fixed_amount',
                                fixed_amount: {
                                    amount: 1000 * 100,
                                    currency: 'ngn',
                                },
                                display_name: 'delivery',
                                delivery_estimate: {
                                    minimum: {
                                        unit: 'business_day',
                                        value: 1,
                                    },
                                    maximum: {
                                        unit: 'business_day',
                                        value: 2,
                                    }
                                }
                            }
                        }
                    ],
                    payment_method_types: ['card'],
                    mode: 'payment',
                    success_url: `${process.env.PROD_URL}/checkout/contact-info/payment/success`,
                    cancel_url: `${process.env.PROD_URL}/checkout/contact-info/payment/failed`
                }).then((session) => {
                    console.log("Response after creating session", session)
                    res.json({ url: session.url })
                    // res.json({ products: products})
                })
            })
        // })
        console.log("After onvalue")
        // console.log('response ==> ', res)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}...`)
})