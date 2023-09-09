import {Card,Input,Button,Typography} from "@material-tailwind/react";


const SigninComp = () =>{



    return(
        <div className="">
            <Card color="transparent" className="px-4 py-4">
                <Typography variant="h4" className="capitalize">sign in</Typography>
                <Typography variant="h5" className="capitalize mt-2">enter your credentials</Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Enter Your Email" className="text-black" />
                        <Input size="lg" label=" Enter Your Password" type="password"/>
                    </div>
                    <Button className="w-full">Login</Button>
                </form>
            </Card>

        </div>



    )
};
export default SigninComp;