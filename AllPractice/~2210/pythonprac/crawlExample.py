import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient# client = MongoClient('mongodb://test:test@localhost', 27017)
client = MongoClient('localhost', 27017) # dbsparta 테이블에 인터파크 티켓 크롤링 한 데이터 저장하기
db = client.dbsparta

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('http://ticket.interpark.com/TPGoodsList.asp?Ca=Eve&SubCa=Eve_O&tid4=Eve_O&Sort=1', headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

trs = soup.select('.stit > table > tbody > tr')
key = 0
# for tr in trs:
#     a = tr.select_one('td.RKtxt > span > a')
#     if a is not None:
#             key += 1
#             title = a.text
#             img_url = tr.select_one('.stit > table > tbody > tr > td.RKthumb > a > img')['src']
#             place = tr.select_one('.stit > table > tbody > tr > td.Rkdate > a').text
#             period = tr.select_one('.stit > table > tbody > tr > td:nth-child(4)').text.strip()
#             baseUrl = 'http://ticket.interpark.com'
#             link_url = tr.select_one('.stit > table > tbody > tr > td.RKthumb > a')['href']
#             url = baseUrl + link_url
#             price = '100,000'
#             age = '전체관람가'
#             doc = {
#                 'id' : str(key),
#                 'title': title,
#                 'img_url': img_url,
#                 'url': url,
#                 'place': place,
#                 'period': period,
#                 'price' : price,
#                 'age' : age
#
#             }
#             db.exhibition.insert_one(doc)
print(trs)
