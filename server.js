import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express()

// Below are all the things express are going to use
app.use(cors())
app.use(express.json()) 
// Our server can accept JSON in the body of a request
// url 
app.use("/api/v1/restaurants", restaurants) 
app.use("*", (reg, res) => res.status(404).json({error: "not found"}) )

export default app