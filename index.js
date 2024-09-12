const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());

const students = {
    1: {
      name: 'Gabriela',
      lastName: 'Bejarano',
      email: 'gabrielabepe@unisabana.edu.co',
      id: '0000316356'
    },
  };

  app.get('/user-info/:id', (req, res) => {
    const id = req.params.id;
    
    if (students[id]) {
      res.json(students[id]);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  });

  app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`);
  });