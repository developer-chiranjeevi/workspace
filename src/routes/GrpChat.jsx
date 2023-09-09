import {useState} from "react";
import Topbar from "../components/Topbar";
import Groups from "../components/chat/Groups";
import Messages from "../components/chat/Messages";
import {Drawer, Typography, IconButton,} from "@material-tailwind/react";

const GrpChat = () =>{

    const [open, setOpen] = useState(true);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return(

        <div className="">
            <div className="">
                <Topbar/>
            </div>
            <div className="w-full flex h-[calc(88vh)]">
                {/* sidebar starts*/}
                <Drawer size={400} open={open} onClose={closeDrawer} className="p-4 overflow-auto">
                    <div className="mb-6 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            Material Tailwind
                        </Typography>
                        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </IconButton>
                    </div>
                    <div>
                        <Groups />
                        <Groups />
                        <Groups />
                        <Groups />
                        <Groups />
                        <Groups />
                        <Groups />
                        <Groups />
                    </div>
                </Drawer>
                {/*sidebar ends*/}
                {/* message starts*/}
                    <Messages sideBarToggler={openDrawer}/>
                {/* message ends */}
            </div>
        </div>
    )
};
export default GrpChat;