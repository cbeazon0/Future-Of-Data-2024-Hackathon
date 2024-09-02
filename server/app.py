from flask import Flask, jsonify, request
from flask_cors import CORS

# Create a Flask app
app = Flask(__name__)

# Allow cross-origin requests (So that the frontend can make requests to the backend even though they are on different ports)
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# Define a route for the API to get form data
@app.route("/api/data", methods=["POST"])
def getData():
    data = request.get_json()

    print(data) # Print the data to the console

    # Process the data here
    processed_data = {
        "message": "Data processed successfully",
        "data": data  # Include processed data here
    }

    return jsonify(processed_data), 200
    
if __name__ == "__main__":
    app.run(debug = True, port = 5000)