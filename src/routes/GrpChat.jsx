import Topbar from "../components/Topbar";
import ChatMsg from "../components/chat/ChatMsg";
import Groups from "../components/chat/Groups";

const GrpChat = () =>{



    return(

        <div className="">
            <div className="">
                <Topbar/>
            </div>
            <div className="w-full flex h-[calc(100vh)]">
                <div className="h-[calc(100vh)] w-[calc(35%)] border-r border-black px-2 py-4">
                 <Groups/> 
                 <Groups/>
                 <Groups/>
                 <Groups/>
                 <Groups/>  
                </div>
                <div className="h-[calc(100vh)] w-[calc(65%)] px-6">
                   <ChatMsg userId={9}/>
                   <ChatMsg userId={1}/>
                   <ChatMsg userId={3}/>
                   <ChatMsg userId={4}/>
                   <ChatMsg userId={5}/>
                </div>
            </div>
        </div>
    )
};
export default GrpChat;