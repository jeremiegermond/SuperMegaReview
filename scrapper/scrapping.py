import requests
from bs4 import BeautifulSoup
import json
import os

def get_html(start):
    html = requests.get(f"https://www.imdb.com/search/title/?title_type=feature&num_votes=3000,&keywords=superhero&sort=user_rating,desc&count=100&start={start}&ref_=adv_nxt").text
    return BeautifulSoup(html, 'html.parser')


def parse_data(html_parsed, count):
    all_data = []
    list = html_parsed.find("div", {"class": "lister-list"})
    for movie in list.find_all("div"):
        try:
            certificate = movie.find("span", {"class": "certificate"}).text.strip()
            runtime = movie.find("span", {"class": "runtime"}).text.strip()
            genre = movie.find("span", {"class": "genre"}).text.strip()
            title = movie.find("img", {"class": "loadlate"}, alt=True)['alt'].strip()
            rating = movie.find("div", {"class": "inline-block ratings-imdb-rating"})['data-value'].strip()
            year = movie.find("span", {"class": "lister-item-year text-muted unbold"}).text.strip()[1:-1]
            names_div = movie.find_all("a")
            indexStar = str(movie).find("Star")
            Stars = ""
            Directors = ""
            for a in names_div:
                if a['href'].startswith("/name/"):
                    if(str(movie).find(a.text) < indexStar):
                        Directors += f"{a.text} "
                    else:
                        Stars += f"{a.text} "
            dict_movie = {
                "id" : count,
                "certificate": certificate,
                "runtime": runtime,
                "genre": genre,
                "title": title,
                "rating": rating,
                "year": year,
                "Directors": Directors,
                "Stars": Stars
            }
            all_data.append(dict_movie)
            count += 1
            os.system('cls')
            print(f"{count} movie extracted.")
        except:
            continue
    return all_data, count
        
        

def scrape():
    all_pages = []
    count = 0
    for a in range(0, 300, 100):
        html_parsed = get_html(a)
        current_page, count = parse_data(html_parsed, count)
        all_pages += current_page
    with open("scrapped_data.json", 'w') as scp_data:
            json.dump(all_pages, scp_data, ensure_ascii=True)


if __name__ == "__main__":
    scrape()