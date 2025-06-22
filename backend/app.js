const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/kubecafe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MenuItem = mongoose.model('MenuItem', {
  name: String,
  price: Number,
});

app.get('/menu', async (req, res) => {
  const items = await MenuItem.find();
  res.send(items);
});

app.post('/menu', async (req, res) => {
  const item = new MenuItem(req.body);
  await item.save();
  res.send(item);
});

app.listen(3000, () => console.log('Backend running on port 3000'));
