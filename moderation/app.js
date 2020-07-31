const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");

const port = 4003;

app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: { id: data.id, postId: data.postId, status, content: data.content },
    });
  }

  res.send({});
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
