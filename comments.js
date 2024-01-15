// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// Create express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create object to store comments
const commentsByPostId = {};

// Create endpoint to receive comments
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

// Create endpoint to create comments
app.post('/posts/:id/comments', async (req, res) => {
    const { content } = req.body;
    const comments = commentsByPostId[req.params.id] || [];

    // Generate random id
    const id = Math.random().toString(36).substr(2, 7);
    comments.push({ id, content, status: 'pending' });

    // Save comments
    commentsByPostId[req.params.id] = comments