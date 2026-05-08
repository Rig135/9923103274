import logger from "./loggingMiddleware/loggingFunction";

async function getPriorityInbox(n){
    try{
        const response = await fetch("http://4.224.186.213/evaluation-service/notifications");

        const notification = await response.json();

        const priority = {
            placement:3,
            result:2,
            event:1
        }

        notification.sort((a,b)=>{
            priority[b.Type] - priority[a.Type]
        });

        return notification.slice(0,n);
    }
    catch(error){
        logger("frontend","error","api","notification api error");
    }
}