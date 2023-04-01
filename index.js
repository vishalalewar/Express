const { checkPrime } = require('crypto');
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000;
circlarea = function (r){
    const pi=3.14;
    return pi*r*r;
};
 chPrime = function (n){
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
app.get('/hello',(req,res)=>
{
    res.send('Hello world!')
});

app.get('/areacir',(req,res)=>
{
let x = req.query.x;
//let y = req.query.y;
let a = circlarea(x);
res.send({"Area of circle":a})
});


app.get('/checkPrime',(req,res)=>
{
let x = req.query.x;
//let y = req.query.y;
let a = chPrime(x);
res.send({"Is prime":a})
});
app.listen( port,()=>
{
    console.log('example app listng on port ${port}')
});
/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`starting server`)
})*/