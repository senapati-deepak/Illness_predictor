#python3
from flask import Flask, request, jsonify
import json
from flask_cors import CORS

import pandas as pd
import numpy as np
import pickle

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    return "testing"


@app.route("/predict", methods=['POST'])
def predict():
    print("hello")
    print(request.form)
    state = float(request.form['state'])
    i = float(request.form['iodine'])
    sex = float(request.form['gender'])
    age = float(request.form['age'])
    weight = float(request.form['weight'])
    height = float(request.form['height'])
    haem = float(request.form['haemoglobin'])
    first_breast_feed = float(request.form['firstBf'])
    curr_breast_feed = float(request.form['isCurrBf'])
    no_bf = float(request.form['bfduration'])
    water = float(request.form['watermonth'])
    ani = float(request.form['animalmilk'])
    semi_solid = float(request.form['semisolid'])
    solid = float(request.form['solid'])
    veg = float(request.form['vegetable'])
    attributes = np.array([state, i, sex, age, weight, height, haem, first_breast_feed, curr_breast_feed, no_bf, water, ani, semi_solid, solid, veg])
    predictor(attributes)


def res(x):
    if x == 0:
        return 'No illness'
    elif x == 1:
        return 'Dyssentry/Diarhhoea'
    elif x == 2:
        return 'Acute Respiratory Infection'
    elif x == 3:
        return 'Fever of any type'
    elif x == 4:
        return 'Other illnesses'


def predictor(test):
    classifier = pickle.load(open('model.sav', 'rb'))
    test = test.reshape(1, -1)
    result = classifier.predict(test)
    print(res(result[0]))
    ret = {'type' : "JSON/TXT"}
    ret['result'] = str(res(result[0]))
    return jsonify(ret)


app.run()