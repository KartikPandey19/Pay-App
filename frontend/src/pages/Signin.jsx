import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export function Signin(){

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign In"} />
            <SubHeading label={"Enter your credentials to access your account"} />
            <InputBox placeholder="Jack" label={"First Name"} />
            <InputBox placeholder="Rich" label={"Last Name"} />
            <InputBox placeholder="Jack@email.com" label={"Email"} />
            <InputBox placeholder="123456" label={"Password"} />
            <div className="pt-4">
                <Button label={"Sign In"}/>
            </div>
            <BottomWarning label={"Doesn't Have Account?"} buttonText={"Sign Up"} to={"/signup"} />


        </div>
        </div>
    </div>
    
    
}

