export const filterPricer = (price_min = 0, price_max = 0, data = [])=>{
    if(!price_min && !price_max) return data
    return data.filter(item => {
        if(price_min){
            return item.price > Number(price_min)
        }else{
            return item.price < Number(price_max)
        }
    })
}