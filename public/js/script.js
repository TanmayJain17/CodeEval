let txtCode = document.getElementById('txtCode')
let btnEncode = document.getElementById('btnEncode')
let inpCode = document.getElementById('inpCode')
//let btnEncrypt = document.getElementById('btnEncrypt')
let btnEvaluate = document.getElementById('btnEvaluate')

var flag = 0

btnEncode.onclick = function(){
    var data = txtCode.value
    flag = 1
    data = btoa(data)
    console.log(data)
    let enVal = encrypt(data)
    //alert('Encoding Done Now encrypt it to show')
    inpCode.value = enVal

}
//STRINGS ARE IMMUTABLE 
//IN BUILT FUNCTION string.charCodeAt(string is the name of the string && this func converts char to its ascii value)
//IN BUILT FUNCTION String.fromCharCode(an ASCII value)(converts ascii value to its corresponding character)

function encrypt(data) {
    var val = data
    let start = Date.now()
    for( let i = 0; i < val.length ; i++ ){
        if( val.charCodeAt(i) >=65 && val.charCodeAt(i) <=90){

            let x = val.charCodeAt(i)
            x = x + 32
            console.log(x)
            //val.charCodeAt(i) = val.charCodeAt(i) + 32 
            //data[i] = String.fromCharCode(val.charCodeAt(i))
            console.log(String.fromCharCode(x))
            //val = val.replace(val[i],String.fromCharCode(x)) (this works but not in case of similar characters)
            /*nothing works so we need to concatenate string*/
            val = val.substring(0,i) + String.fromCharCode(x) + val.substring(i + 1)
            //val[i] = String.fromCharCode(x)
            //console.log(val)
            
            
        }
        else if(val.charCodeAt(i) >=97 && val.charCodeAt(i) <=122){
            let x = val.charCodeAt(i)
            x = x - 32
            console.log(x)
            //val.charCodeAt(i) = val.charCodeAt(i) - 32 
            //data[i] = String.fromCharCode(val.charCodeAt(i))
            console.log(String.fromCharCode(x))
            //val = val.replace(val[i],String.fromCharCode(x))(this works but not in case of similar characters)
            //val[i] = String.fromCharCode(x) (does not work strings are immutable)
            /*nothing works so we need to concatenate string*/
            val = val.substring(0,i) + String.fromCharCode(x) + val.substring(i + 1)
            //console.log(val)
            
            
        }
    }
    console.log(Date.now()-start)
    return val
}
//console.log(data)

/*btnEncrypt.onclick = function(){
    if(flag === 0){
        alert('First Encode the program')
    }
    else{
        for( let i = 0; i < val.length ; i++ ){
            if( val.charCodeAt(i) >=65 && val.charCodeAt(i) <=90){
                let x = val.charCodeAt(i)
                x = x + 32
                //val.charCodeAt(i) = val.charCodeAt(i) + 32 
                //data[i] = String.fromCharCode(val.charCodeAt(i))
                data[i] = String.fromCharCode(x)
            }
            else if( val.charCodeAt(i) >=97 && val.charCodeAt(i) <=122){
                let x = val.charCodeAt(i)
                x = x - 32
                //val.charCodeAt(i) = val.charCodeAt(i) - 32 
                //data[i] = String.fromCharCode(val.charCodeAt(i))
                data[i] = String.fromCharCode(x)
            }
        }
    }
    
    console.log(data)
    inpCode.value = data
}*/