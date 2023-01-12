#Prints Standings of the Premier League from current 2022 season.
#API Docs https://www.api-football.com/documentation-v3

import requests
import os
url = "https://v3.football.api-sports.io/standings"
params1 = {'league' : "39", "season" : "2022"}
payload={}
headers = {
    #Replace os.getenv function with key as a string or assign environment variable
    'x-apisports-key': os.getenv("SPORTS_API_KEY")
}

response = requests.request("GET", url, headers=headers, data=payload, params=params1)

print(response.text)