import { useCallback, useEffect, useState } from 'react'

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

	const updateMousePosition = useCallback(ev => {
		const centerX = 0
		const centerY = 0
		setMousePosition({ x: ev.clientX - centerX, y: ev.clientY - centerY })
	}, [])

	useEffect(() => {
		window.addEventListener('mousemove', updateMousePosition)
		return () => window.removeEventListener('mousemove', updateMousePosition)
	}, [updateMousePosition])

	return mousePosition
}

export default useMousePosition
