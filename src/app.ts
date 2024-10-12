import express, { Request, Response } from "express";
import rootRoutes from "./routes/index";
import totalParticipantRoute from "./routes/total-participants";
import usernameByRankRoute from "./routes/username-by-rank";
import userInfoRoute from "./routes/user-info";
import lowestRatedGuardianRoute from "./routes/lowest-rated-guardian";
import lowestRatedKnightRoute from "./routes/lowest-rated-knight";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use("/", rootRoutes);
app.use("/total-participants", totalParticipantRoute);
app.use("/username-by-rank", usernameByRankRoute);
app.use("/user-info", userInfoRoute);
app.use("/lowest-rated-guardian", lowestRatedGuardianRoute);
app.use("/lowest-rated-knight", lowestRatedKnightRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
