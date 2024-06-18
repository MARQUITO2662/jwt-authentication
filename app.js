const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

const secretKey = 'mysecretkey';

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '30m' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.get('/verify', (req, res) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        res.json({ message: 'Token is valid', user: decoded });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
