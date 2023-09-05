import Topbar from "../components/Topbar";

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
                <div className="h-[calc(100vh)] w-[calc(65%)]">conversation</div>
            </div>
        </div>
    )
};
export default GrpChat;