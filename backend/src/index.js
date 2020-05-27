import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

const app = express();

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  return res.json({message: 'Hello World..'})
})

app.get('/users', async (req, res) => {
  try {
    const response = await fetch(`${BASE_URL}/users`)

    const users = await response.json()

    const data = users.map(({ id, name, company: { name: company } }) => ({
      id,
      name,
      company,
    }))

    return res.json({
      data,
    })
  } catch (e) {
    return res.sendStatus(400);
  }
})

app.get('/users/:id/posts', async (req, res) => {
  const { id } = req.params

  try {
    const response = await fetch(`${BASE_URL}/posts`)

    const posts = await response.json()

    const data = posts
      .filter(post => post.userId === parseInt(id, 10))
      .map(({ id, title, body }) => ({ id, title, body }))

    return res.json({
      data,
    })
  } catch (e) {
    return res.sendStatus(400);
  }
})

app.listen(3333, () => {
  console.log('[backend] started! 🙌')
})
