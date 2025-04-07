const isLogin= (userName)=>{
    if(userName === 'admin'){
        return true
    }else{
        return false
    }
}


const num =10
module.exports={isLogin,num}