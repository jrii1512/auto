import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";

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
};


app.use((context, next) => {
    context.response.body = "Hello world is burning!";
});

export {app};
