/*
File Name: AdvancedBlogApp.js
Description: A sophisticated and elaborate blog application built using JavaScript.
*/

// Import necessary modules

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create an instance of Express server
const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/blogApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB", error));

// Define Blog schema and model using Mongoose
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});
const Blog = mongoose.model('Blog', blogSchema);

// Configure middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/blogs', (req, res) => {
  Blog.find({}, (err, blogs) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(blogs);
    }
  });
});

app.post('/blogs', (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    content: req.body.content
  });

  newBlog.save((err, blog) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(blog);
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));

// Add more functionalities, like authentication, admin panel, etc.
// Implement complex features such as search, comments, author profiles, etc.