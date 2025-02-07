export const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random())
export const builderUrl = (url, params) => {
	let urlWithParams = url
	const arrayObject = Object.entries(params).filter(([,value])=>value)
	arrayObject.forEach(([key, value], i) => {
		if (!value) return
		const sign = !i ? '?' : '&'
		urlWithParams += `${sign}${key}=${value}`
	})
	return urlWithParams
}
