from flask import Flask, jsonify, request
from flask_cors import CORS
from recWeights import weight, generate_output
import json

# Create a Flask app
app = Flask(__name__)

# Allow cross-origin requests (So that the frontend can make requests to the backend even though they are on different ports)
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# Define a route for the API to get form data
@app.route("/api/data", methods=["POST"])
def getData():
    data = request.get_json()
    input = weight(data)
    outputData = generate_output(input[0],input[1],input[2],input[3],input[4],input[5],input[6],input[7],input[8],input[9])
    return jsonify(outputData), 200
    
if __name__ == "__main__":
    app.run(debug = True, port = 5000)