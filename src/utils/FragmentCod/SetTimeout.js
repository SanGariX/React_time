import { useEffect, useState } from 'react'

const SetTimeout = ( time = 300) => {
	const [timiout, setTimiout] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setTimiout(true)
		}, time)
	}, [])
	return timiout
}
export default SetTimeout
