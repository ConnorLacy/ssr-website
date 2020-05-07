import express from 'express';

const app = express()
const port = 8080

app.get('/', (req, res) => res.send("Testy Boi"))
app.listen(port, () => console.log(`Your server is running on port ${port}`))