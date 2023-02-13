const { Router } = require("express");
const { MongoClient, ObjectId } = require("mongodb");




if (process.env.MODE === "production" ) {
    url = `remote_url`; 
}
else {
    url = "mongodb://127.0.0.1:27017/";
}
const client = new MongoClient(url);
const db = client.db(
    process.env.MODE === "production" ? "SimplySports": "sports"
);
const apiRouter = Router();


apiRouter.post("/signup/", async (req, res) => {
    try {
        const users = db.collection("users");
        const user_info = {username: req.body.username, email: req.body.email, password: req.body.password, coins: 0}
        username_query = {username: req.body.username}
        //TODO: figure out replacement for count()
        if (await users.find(username_query).count() > 0) {
            console.log("username already taken");
            res.send("Username already taken");
            return;
        }
        const newUser = await users.insertOne(user_info);
        res.json(newUser);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

apiRouter.post("/login/", async (req, res) => {
    try {
        const users = db.collection("users");
        const user_info = {username: req.body.username, email: req.body.email, password: req.body.password, coins: 0};
        const login_query = {username: req.body.username, password: req.body.password};
        const user = await users.findOne(login_query);
        if (user == null) {
            res.send("Invalid Login");
            console.log("Invalid Login");
            return;
        }
        else {
            res.json(user);      
        }

    } catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
});

//need to test this, will ask about on mon/weds

apiRouter.get("/sports/", async (req, res) => {
    try {
      const match_data = db.collection("match_data");
      res.json(match_data);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });