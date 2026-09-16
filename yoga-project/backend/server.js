const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// API planning
app.get('/api/planning', (req, res) => {
  res.json([
    {
      day: "Lundi",
      time: "12h10",
      type: "Cours"
    },
    {
      day: "Jeudi",
      time: "20h30",
      type: "Cours"
    },
    {
      day: "Vendredi",
      time: "12h10",
      type: "Cours"
    },
    {
      day: "Dimanche",
      time: "10h30",
      type: "Cours"
    }
  ]);
});

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});