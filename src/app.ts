import express, { Application, Request, Response } from "express";
import userRoutes from "./modules/user/user.route";
import tourRoutes from "./modules/tour/tour.route";


const app: Application = express();

//middleware to parse json body
app.use(express.json());

//route setup
app.use('/api/users', userRoutes)
app.use('/api/tours', tourRoutes)

//basic health check route
app.get('/', (req: Request, res: Response) => {
    res.send("API is working")
})

//not found route handler
app.use((req: Request, res: Response) => {
    res.send("Routes not found")
})

export default app;

