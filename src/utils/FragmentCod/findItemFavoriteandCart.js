export const findItemFavoriteandCart = (arr, payload)=>{
    const index = arr.findIndex((item) => item.id === payload.id)
    if (index !== -1) {
        arr[index] = {
            ...arr[index],
            quantity: arr[index].quantity + 1,
        }
    } else {
        arr.push({ ...payload, quantity: 1 })
    }
    return arr
}