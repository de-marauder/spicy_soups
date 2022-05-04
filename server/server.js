require("dotenv").config()

const express = require("express")

const { onValue, ref } = require("firebase/database")

const db = require('./firebase-config').default

const app = express()

const cors = require('cors')

app.use(express.json())

var whitelist = ['https://spicy-soups.vercel.app', 'https://spicy-soups.netlify.app', 'http://localhost:3000']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate))

const API_KEY = "AIzaSyApCWF3FUtNj3SJVJIi4Bw-KTovG_fsRgI"
const AUTH_DOMAIN = "spicy-soups.firebaseapp.com"
const DATABASE_URL = "https://spicy-soups-default-rtdb.firebaseio.com"
const PROJECT_ID = "spicy-soups"
const STORAGE_BUCKET = "spicy-soups.appspot.com"
const MESSAGING_SENDER_ID = "97262051451"
const APP_ID = "1:97262051451:web:6aa47e725ef94bda5202de"
const MEASUREMENT_ID = "G-5J98BBBNNN"

const STRIPE_PRIVATE_KEY= "sk_test_51Kb0rsHzfGhmTNy7ZUh8du9KpqCSIOZ53bZuD8q9zMTQbi5wIS5YUsdtiyzpLtWyRuWBG7HGGubOeuYWrCZIzglj00WG8nasGK"
// const ClIENT_URL= "http://localhost:3000"
const PORT=5000
// const GITHUB_HOME="https://de-marauder.github.io/spicy_soups/"
const PROD_URL= "https://spicy-soups.netlify.app"

const port =   process.env.PORT || PORT

console.log("Starting up ...")



const stripe = require("stripe")(  STRIPE_PRIVATE_KEY)

app.get('/api/luck', async (req, res) => {
    console.log(`${req.url} endpoint hit`)
    onValue(ref(db, '/Orders'), (snap)=>{
        console.log("luck on value hit")
        var orders = {...snap.val()}
        res.status(200).json(JSON.stringify({message: "success", order: orders}))
    })
})
app.options('/api/payment') // enable pre-flight request for POST request

app.post('/api/payment', async (req, res) => {
    console.log("before try block")
    try {
        console.log("before onValue block ")
        // MakeCORSRequest( async (req, res)=>{
            onValue(ref(db, '/Products'), (snapshot) => {
                console.log("inside onValue block ")
                products = { ...snapshot.val() }
                console.log("inside then after onValue block before session ")
        
                // console.log(products)
                console.log("products got")
                console.log("items got ==> ")
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
                    success_url: `${  PROD_URL}/checkout/contact-info/payment/success`,
                    cancel_url: `${  PROD_URL}/checkout/contact-info/payment/failed`
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