
function data(){
const axios = require("axios")
const api = "https://api.chucknorris.io/jokes/random"
axios.get(api)
.then((response)=>{
  console.log(response.data.icon_url)
})
}