import requests
from bs4 import BeautifulSoup

#url = "https://sports.yahoo.com/soccer/premier-league/"
#url = "https://www.betonline.ag/sportsbook/soccer/epl/english-premier-league"


def dynamicScraper(url: str):
    baseURL = "https://sports.yahoo.com/" #will make this an argument later
    page = requests.get(url)

    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find(id="Col1-1-SportsStream")

    ulTag = soup.ul

    #print(results.prettify())
    #headlines = results.find_all("div", class_="Mb(5px)")

    #tags = {tag.name for tag in results.find_all()}
    #tagsSorted = sorted(list(tags))
    #print(tagsSorted)

    liLinks = results.find_all("li")
    aLinks = results.find_all("a")
    websiteLinks = results.find_all("href")

 
    writeToFile(aLinks,"webscraperResults.txt")

    information = aLinkParser(aLinks, baseURL)
    
    writeToFile(information,"largerResults.txt")
    


def aLinkParser(webResults,baseURL: str)->list:
    links = [x for x in range(0,len(webResults))]
    iter = 0
    tags = ("href=\"","</u>")
    webResults = list(webResults)

    
    for x in webResults:
        x = str(x)

        location = x.find(tags[0])
        loc2 = x.find(tags[1])
        
        
        htmlLink = x[location + len(tags[0]):(x.find("\">"))]
        linkTitle = x[loc2 + len(tags[1]):(x.find("</a>"))]
        

        if not "https" in htmlLink:
            htmlLink = str(baseURL) + htmlLink[1:]
        links[iter] = (htmlLink,linkTitle)
        iter = iter + 1

    return links
    

def writeToFile(var, fileName: str):
    fopen = open(fileName,"w")
    
    for link in var:
        fopen.write(str(link))
        fopen.write("\n")
    
    fopen.close()


startURL = "https://sports.yahoo.com/soccer/premier-league/"
dynamicScraper(startURL)


