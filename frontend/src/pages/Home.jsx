import { useNavigate } from "react-router-dom"
export function Home(){
    const navigate = useNavigate();
    return <div className="shadow h-14 flex justify-between">
    <div className="flex flex-col justify-center h-full ml-4">
        Pay App
    </div>
    <div className="flex">
        <button onClick={()=>{
            navigate("/Signin")
        }}>Signin</button>

<button onClick={()=>{
            navigate("/Signup")
        }}>Signup</button>
        
    </div>
</div>
}