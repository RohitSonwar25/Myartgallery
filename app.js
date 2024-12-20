const express = require("express");
const app = express();``
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Public/views"));
app.use("/Public", express.static(path.join(__dirname, "Public")));
const db = require('./db');
const { isNumberObject } = require("util/types");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/checkout.html", (req, res) => {
    res.render("checkout");
});

// Start the server
 
app.get("/thanku.html" , (req,res)=>{
    res.render("thanku")
    
})
app.get("/Public/views/customsketch.html" ,(req,res)=>{
    res.render("customsketch");
 })
  app.get("/customsketch.ejs",(req,res)=>{
      res.render('customsketch')
 });

app.get('/cart', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
      if (err) {
          return res.status(500).send(err);
      }
      res.json(results);
  });
});

app.post("/check" , async(req,res)=>{
  let{name, phone ,address,country, city } = req.body; // Get form data
  try {
      // Insert data into database
      await db.execute('INSERT INTO checkout(name, phone ,address,country, city) VALUES (?, ?,?,?,?)', [name, phone , address , country , city ]);
      res.redirect("thanku.html");
    } catch (err) {
      console.error(err);
      res.status(500).send('Error while submitting data');
    }

});


// Success Page (Optional)
app.get('/success', (req, res) => {
  res.send('<h1>Order Placed Successfully</h1>');
});

app.post("/customData" , async(req,res)=>{
  let{name, email ,sketchType,notes,number} = req.body; // Get form data
  try {
      // Insert data into database
      await db.execute('INSERT INTO customsktech(name, email ,sketchType,notes,number) VALUES (?, ?,?,?,?)', [name, email ,sketchType,notes,number]);
      res.redirect("thanku.html");
    } catch (err) {
      console.error(err);
      res.status(500).send('Error while submitting data');
    }

});




app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });