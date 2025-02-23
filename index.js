import express from 'express';

const app = express()
function calculationSum(n){
    let ans = 0;
    for (let i = 0;i<=n ; i++){
       ans = ans +i;
    }
    return ans ;
   }
app.get("/" , function (req,res){
    const n = req.query.n;
    const ans = calculationSum(n)
    res.send(ans.toString())
})
app.post("/" , function (req,res){
 
})
app.put("/" , function (req,res){
    
})
app.delete("/" , function (req,res){
})
app.listen(3000)

