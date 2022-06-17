const { urlencoded, json } = require('express')
const express = require('express')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')
const path = require('path')
const {data} = require('./models/data');


// route(app)

let shoes = data();
console.log("jdfsjdhfjdshbfhsd" + shoes);


app.engine('handlebars',
handlebars({
  extname: "handlebars",
  defaultLayout: "",
  layoutsDir: "",
}));

app.set('view engine', 'handlebars')
app.set('views', [__dirname + '\\src\\views\\views_client'])

app.use(express.static(path.join(__dirname, 'src/public')))

app.get('/', function (req, res) {
  res.render("cart_client",{data: shoes});
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})