#Prints Standings of the Premier League from current 2022 season.
#API Docs https://www.api-football.com/documentation-v3

import requests
import os
import json
url = "https://v3.football.api-sports.io/fixtures"
params1 = {'league' : "39", 
            "season" : "2022",
            "from" : "2022-08-01",
            "to" : "2023-01-25",
          }
payload={}
headers = {
    #Replace os.getenv function with key as a string or assign environment variable
    'x-apisports-key': os.getenv("SPORTS_API_KEY")
}

response = requests.request("GET", url, headers=headers, data=payload, params=params1)

f = open("json_output.txt", "w")
f.write(response.text)
f.close()

f_response = json.loads(response.text)
print(f_response["results"])