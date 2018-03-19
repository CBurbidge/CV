__author__ = 'chester.burbidge'

try:
    from BeautifulSoup import BeautifulSoup
except ImportError:
    from bs4 import BeautifulSoup

f = open("out/cv.html", encoding="utf-8-sig")
soup = BeautifulSoup(f)
f.close()

body = soup.find_all("div", {'class': "container"})[0]
with open("out/cv-content.html", "wb") as file:
    file.write(body.prettify("utf-8"))

style = soup.find_all("style")[0]
with open("out/cv-style.html", "wb") as file:
    file.write(style.prettify("utf-8"))
