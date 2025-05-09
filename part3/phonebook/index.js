const express = require("express");

const app = express();
const morgan = require("morgan");
app.use(express.json());

app.use(express.static("build"));

// Hardcoded phonebook entries
const persons = [
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
];


morgan.token("data", (request) => {
  if (request.method === "POST") {
    return JSON.stringify(request.body);
  }
  return null;
});


// Route to return all persons
app.get("/api/persons", (request, response) => {
    
  response.json(persons);
});

// Route to return a specific person by ID
app.get("/api/persons/:id", (request, response) => {
     const id  =request.params.id;
  // Find the person with the matching ID
    const person = persons.find (person => person.id === id);
  
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
  });

app.get("/info", (request, response) => {
    const date = new Date();   
    const info = `Phonebook has info for ${persons.length} people <br> ${date}`;
    // Send the info as a response
        response.send(info);
  });
  app.delete("/api/persons/:id", (request, response) => {
    const id = request.params.id;
    // Find the index of the person with the matching ID
     const  index = persons.findIndex(person => person.id === id);
    if (index !== -1) {
      // Remove the person from the array
      persons.splice(index, 1);
      response.status(204).end(); // No content to send back
    } else {
      response.status(404).end();
    }
  }); 

  const generateId = () => {
    // Using a large range (up to 1,000,000) to minimize chance of duplicates
    return String(Math.floor(Math.random() * 1000000));   
  }
  app.post("/api/persons", (request, response) => {
    const body = request.body;
    
    // Check if content is missing
    if (!body.name || !body.number) {
      return response.status(400).json({
        error: 'name or number is missing' 
      })
    }
    // Check if name already exists
    const personExsited = persons.find(person =>      person.name === body.name);
    if (personExsited) {
      return response.status(400).json({
        error: 'name must be unique' 
      })
    }
      const person = {
        id: generateId(),
        name: body.name,
        number: body.number
      };
      persons.push(person);
      response.json(person);
    }
  );
  


  


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});