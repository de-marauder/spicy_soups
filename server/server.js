require("dotenv").config()

const express = require("express")
// const fetch = require("node-fetch");
const { onValue, ref } = require("firebase/database")

const db = require('./firebase-config').default

const app = express()

const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))

console.log("Starting up ...")
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

// let products = {};
// console.log("Stripe => ", stripe)

app.post('/payment', async (req, res) => {
    console.log("before try block")
    try {
        console.log("before onValue block ")
        onValue(ref(db, '/Products'), (snapshot) => {
            console.log("inside onValue block ")
            products = { ...snapshot.val() }
            console.log("inside then after onValue block before session ")

            // console.log(products)
            console.log("products got", products)
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
                success_url: `${process.env.CLIENT_URL || process.env.GITHUB_HOME}/spicy_soups/checkout/contact-info/payment/success`,
                cancel_url: `${process.env.CLIENT_URL || process.env.GITHUB_HOME}/spicy_soups/checkout/contact-info/payment/failed`
            }).then((session) => {
                console.log("Response after creating session", session)
                res.json({ url: session.url })
            })
        // }).then((res) => {

        })
        // .catch(error => console.log("RTDB ERROR ", error))
        // console.log("products", products)
        // const products = await fetch("https://spicy-soups-default-rtdb.firebaseio.com/Products")
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

app.listen(5000)