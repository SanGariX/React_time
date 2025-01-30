import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ClosePage = (
	status,
	timer,
	setTimer,
	statusCategory,
	productsStatus
) => {
	const [error, setError] = useState(false)
	const navigate = useNavigate()
	useEffect(() => {
		if (status !== 'rejected')
return
		}
        if(statusCategory !== 'rejected') return 
        if(productsStatus !== 'rejected') return 
		setError(true)
		const namesInterval = setInterval(() => {
			if (timer === 0) {
				navigate('/')
				clearInterval()
				return
			}
			setTimer(timer - 1)
			return
		}, 1000)
		return () => clearInterval(namesInterval)
	}, [status, timer])
	return { error: error }
}
