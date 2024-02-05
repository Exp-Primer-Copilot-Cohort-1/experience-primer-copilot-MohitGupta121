// Create web server
// Create a route for comments
// Create a route for comments/new
// Create a route for comments/:id
// Create a route for comments/:id/edit
// Create a route for comments/:id/delete
// Export router

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the comments page');
});

router.get('/new', (req, res) => {
    res.send('This is the new comments page');
});

router.get('/:id', (req, res) => {
    res.send('This is the comments page with id');
});

router.get('/:id/edit', (req, res) => {
    res.send('This is the edit comments page with id');
});

router.get('/:id/delete', (req, res) => {
    res.send('This is the delete comments page with id');
});

module.exports = router;