require('dotenv').config()

const express = require('express')
const execa = require('execa')
const createGithubHookHandler = require('github-webhook-handler')

const PORT = process.env.PORT || 1234
const REF = process.env.REF || 'refs/heads/master'
const REPO = process.env.REPO || 'deployments'
const SECRET = process.env.SECRET
const UPDATE_SCRIPT = 'scripts/update'

const app = express()
const githubHookHandler = createGithubHookHandler({
  path: '/github',
  secret: SECRET
})

githubHookHandler.on('error', function (err) {
  console.error('Error:', err.message)
})

githubHookHandler.on('push', async function (event) {
  const repo = event.payload.repository.name
  const ref = event.payload.ref

  const commits = event.payload.commits
  const { message, id } = commits[commits.length-1]

  if (repo === REPO && ref === REF) {
    console.log(`Triggering update (${id}): ${message}`)
    try {
      await execa(UPDATE_SCRIPT)
      console.log('Successful update')
    } catch (e) {
      console.log('Error on webhook update:')
      console.log(e.stdout, e.stderr)
    }
  } else {
    console.log('Not triggering update', repo, ref)
  }
})

app.get('/trigger', async (req, res) => {
  if (req.query.secret === SECRET) {
    console.log('Executing script via manual trigger')
    try {
      const { stdout } = await execa(UPDATE_SCRIPT)
      res.send(stdout)
    } catch (e) {
      res.statusCode = 500
      res.end(`Running update failed. Output:\n\n${e.stdout}\n${e.stderr}`)
    }
  } else {
    res.statusCode = 403
    res.end('Invalid secret')
  }
})

app.use((req, res) => {
  githubHookHandler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
})

app.listen(PORT, (err) => {
  if (err) return console.error(err)

  console.log(`Listening on ${PORT} for webhooks for repo '${REPO}' (${REF})`)
})
