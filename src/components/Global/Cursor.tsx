import { useEffect, useState } from 'react'

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
    const [mouseVisible, setMouseVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('mousemove', (e: MouseEvent) => {
            setMouseVisible(true)
            setMousePosition({ x: e.clientX, y: e.clientY })
        })

        return () => window.removeEventListener('mousemove', (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        })
    }, [mousePosition, mouseVisible])

    useEffect(() => {
        window.addEventListener('mouseleave', () => {
            setMouseVisible(false)
        })

        return () => window.removeEventListener('mouseleave', () => {
            setMouseVisible(false)
        })
    }, [mouseVisible])
    return (
        <img src="/server-assets/customPointer2.png" alt="" className={`w-12 h-10 z-50 ${mouseVisible ? 'fixed' : 'hidden'} pointer-events-none`} style={{ left: `${mousePosition.x - 18}px`, top: `${mousePosition.y - 12}px` }} />
    )
}

export default Cursor;