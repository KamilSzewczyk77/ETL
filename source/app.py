from flask import Flask, render_template,redirect, url_for, request
import json

from movie_fascade import generate_data_for_genre

app = Flask(__name__)

@app.route("/")
def index():
    categories = [
        'fantasy',
        'comedy',
        'western',
        'war',
        'romance',
        'horror',
        'family',
        'action',
        'crime',
        'history',
        'mystery',
        'drama',
        'thriller',
        'biography'

    ]
    greetings = "MOVIES"
    with open('movies.json', 'r', encoding='utf-8') as f:
        movies = json.load(f)

    return render_template("movies.html", great=greetings, movies=movies, categories=categories)

@app.route("/change-category", methods=['POST'])
def change_category():
    genre = request.form['movie_category']
    generate_data_for_genre(genre)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)