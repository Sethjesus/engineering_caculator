from flask import Flask, jsonify, request
from flask_cors import CORS  # 允許跨域請求

app = Flask(__name__)
CORS(app)  # 讓前端能夠訪問 Flask API

@app.route("/calculate", methods=["GET"])
def calculate():
    try:
        a = float(request.args.get("num1"))
        b = float(request.args.get("num2"))
        result = a + b
        return jsonify({"result": result})
    except ValueError:
        return jsonify({"error": "請輸入數字"}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
