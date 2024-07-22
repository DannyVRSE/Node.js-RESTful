import swaggerJsdoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";

//meta
const options = {
    definition: {
        openapi: "3.0.0",
        info: {title: "crossfit WOD API", version: "1.0.0"}, 
    },
    apis: ["./src/v1/routes/workoutRoutes.js", "./src/database/Workout.js"],
}
//docs in json format
const swaggerSpec = swaggerJsdoc(options);

// Function to setup our docs
const swaggerDocs = (app, port) => {
    // Route-Handler to visit our docs
    app.use("/api/v1/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));
    // Make our docs in JSON format available
    app.get("/api/v1/docs.json", (req, res) => {
      res.setHeader("Content-Type", "application/json");
      res.send(swaggerSpec);
    });
    console.log(
      `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
    );
  };

  export default swaggerDocs;