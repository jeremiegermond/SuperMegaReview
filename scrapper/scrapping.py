import requests
from bs4 import BeautifulSoup
import json
import os
import random

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

def get_html(start):
    html = requests.get(f"https://www.imdb.com/search/title/?title_type=feature&num_votes=3000,&keywords=superhero&sort=user_rating,desc&count=100&start={start}&ref_=adv_nxt").text
    return BeautifulSoup(html, 'html.parser')


def get_reviews(reference):
    res = requests.get(f"https://www.imdb.com/title/{reference}/reviews?ref_=tt_urv").text
    rev_html = BeautifulSoup(res, 'html.parser')
    count = random.randint(8, 13)
    flag = 0
    reviews = []
    author_list = []
    for a in rev_html.find("div", {"class": "lister-list"}).find_all("div"):
        try:
            author = a.find("span", {"class": "display-name-link"}).text
            if author not in author_list:
                review = a.find("div", {"class": "content"}).find("div", {"class" : "text"}).text
                reviews.append({"id": flag,"author": author,"review": review })
                if flag > count:
                    return reviews
                flag+=1
                author_list.append(author)
        except:
            continue
    return reviews

def get_cover(ref):
    try:
        res = requests.get(f"https://www.imdb.com/title/{ref}/?ref_=tt_urv", headers=headers).text
        disp_html = BeautifulSoup(res, 'html.parser')
        link = disp_html.find("a", {"class": "ipc-lockup-overlay ipc-focusable"})['href']
        res_img = requests.get(f"https://www.imdb.com{link}", headers=headers).text
        img_html = BeautifulSoup(res_img, 'html.parser')
        cover_link = img_html.find("img", {"class": "sc-7c0a9e7c-0 fEIEer"})['src']
        return cover_link
    except:
        return None

def parse_data(html_parsed, count):
    print("Scrapping Started")
    all_data = []
    list = html_parsed.find("div", {"class": "lister-list"})
    for movie in list.find_all("div"):
        try:
            certificate = movie.find("span", {"class": "certificate"}).text.strip()
            runtime = movie.find("span", {"class": "runtime"}).text.strip()
            genre = movie.find("span", {"class": "genre"}).text.strip()
            title = movie.find("img", {"class": "loadlate"}, alt=True)['alt'].strip()
            print(f"Currently Scrapping : {title}")
            rating = movie.find("div", {"class": "inline-block ratings-imdb-rating"})['data-value'].strip()
            year = movie.find("span", {"class": "lister-item-year text-muted unbold"}).text.strip()[1:-1]
            names_div = movie.find_all("a")
            indexStar = str(movie).find("Star")
            Stars = ""
            Directors = ""
            ref = movie.find("img", {"class": "loadlate"}, alt=True)['data-tconst'].strip()
            reviews = get_reviews(ref)
            ref = movie.find("img", {"class": "loadlate"}, alt=True)['data-tconst'].strip()
            cover = get_cover(ref)
            for a in names_div:
                if a['href'].startswith("/name/"):
                    if(str(movie).find(a.text) < indexStar):
                        Directors += f"{a.text} "
                    else:
                        Stars += f"{a.text} "
            dict_movie = {
                "id": count,
                "certificate": certificate,
                "runtime": runtime,
                "genre": genre,
                "title": title,
                "rating": rating,
                "year": year,
                "Directors": Directors,
                "Stars": Stars,
                "Reviews": reviews,
                "cover": cover
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