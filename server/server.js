if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const path = require("path");

// const { onValue, ref } = require("firebase/database");

// const db = require("./firebase-config").default;
const admin = require("./firebase-config");

const app = express();

const cors = require("cors");
app.use(express.static("./build"));
app.use(express.json());

// var whitelist = ['https://spicy-soups.vercel.app', 'https://spicy-soups.netlify.app', 'http://localhost:3000']
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (whitelist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }

app.use(
  cors({
    origin: "*",
  })
);

const port = process.env.PORT || 3001;

var db = admin.database();

console.log("Starting up ...");

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.get("/api/luck", async (req, res) => {
  console.log(`${req.url} endpoint hit`);
  try {
    let ref = db.ref("/Products");
    let response = await ref.once("value", function (snapshot) {
      console.log(snapshot.val());
      return snapshot.val();
    });

    res.json({ response });
  } catch (err) {
    res.send(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.post("/api/payment", async (req, res) => {
  console.log("before try block");
  try {

    var products;
    let ref = db.ref("/Products");
    console.log("Getting products")
    await ref.once("value", function (snapshot) {
      products = snapshot.val();
    });

    // * create session
    console.log("Creating stripe session")
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.items.map((item) => {
        let orderedItem = {};
        Object.values(products).forEach((product) => {
          if (item.id === product.id) {
            orderedItem = {
              name: product.name,
              price: product.price,
              quantity: item.quantity,
            };
          }
        });
        return {
          price_data: {
            currency: "ngn",
            product_data: {
              name: orderedItem.name,
            },
            unit_amount: orderedItem.price * 100,
          },
          quantity: orderedItem.quantity,
        };
      }),
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1000 * 100,
              currency: "ngn",
            },
            display_name: "delivery",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 2,
              },
            },
          },
        },
      ],
      payment_method_types: ["card"],
      mode: "payment",
      // success_url: process.env.SUCCESS_URL,
      // cancel_url: process.env.CANCEL_URL
      success_url: `https://spicy-soups.vercel.app/checkout/contact-info/payment/success`,
      cancel_url: `https://spicy-soups.vercel.app/checkout/contact-info/payment/cancel`,
    });

    console.log("session created");
    res.json({ url: session.url });
  } catch (error) {
    console.log("I am an error: ", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
