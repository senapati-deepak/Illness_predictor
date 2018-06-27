import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import pickle


# importing all the cleaned data
ass = pd.read_csv("ML/cleaned data/AS.csv", low_memory=False, index_col=False)
mp = pd.read_csv("ML/cleaned data/MP.csv", low_memory=False, index_col=False)
up = pd.read_csv("ML/cleaned data/UP.csv", low_memory=False, index_col=False)
jh = pd.read_csv("ML/cleaned data/JH.csv", low_memory=False, index_col=False)
rj = pd.read_csv("ML/cleaned data/RJ.csv", low_memory=False, index_col=False)
bh = pd.read_csv("ML/cleaned data/BH.csv", low_memory=False, index_col=False)
cg = pd.read_csv("ML/cleaned data/CG.csv", low_memory=False, index_col=False)
od = pd.read_csv("ML/cleaned data/OD.csv", low_memory=False, index_col=False)
ut = pd.read_csv("ML/cleaned data/UT.csv", low_memory=False, index_col=False)


# combining all the data into a single data frame
result = pd.concat([ut, cg, jh, ass, od, rj, mp, bh, up])


def train_classifier(clf, feature_train, labels_train):    
    clf.fit(feature_train, labels_train)
    return clf

rfc = RandomForestClassifier(n_estimators=231, random_state=200)
clf = train_classifier(rfc, result.drop('illness_type', axis=1), result['illness_type'])

pickle.dump(clf, open( "model.sav", "wb" ) )