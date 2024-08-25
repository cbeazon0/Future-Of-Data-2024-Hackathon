from flask import Flask, jsonify
from flask_cors import CORS

# Create a Flask app
app = Flask(__name__)

# Allow cross-origin requests (So that the frontend can make requests to the backend even though they are on different ports)
cors = CORS(app)

# Define a route with path /api/users with method GET (GET is method that is used to request data from a specified resource)
@app.route("/api/users", methods = ["GET"])
def users():
    # Return a list of users in json format
    return jsonify({
        "users": [
            "Logan",
            "Corn",
            "Cam",
            "Andy"
        ]
    })

if __name__ == "__main__":
    app.run(debug = True, port = 8080)