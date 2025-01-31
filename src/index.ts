import { Elysia } from "elysia";
import initialRoutes from "./app/routes/api";

const app = new Elysia();

initialRoutes(app);

app.listen(process.env.PORT || 4001);

console.log(
  `🦊 Elysia is running at ${process.env.PORT}`
);
