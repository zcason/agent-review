const express = require('express');
const { Agent } = require('./model');

const app = express();

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.post('/agents', async (req, res, next) => {
  const { firstName, lastName, photoUrl, agentLicence, address, practiceAreas, aboutMe } = req.body.newAgent;

  // checks to see if rquired fileds are missing 
  for (const field of ['firstName', 'lastName', 'agentLicence', 'address']){
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
  return res.status(201);

} catch (error) {
    next(error)
}

  
});


// app.get('agents/:id', async (req, res, next) => {

// })


module.exports = app;
