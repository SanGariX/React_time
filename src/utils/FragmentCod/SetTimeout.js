import { useEffect, useState } from 'react'

const SetTimeout = (data, time = 300) => {
	const [timiout, setTimiout] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setTimiout(true)
		}, time)
	}, [data])
	return timiout
}
export default SetTimeout
