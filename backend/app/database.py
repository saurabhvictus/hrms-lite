from pymongo import MongoClient
import os

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")

client = MongoClient(MONGO_URL)
db = client["hrms_lite"]

employee_collection = db["employees"]
attendance_collection = db["attendance"]
