// require modules
require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()
const PORT = 5000 || process.env.PORT


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')


// Function to retrieve all the repositories of the user
async function getUserRepositories(username, token) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const result = await response.json()
    return result;
}


// Function to check if the user has contributed to the given repository
async function hadContributed(username, repoName, token) {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/contributors`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const result = await response.json()

    // checking if the user is present in the contributor list of the repository
    for (let index = 0; index < result.length; index++) {
        if (result[index].login === username)
            return true
    }
    return false
}


// render the home page
app.get('/', (req, res) => {
    res.render('index', { repositoryList: [] })
})


// send back the list of all the repositories to which the user has contributed
app.post('/', async (req, res) => {

    // retrieving username
    const username = req.body.username
    const repositoryList = []

    const result = await getUserRepositories(username, process.env.PAT)

    // populating repositoryList with the name, link, fork count and start count of the repository to which user has contributed
    for (let index = 0; index < result.length; index++) {
        const isContributor = await hadContributed(username, result[index].name, process.env.PAT)

        if (isContributor)
            repositoryList.push([
                result[index].name,
                result[index].html_url,
                result[index].forks,
                result[index].stargazers_count
            ])
    }
    res.render('index', { repositoryList: repositoryList })
})


// start the server
app.listen(PORT, () => {
    console.log(`server started at port : ${PORT}`)
})
