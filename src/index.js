import express from "express";
import env from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
//import {swaggerDocs as V1SwaggerDocs} from "./v1/swagger.js";
import swaggerDocs from "./v1/swagger.js";
env.config();

import v1WorkoutRouter from "./v1/routes/workoutRoutes.js";

const app=express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

/*app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    swaggerDocs(app, PORT);
})*/

if (process.env.NODE_ENV === "test"){
    app.listen(3000, () => console.log(`⚡️[server]: Server is running at https://localhost:3000`))
}

export default app;