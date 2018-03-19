__author__ = 'chester.burbidge'

try:
    from BeautifulSoup import BeautifulSoup
except ImportError:
    from bs4 import BeautifulSoup

f = open("temp/cv-temp.html", encoding="utf-8-sig")
soup = BeautifulSoup(f)
f.close()

header = soup.find_all("header", {'id': "header"})[0]
header.extract()

contact = soup.find_all("section", {'id': "contact"})[0]
contact.extract()

html = soup.prettify("utf-8")
with open("out/cv.html", "wb") as file:
    file.write(html)
