export default async function logger(stack,level,packageName,message){
    try{
        const response = await fetch("http://4.224.186.213/evaluation-service/logs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                stack,
                level,
                package: packageName,
                message,
            }),
        });

        return await response.json();

    }
    catch(error){
        console.log("loggin failed",error.message);
    }
}