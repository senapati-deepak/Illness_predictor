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

classifier = pickle.load(open('model.sav', 'rb'))
test = np.array(input().split())
test = test.reshape(1, -1)
result = classifier.predict(test)
res(result[0])