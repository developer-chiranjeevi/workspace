import { useState } from "react";
import {Card,CardBody,Typography,Avatar} from "@material-tailwind/react";



const ChatMsg = (props) =>{
    const [userId, setUserId] = useState(1);



    return(

        <div className={(props.userId == userId)?"flex justify-end mt-4":"flex justify-start mt-4"}>
            <Card className="w-2/4">
                <CardBody>
                    <div className="flex items-center justify-between">
                        <div className="">
                            <Avatar src="profile.jpg"/>
                            <Typography variant="p" className="capitalize text-sm">subiksha</Typography>
                        </div>
                        <div className="">
                            <Typography variant="h6">hello everyone,good to see you all</Typography>
                            <Typography variant="p" className="text-sm uppercase text-end ">8:30 pm</Typography>
                        </div>
                    </div>
                    
                </CardBody>
            </Card>
        </div>
    )
};
export default ChatMsg;