# -*- coding: utf-8 -*-

from flask import Flask, request, jsonify
import traceback
import pandas as pd
import joblib
import sys
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Enable cors

@app.route("/predict", methods=['GET','POST']) # Use decorator pattern for the route
def predict():
    if model:
        try:
            json_ = request.json
            data = [json_]
            query = pd.DataFrame(data)
            print('---------Before Encoding----------') 
            print(query)

            # Ecode values using column specific label enconders
            query["age"] = le["age"].transform(query["age"])
            query["menopause"] = le["menopause"].transform(query["menopause"])
            query["tumor-size"] = le["tumor-size"].transform(query["tumor-size"])
            query["inv-nodes"] = le["inv-nodes"].transform(query["inv-nodes"])
            query["node-caps"] = le["node-caps"].transform(query["node-caps"])
            query["deg-malig"] = le["deg-malig"].transform(query["deg-malig"])
            query["breast"] = le["breast"].transform(query["breast"])
            query["breast-quad"] = le["breast-quad"].transform(query["breast-quad"])
            query["irradiat"] = le["irradiat"].transform(query["irradiat"])
            
            print('---------After Encoding----------')   
            print(query)
            
            # Prediction step
            prediction = list(model.predict(query))
            print('-----------Prediction------------')
            print({'prediction': str(prediction)})
            return jsonify({'prediction': str(prediction)})

        except:
            return jsonify({'trace': traceback.format_exc()})
    else:
        print ('Train the model first')
        return ('No model here to use')

if __name__ == '__main__':
    try:
        port = int(sys.argv[1]) # This is for a command-line input
    except:
        port = 12345 # If you don't provide any port the port will be set to 12345
    
    # Paths for loading pkl files
    dirname = os.path.dirname(__file__)
    model_path = os.path.join(dirname, 'data-files/model.pkl')
    le_path = os.path.join(dirname, 'data-files/le.pkl')
    model_columns_path = os.path.join(dirname, 'data-files/model_columns.pkl')
    
    model = joblib.load(model_path) # Load "model.pkl"
    print ('Model loaded')
    
    le = joblib.load(le_path) # Load "le.pkl"
    print ('Label Encoders loaded')
    
    model_columns = joblib.load(model_columns_path) # Load "model_columns.pkl"
    print ('Model columns loaded')
    
    app.run(port=port, debug=True)
