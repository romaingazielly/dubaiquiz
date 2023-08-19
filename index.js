const express = require('express');
// Constants
const dist = `${__dirname}/dist`;
const port = 81 ;

// Setup app
const app = express()
app.use(express.json());
app.use(express.static(dist));

app.all('/end-of-quizz', (req, res, next) => {
  // const { product, machines } = req.body;
  const answer =[
    {
        "user":"romain",
        "score":50,
    },
    {
        "user":"reda",
        "score":10,
    },
  ];
  res.send(JSON.stringify(answer));
})

app.listen(port);
