import { Application } from "https://deno.land/x/oak@v10.0.0/mod.ts";

const app = new Application();

app.use((context, next)=> {
const data = {site: "my-site", 
data: {
    method: context.request.method, 
    path:context.request.url.pathname,
},
};

fetch("deno-simple-monitoring.herokuapp.com/api/entries",{
    method: "POST",
    headers:{
    "Content-Type":"application/json",
    },
    body : JSON.stringify(data) 
});
next();
});


app.use((context, next) => {
    context.response.body = "Hello world IS burning!";
});

export {app};
