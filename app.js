import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";

const app = new Application();
app.use((context, next) => {
    context.response = "Hellow world!";
});

export {app};