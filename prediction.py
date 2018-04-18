#python3

import pandas as pd
import numpy as np
import pickle

def res(x):
    if x == 0:
        print('No illness')
    elif x == 1:
        print('Dyssentry/Diarhhoea')
    elif x == 2:
        print('Acute Respiratory Infection')
    elif x == 3:
        print('Fever of any type')
    elif x == 4:
        print('Other illnesses') 

def predictor(test):
    classifier = pickle.load(open('model.sav', 'rb'))
    test = test.reshape(1, -1)
    result = classifier.predict(test)
    res(result[0])

state = float(input("State Code:  "))
i = float(input("Iodine Code:  "))
sex = float(input("Sex: "))
age = float(input("Age:"))
weight = float(input("Weight (in kg):  "))
height = float(input("Height (in cm):  "))
haem = float(input("Haemoglobin:  "))
first_breast_feed = float(input("Month when first Breast fed:  "))
curr_breast_feed = float(input("Is currently breast fed:  "))
no_bf = float(input("No. of Months/days breast fed:  "))
water = float(input("Month when Water was first fed:  "))
ani = float(input("Month when Animal Milk was first fed:  "))
semi_solid = float(input("Month when Semisolid food was first fed:  "))
solid = float(input("Month when Solid was first fed:  "))
veg = float(input("Month when Vegetables were first fed:  "))
attributes = np.array([state, i, sex, age, weight, height, haem, first_breast_feed, curr_breast_feed, no_bf, water, ani, semi_solid, solid, veg])
predictor(attributes)