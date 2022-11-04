from os import X_OK
import sqlite3
from datetime import date
from datetime import time
from datetime import datetime
from datetime import timedelta
from sqlite3 import Error


con = sqlite3.connect("db.sqlite3")
cur = con.cursor()

cur.execute('SELECT * FROM auth_user')

useri = cur.fetchall()[1][4]



print(useri)



con.close()