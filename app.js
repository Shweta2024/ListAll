const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const PORT = 5000 || process.env.PORT

const app = express()

app.use(bodyParser.urlencoded({ extended: true })); 
app.set('view engine', 'ejs')

async function getAllUserRepositories(url) {
    const response = await fetch(url);
    const result = await response.json();
    
    return result
}

app.get('/', (req,res) => {
    res.render('index',{repositoryList : []})    
})

app.post('/', async (req, res) => {
    const userName = req.body.userName

    const url = `https://api.github.com/users/${userName}/repos`

    const result = await getAllUserRepositories(url)
    res.render('index',{repositoryList: result})
})

app.listen(PORT, () => {
    console.log(`server started at port : ${PORT}`)
})
