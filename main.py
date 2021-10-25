import flask
from flask import Flask, render_template, redirect, request
from flask.helpers import url_for
import mysql.connector
from mysql.connector import errorcode


app = Flask(__name__)

DATABASE_NAME = 'myDatabase'
TABLE_NAME = "myTable"
mydatabase = mysql.connector.connect(user='root', host='localhost', password='abdelqayyim')
cursor = mydatabase.cursor()

# cursor.execute(f'CREATE DATABASE {DATABASE_NAME}')
cursor.execute(f'USE {DATABASE_NAME}')
cursor.execute(f'CREATE TABLE {TABLE_NAME}(id INT AUTO_INCREMENT PRIMARY KEY,LAST_NAME VARCHAR(50), FIRST_NAME VARCHAR(50),TITLE VARCHAR(50), PUBLISHER VARCHAR(50), DATE_PUBLISHED VARCHAR(50),DATE_ACCESSED DATE, LINK VARCHAR(200),  CITATION_TYPE VARCHAR(15), CITATION JSON )')

def insertINtoDatabase(last_name, first_name, title, publisher, date_published, date_accessed, link):
    #look in to how to inset data into your table

# @app.route("/", methods=["POST", "GET"])
# def home():
#     if request.method == "POST":
#         print("THIS IS A POST REQUEST")
#         last_name = request.form["last-name"]
#         first_name =  request.form["first-name"]
#         title  =  request.form["title"]
#         publisher =  request.form["Publisher"]
#         date_published =  request.form["date-published"]
#         date_accessed =  request.form["date-accessed"]
#         url =  request.form["url"]
#         citation_type =  request.form["citation-type"]
#         citation = f"{last_name},{first_name}.'{title}'. {publisher}, Published {date_published}. Accessed on {date_accessed}. {citation_type}"
#         print(citation)
#         return render_template('index.html')
#     else:
#         return render_template('index.html')


# if __name__ == '__main__':
#     app.run(debug=True)