import { Outlet } from "react-router-dom"

const Auth = () => {
    return (
        <div className="w-full h-fit">
            <Outlet />
        </div>
    )
}

export default Auth