from flask import Flask, jsonify
from flask_cors import CORS

# Create a new Flask app
app = Flask(__name__)

# Add CORS support (For the difference in origin between the frontend and backend | Flask at localhost:5000 and React at localhost:3000)
CORS(app)

# Home route
@app.route("/")
def greet():
    # Return a JSON response that can be pulled by the frontend
    return jsonify(message = "Relax Finance")

# Run if the script is run directly (not imported)
if __name__ == "__main__":
    app.run(debug = True)