require('./db.js')
const  express = require('express');
const userRoute = require("./router/user.js");
const  cors = require('cors');
const foodRouter = require('./router/food.js')

const app = express();
app.use(express.json());
app.use(cors());
app.get('/api',(req,res)=>{
  res.send('hello manish')
})
app.use('/api/foods', foodRouter);
app.use("/api/user", userRoute);

app.listen(5000, () => {
  console.log('server started ');
});
