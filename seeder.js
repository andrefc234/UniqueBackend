const data = require('./seed.json')
const axios = require('axios')


const run =  async () => {

const response = axios.post('http://localhost:5000/api/v1/material/crear',data)
console.log(response)

}
run()
//yarn install
//node seeder.js
//yarn dev