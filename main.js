const { urlencoded, json } = require('express')
const express = require('express')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')
const path = require('path')
const {data} = require('./models/data');

// route(app)

const myObjStr = JSON.stringify(data());
const shoes = JSON.parse(myObjStr);
console.log(shoes);
console.log( "sjhsdhfhdsfhdvfvdhvhsvfhdvfdsh "+JSON.parse(myObjStr));
const arr = data().shoes;
console.log(arr.length);

app.engine('handlebars',
handlebars({
  extname: "handlebars",
  defaultLayout: "",
  layoutsDir: "",
  helpers:{
    'find_index': function(title) {
      const s = 0;
      for(const i=0; i<arr.length; i++) {
        if(arr[i].name == title)
            s = i;
      }
      let image = arr[s].image;
      console.log(image);
      return image;
    },
  }
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