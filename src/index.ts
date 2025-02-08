import { Elysia } from "elysia";
import initialRoutes from "./app/routes/api";
import "./app/db/db"
import swagger from "@elysiajs/swagger";
const app = new Elysia();

initialRoutes(app);

app.listen(process.env.PORT || 4001);
app.use(swagger({
  provider: "swagger-ui",
  autoDarkMode: false,
  swaggerOptions: {
    
  }
}));
console.log(
  `🦊 Elysia is running at ${process.env.PORT}`
);
