/*
Dependencies:
    express
    mongodb
    bcrypt
    dotenv
    body-parser
*/

const { Router } = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const bcrypt = require("bcrypt");

let url;
if (process.env.MODE === "production" ) {
    url = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/`; 
}
else {
    url = "mongodb://127.0.0.1:27017/";
}
const client = new MongoClient(url);
const db = client.db(
    process.env.MODE === "production" ? "team19": "sports"
);
const apiRouter = Router();

//Endpoint to test that api is running, to be removed
apiRouter.get("/", (req,res) => {
    res.send("This is a test");
});

apiRouter.post("/signup/", async (req, res) => {
    try {
        const users = db.collection("users");
        const hashed_password = await bcrypt.hash(req.body.password, 10);
        const user_info = {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username, 
          email: req.body.email, 
          password: hashed_password, 
          coins: 0}
        let username_query = {username: req.body.username}
        //TODO: figure out replacement for count()
        if (await users.find(username_query).countDocuments > 0) {
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
        const user_info = {email: req.body.email, coins: 0};
        const login_query = {email: req.body.email};
        const user = await users.findOne(login_query);
        if (user == null) {
            res.send("Invalid Login");
            console.log("Invalid Login");
            return;
        }
        if (await bcrypt.compare(req.body.password, user.password)) {
            console.log("login success");
            res.json(user_info)
        }
        else {
            res.send("Invalid Password");      
        }

    } catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
});

apiRouter.get("/sports/", async (req, res) => {
    try {
      const match_data = db.collection("match_data");
      const all_matches = await match_data.find({}).toArray();
      res.json(all_matches);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });

apiRouter.get("/match/", async (req, res) => {
    try {
        const match_data = db.collection("match_data");
        const searched_match = await match_data.findOne({
          _id: new ObjectId(req.body.id),
        });
        res.json(searched_match);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
})

apiRouter.get("/random-match", async (req, res) => {
    try {
        const cursor =  db.collection("match_data").aggregate([{$sample: {size: 1}}]);
        const match = await cursor.next()
        res.json(match);

        return;
        

    } catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
  }) 
apiRouter.get("/current-matches", async (req, res) => {
    try {
      const match_data = db.collection("current_matches");
      const all_matches = await match_data.find({}).toArray();
      res.json(all_matches);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  module.exports = apiRouter;