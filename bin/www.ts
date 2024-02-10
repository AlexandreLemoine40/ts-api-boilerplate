import dotenv from "dotenv";
import { app } from "../src/index";

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});