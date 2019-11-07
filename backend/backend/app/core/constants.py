import os

DB_NAME = 'intross'
DB_USER = "postgres"
DB_HOST = 'db'
DB_PORT = 31401
DB_PASS = "TecPass"


#########################################################
#           DATABASE CONNETION PARAMETERS
#########################################################

PG_DB = os.getenv("POSTGRES_DB")
PG_USER = os.getenv("POSTGRES_USER")
PG_SERVER = os.getenv("POSTGRES_SERVER")
PG_PASSWORD = os.getenv("POSTGRES_PASSWORD")
PG_DATABASE_URI = f"postgresql://{PG_USER}:{PG_PASSWORD}@{PG_SERVER}/{PG_DB}"
