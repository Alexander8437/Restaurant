import app from "./app.js";

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`SERVER HAS STARTED AT PORT ${port}`);
})
