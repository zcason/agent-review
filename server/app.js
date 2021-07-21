const express = require('express');
const { restart } = require('nodemon');
const { Agent, Review } = require('./model');

const app = express();
const jsonBodyParser = express.json();

app.get('/agents', async (req, res, next) => {
  try {
    const agents = await Agent.findAll();
    return res.json(agents);
  } catch (error) {
    next(error)
  }
});

app.post('/agents', jsonBodyParser, async (req, res, next) => {
  const { firstName, lastName, photoUrl, agentLicence, address, practiceAreas, aboutMe } = req.body;

  // checks to see if rquired fileds are missing 
  for (const field of ['firstName', 'lastName', 'agentLicence', 'address', 'practiceAreas']){
    if (!req.body[field])
      return res.status(400).json({error: `Missing '${field}' in request body`})
  }

  try {
      await Agent.create({
        firstName,
        lastName,
        photoUrl,
        agentLicence,
        address,
        practiceAreas,
        aboutMe 
      });

    return res.status(201).end();   
  } catch (error) {
    next(error)
  } 

});


app.get('/agents/:id', async (req, res, next) => {
  const agentId = req.params.id;
  const agentDetails = await Agent.findAll({ where: {id: agentId} });
  const agentReviews = await Review.findAll({ where: { agentId } });
  const agent = {
    details: agentDetails[0],
    reviews: agentReviews
  };

  try {
    return res.json(agent);
  } catch (error) {
    next(error)
  }
})

app.post('/agents/:id', jsonBodyParser, async (req, res, next) => {
  const { review } = req.body;
  const agentId = req.params.id;

  if (!req.body.review)
  return res.status(400).json({
    error: "Missing 'review' in request body"
  })
  
  try {
    await Review.create({ details: review, agentId });

    return res.status(201).end();
  } catch (error) {
    next(error)
  }

})

restart();


module.exports = app;
