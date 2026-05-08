import logger from "./loggingMiddleware/loggingFunction.js";

async function getPriorityInbox(n){
        const response = await fetch("http://4.224.186.213/evaluation-service/notifications",{
            headers: {
                method : "GET",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiI3NGFrc2FyYXN3YXRAZ21haWwuY29tIiwiZXhwIjoxNzc4MjM2NjIyLCJpYXQiOjE3NzgyMzU3MjIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxZWNkOTRmOS1jN2YwLTRhNDAtYjY4MC0zMWYxYzUzNzQ2NDEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJoYXJzaGl0IHNhcmFzd2F0Iiwic3ViIjoiNTBlYzI4NTMtNjFjNS00YWEwLWIyNGQtZDBhOWUwZDQ4YTY0In0sImVtYWlsIjoiNzRha3NhcmFzd2F0QGdtYWlsLmNvbSIsIm5hbWUiOiJoYXJzaGl0IHNhcmFzd2F0Iiwicm9sbE5vIjoiOTkyMzEwMzI3NCIsImFjY2Vzc0NvZGUiOiJNZHByaEUiLCJjbGllbnRJRCI6IjUwZWMyODUzLTYxYzUtNGFhMC1iMjRkLWQwYTllMGQ0OGE2NCIsImNsaWVudFNlY3JldCI6IlBmdUVYdG1OWlZ0YlplVlIifQ.nySWfUjCTBykwXzwC01hBo_8bWHJehOY67P0SQM0Gmc"
            }
        }
        );

        const data = await response.json();

        const notification = data.notifications;

        const priority = {
            placement:3,
            result:2,
            event:1
        }

        notification.sort((a,b)=>{
            priority[b.Type] - priority[a.Type]
        });

        return notification.slice(0,n);
    // }
    // catch(error){
    //     logger("frontend","error","api","notification api error");
    // }
}

getPriorityInbox(3)
    .then(data => console.log(data))
    .catch(err => console.log(err));