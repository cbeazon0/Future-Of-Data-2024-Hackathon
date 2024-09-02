from flask import Flask, jsonify, request
from flask_cors import CORS
import json

# Create a Flask app
app = Flask(__name__)

# Allow cross-origin requests (So that the frontend can make requests to the backend even though they are on different ports)
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# # Define a route for the API to get form data
@app.route("/api/data", methods=["POST"])
def getData():
    data = request.get_json()
    print(data)  # Debug input data

    # Read output.json file and send as response
    with open('output.json', 'r') as f:
        output = f.read()

    try:
        outputData = json.loads(output)  # Parse JSON data
    except json.JSONDecodeError:
        outputData = {"message": "Error reading output.json"}

    print(outputData)
    return jsonify(outputData), 200

# Test
# @app.route('/api/data', methods=['POST'])
# def handle_data():
#     data = request.json
#     print("Received data:", data)  # Log received data
#     response = {"message": "Data received", "data": [1, 2, 3]}  # Example response
#     print("Sending response:", response)  # Log response
#     return jsonify(response)

    
if __name__ == "__main__":
    app.run(debug = True, port = 5000)