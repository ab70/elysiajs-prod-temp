import { Elysia } from "elysia";
import initialRoutes from "./app/routes/api";
// const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

const app = new Elysia();
initialRoutes(app);
app.listen(3000);
console.log(
  `🦊 Elysia is running at 3000}`
);
