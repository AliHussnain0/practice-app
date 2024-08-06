require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData={
    "login": "AliHussnain0",
    "id": 161239577,
    "node_id": "U_kgDOCZxSGQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/161239577?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AliHussnain0",
    "html_url": "https://github.com/AliHussnain0",
    "followers_url": "https://api.github.com/users/AliHussnain0/followers",
    "following_url": "https://api.github.com/users/AliHussnain0/following{/other_user}",
    "gists_url": "https://api.github.com/users/AliHussnain0/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AliHussnain0/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AliHussnain0/subscriptions",
    "organizations_url": "https://api.github.com/users/AliHussnain0/orgs",
    "repos_url": "https://api.github.com/users/AliHussnain0/repos",
    "events_url": "https://api.github.com/users/AliHussnain0/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AliHussnain0/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-02-25T17:26:34Z",
    "updated_at": "2024-08-05T21:38:55Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ConceptSekhao',(req,res)=>{
    res.send("Brilliant channel")
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})