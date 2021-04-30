const express = require('express')
const app = express()
app.use('/',express.static(__dirname + '/public'))

function codeEvaluator(req, res, next){
    let theCode = req.evalCode
    let ans = eval(theCode)
    console.log(ans)
    next()
}
function codeDecoder(req, res, next){
    
    let encryptedCode = req.encryptedCode
    let mainCode = Buffer.from(encryptedCode,'base64').toString('ascii') //new Buffer DEPRICIATED
    console.log(mainCode)
    req.evalCode = mainCode
    next()
}
function codeDecrypter(req, res, next){
    let encrCode
    if(req.query.inpCode){
        encrCode = req.query.inpCode
    }
    encrCode = decrypt(encrCode)
    function decrypt(data) {
        var val = data
        
        for( let i = 0; i < val.length ; i++ ){
            if( val.charCodeAt(i) >=65 && val.charCodeAt(i) <=90){
                
                let x = val.charCodeAt(i)
                x = x + 32
                val = val.substring(0,i) + String.fromCharCode(x) + val.substring(i + 1)
            }
            else if(val.charCodeAt(i) >=97 && val.charCodeAt(i) <=122){
                let x = val.charCodeAt(i)
                x = x - 32
                val = val.substring(0,i) + String.fromCharCode(x) + val.substring(i + 1)
            }
        }
        
        return val
    }
    console.log(encrCode)
    req.encryptedCode = encrCode

    next()
}
//,codeDecoder,codeEvaluator
app.get('/eval',codeDecrypter,codeDecoder,codeEvaluator,(req, res) =>{
    res.send('=====Your Answer======')
})

app.listen(4567, ()=>{
    console.log('server listening on http://localhost:4567')
})
//BxKGBMfTzsbPCYbHBNrOB255igDVC2fSDMvZ