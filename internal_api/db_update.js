//Retreives the next x matches from API-FOOTBALL

require("dotenv").config()
const {writeFile} = require('fs')
//Not using, rounds can be out of order making this difficult to use 
async function getCurrentRounds(callback) {
    resp = await fetch("https://v3.football.api-sports.io/fixtures/rounds?season=2022&league=39&current=true", {
	"method": "GET",
	"headers": {
        'x-apisports-key': process.env.API_KEY
	}
    })
    data = await resp.json()
    return data.response

}

async function getNextMatches(num_matches) {
    resp = await fetch(`https://v3.football.api-sports.io/fixtures?season=2022&league=39&next=${num_matches}`, {
        "method": "GET",
        "headers": {
            'x-apisports-key': process.env.API_KEY
        }
        })
    data = await resp.json()
    return data.response
}
async function main() {
    /*
    let round = await getCurrentRounds(((data) => round = data.response))
    */
    const path = "./match.json"
    fixtures = await getNextMatches(10)
    console.log(fixtures)
    content = JSON.stringify(fixtures)
    writeFile(path, content, 'utf-8', function(err) {
        if (err) {
            return console.log(err)
        }
        console.log("File is saved")
    })


}
main()
