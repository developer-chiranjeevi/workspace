import { useState } from "react";
import {Card,CardBody,Typography,Avatar} from "@material-tailwind/react";



const ChatMsg = (props) =>{
    const [userId, setUserId] = useState(9);



    return(

        <div className={(props.userId == userId)?"flex justify-end mb-4":"flex justify-start mb-4"}>
            <Card className="w-fit max-w-[calc(50%)]">
                <CardBody>
                    <div className="flex items-center justify-between">
                        <div className="">
                            <Avatar src="profile.jpg"/>
                            <Typography variant="p" className="capitalize text-sm">subiksha</Typography>
                        </div>
                        <div className="ml-4">
                            <Typography variant="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Typography>
                            <Typography variant="p" className="text-sm uppercase text-end ">8:30 pm</Typography>
                        </div>
                    </div>
                    
                </CardBody>
            </Card>
        </div>
    )
};
export default ChatMsg;