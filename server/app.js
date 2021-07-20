const express = require('express');
const { restart } = require('nodemon');
const { Agent } = require('./model');

const app = express();
const jsonBodyParser = express.json();

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.post('/agents', jsonBodyParser, async (req, res, next) => {
  const { firstName, lastName, photoUrl, agentLicence, address, practiceAreas, aboutMe } = req.body;

  // checks to see if rquired fileds are missing 
  for (const field of ['firstName', 'lastName', 'agentLicence', 'address']){
    if (!req.body[field])
      return res.status(400).json({error: `Missing '${field}' in request body`})
  }

    const newAgent = await Agent.create({
      firstName,
      lastName,
      photoUrl,
      agentLicence,
      address,
      practiceAreas,
      aboutMe 
  });

  return res
    .status(201)
    .json(newAgent);  
});

restart()
// app.get('agents/:id', async (req, res, next) => {

// })

// app.post('agents/:id', jsonBodyParser, async (req, res, next) => {
//   const { review } = req.body;
//   const newReview = {
//     review,
//     agent: req.params.id
//   };

//   if (!req.body.review)
//     return res.status(400).json({
//       error: "Missing 'review' in request body"
//   })

//   try {
//     // await Review.create({
//     //   review,
//     //   agent: req.params.id
//     // });
//     console.log(newReview)
//   return res.status(201);

// } catch (error) {
//     next(error)
// }
// })


module.exports = app;
