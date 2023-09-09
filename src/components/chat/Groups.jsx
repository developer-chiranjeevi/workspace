import {Card,CardBody,Typography,Avatar } from "@material-tailwind/react";


const Groups = () =>{




    return(
        <div className="mb-3">
            <Card>
                <CardBody className="flex items-center ">
                    <div className="mr-4">
                     <Avatar src="./profile.jpg "/>
                    </div>
                    <div className="">
                        <Typography variant="h6" className="text-sm capitalize">2021 batch msc software systems</Typography>
                        <Typography variant="p" className="capitalize">chiranjeevi is an idiot😒</Typography>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
};
export default Groups;