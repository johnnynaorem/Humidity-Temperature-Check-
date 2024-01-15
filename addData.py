import firebase_admin
from firebase_admin import credentials, db

# Initialize Firebase Admin SDK
cred = credentials.Certificate("humidity.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://humidity-d9ff8-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

# Get a database reference
ref = db.reference('Humidity_Details')  # 'Humidity_Details' is the path where data will be stored

# Get user input
humidity = input("Enter humidity: ")
temperature = input("Enter temperature: ")
img = input("Enter the url of image: ")


# Create user data
user_data = {
    'humidity': humidity,
    'temperature': temperature,
    'img': img,
}

# Add data to the database
new_user_ref = ref.push(user_data)
print(f"Data added successfully with key: {new_user_ref.key}")
