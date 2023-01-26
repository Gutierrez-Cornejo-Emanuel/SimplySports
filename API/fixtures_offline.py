#Prints Standings of the Premier League from current 2022 season.
#API Docs https://www.api-football.com/documentation-v3

import requests

import json
import random



f = open("json_output.txt", "r")
text = f.read()
f.close()

match_num = random.randrange(0,207)

f_response = json.loads(text)
home = f_response["response"][match_num]["teams"]["home"]["name"]
print("VS")
away = f_response["response"][match_num]["teams"]["away"]["name"]
home_goals = f_response["response"][match_num]["goals"]["home"]
away_goals = f_response["response"][match_num]["goals"]["away"]
print(f'{home} VS {away}')
ans = ""
while not ans.lower() in ["draw", home.lower(), away.lower()]:
    ans = input("Enter the name of the winning team or 'draw': ")
print(f'FINAL SCORE: {home}: {home_goals} VS {away_goals}: {away}')

winner = "draw"
if home_goals > away_goals:
    winner = home
if away_goals > home_goals:
    winner = away

if ans.lower() == winner.lower():
    print("YOU WIN!")
else:
    print("YOU LOSE!")
