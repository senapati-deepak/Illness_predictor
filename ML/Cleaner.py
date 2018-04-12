#python3

import pandas as pd

def cleaner(data):
    data = data.drop([ 'psu_id','ahs_house_unit','house_hold_no', 'date_survey',
                  'test_salt_iodine', 'record_code_iodine_reason', 'sl_no', 'usual_residance_reason',
                  'identification_code', 'date_of_birth', 'year_of_birth', 'weight_measured',
                  'length_height_measured', 'length_height_code', 'haemoglobin_test', 'haemoglobin', 'bp_systolic',
                  'bp_systolic_2_reading', 'bp_diastolic', 'bp_diastolic_2reading', 'pulse_rate',
                  'pulse_rate_2_reading', 'diabetes_test', 'fasting_blood_glucose', 'fasting_blood_glucose_mg_dl',
                  'marital_status', 'gauna_perfor_not_perfor', 'duration_pregnanacy', 'illness_duration', 'v54'],
                axis = 1)

    data = data.drop(data[(data['age_code'] == 'Y') & (data['age'] > 5) | (data['illness_type'] == -1)].index)

    data['day_or_month_for_breast_feeding_'][data['day_or_month_for_breast_feeding_'] == 'm'] = 'M'
    data['day_or_month_for_breast_feeding_'][data['day_or_month_for_breast_feeding_'] == 'd'] = 'D'

    data['age_code'][data['age_code'] == 'd'] = 'D'
    data['age_code'][data['age_code'] == 'm'] = 'M'
    data['age_code'][data['age_code'] == 'y'] = 'Y'

    data = data.drop('month_of_birth', axis=1)
    data = data.drop('rural_urban',axis=1)
    data = data.drop(['stratum', 'usual_residance'],axis=1)

    data.loc[((data['age']>2) & (data['age_code'] == 'Y') & (data['is_cur_breast_feeding'] == -1)),'is_cur_breast_feeding'] = 2
    data['is_cur_breast_feeding'] = data['is_cur_breast_feeding'].replace(-1, 1)

    for y in data['age_code'].unique():
        for i in data['age'][data[data['age_code'] == y].index].unique():
            x = data['weight_in_kg'][data[(data['age_code'] == y) & (data['age'] == i) & (data['weight_in_kg'] != -1)].index].mean()
            data.loc[((data['age_code'] == y) & (data['age'] == i) & ((data['weight_in_kg'] == -1) | (data['weight_in_kg'].isnull()))), 'weight_in_kg'] = x
    for y in data['age_code'].unique():
        for i in data['age'][data[data['age_code'] == y].index].unique():
            x = data['weight_in_kg'][data[(data['age_code'] == y) & (data['age'] == i) & (data['weight_in_kg'] != -1)].index].mean()
            data['weight_in_kg'] = data['weight_in_kg'].fillna(x)
    
    for y in data['age_code'].unique():
        for i in data['age'][data[data['age_code'] == y].index].unique():
            x = data['length_height_cm'][data[(data['age_code'] == y) & (data['age'] == i) & (data['length_height_cm'] != -1)].index].mean()
            data.loc[((data['age_code'] == y) & (data['age'] == i) & ((data['length_height_cm'] == -1) | (data['length_height_cm'].isnull()))), 'length_height_cm'] = x
    for y in data['age_code'].unique():
        for i in data['age'][data[data['age_code'] == y].index].unique():
            x = data['length_height_cm'][data[(data['age_code'] == y) & (data['age'] == i) & (data['length_height_cm'] != -1)].index].mean()
            data['length_height_cm'] = data['length_height_cm'].fillna(x)

    for y in data['age_code'].unique():
        for i in data['age'][data[data['age_code'] == y].index].unique():
            x = data['haemoglobin_level'][data[(data['age_code'] == y) & (data['age'] == i) & (data['haemoglobin_level'] != -1)].index].mean()
            data.loc[((data['age_code'] == y) & (data['age'] == i) & ((data['haemoglobin_level'] == -1) | (data['haemoglobin_level'].isnull()))), 'haemoglobin_level'] = x
    for y in data['age_code'].unique():
        for i in data['age'][data[data['age_code'] == y].index].unique():
            x = data['haemoglobin_level'][data[(data['age_code'] == y) & (data['age'] == i) & (data['haemoglobin_level'] != -1)].index].mean()
            data['haemoglobin_level'] = data['haemoglobin_level'].fillna(x)
    
    for i in data['district_code'].unique():
        x = data['first_breast_feeding'][data[(data['district_code'] == i) & (data['first_breast_feeding'] != -1)].index].value_counts()
        y = x[x == x.max()].index.item()
        data.loc[((data['district_code'] == i) & ((data['first_breast_feeding'] == -1) | (data['first_breast_feeding'].isnull()))), 'first_breast_feeding'] = y
    for i in data['district_code'].unique():
        x = data['first_breast_feeding'][data[(data['district_code'] == i) & (data['first_breast_feeding'] != -1)].index].value_counts()
        y = x[x == x.max()].index.item()
        data['first_breast_feeding'] = data['first_breast_feeding'].fillna(y)

    data.loc[(data['day_or_month_for_breast_feeding'] == -1), 'day_or_month_for_breast_feeding'] = 6
    data['day_or_month_for_breast_feeding'] = data['day_or_month_for_breast_feeding'].fillna(6)

    for i in data['district_code'].unique():
        x = data['water_month'][data[(data['district_code'] == i) & (data['water_month'] != -1)].index].value_counts()
        y = x[x == x.max()].index.tolist()
        data.loc[((data['district_code'] == i) & ((data['water_month'] == -1) | (data['water_month'].isnull()))), 'water_month'] = y[0]
    for i in data['district_code'].unique():
        x = data['water_month'][data[(data['district_code'] == i) & (data['water_month'] != -1)].index].value_counts()
        y = x[x == x.max()].index.tolist()
        data['water_month'] = data['water_month'].fillna(y[0])    

    for i in data['district_code'].unique():
        x = data['ani_milk_month'][data[(data['district_code'] == i) & (data['ani_milk_month'] != -1)].index].value_counts()
        y = x[x == x.max()].index.tolist()
        data.loc[((data['district_code'] == i) & ((data['ani_milk_month'] == -1) | (data['ani_milk_month'].isnull()))), 'ani_milk_month'] = y[0]
    for i in data['district_code'].unique():
        x = data['ani_milk_month'][data[(data['district_code'] == i) & (data['ani_milk_month'] != -1)].index].value_counts()
        y = x[x == x.max()].index.tolist()
        data['ani_milk_month'] = data['ani_milk_month'].fillna(y[0])

    for i in data['district_code'].unique():
        x = data['semisolid_month_or_day'][data[(data['district_code'] == i) & (data['semisolid_month_or_day'] != -1)].index].value_counts()
        y = x[x == x.max()].index.tolist()
        data.loc[((data['district_code'] == i) & ((data['semisolid_month_or_day'] == -1) | (data['semisolid_month_or_day'].isnull()))), 'semisolid_month_or_day'] = y[0]
    for i in data['district_code'].unique():
        x = data['semisolid_month_or_day'][data[(data['district_code'] == i) & (data['semisolid_month_or_day'] != -1)].index].value_counts()
        y = x[x == x.max()].index.tolist()
        data['semisolid_month_or_day'] = data['semisolid_month_or_day'].fillna(y[0])

    for i in data['district_code'].unique():
        x = data['solid_month'][data[(data['district_code'] == i) & (data['solid_month'] != -1)].index].value_counts()
        y = x[x == x.max()].index.tolist()
        data.loc[((data['district_code'] == i) & ((data['solid_month'] == -1) | (data['solid_month'].isnull()))), 'solid_month'] = y[0]
    for i in data['district_code'].unique():
        x = data['solid_month'][data[(data['district_code'] == i) & (data['solid_month'] != -1)].index].value_counts()
        y = x[x == x.max()].index.tolist()
        data['solid_month'] = data['solid_month'].fillna(y[0])

    for i in data['district_code'].unique():
        x = data['vegetables_month_or_day'][data[(data['district_code'] == i) & (data['vegetables_month_or_day'] != -1)].index].value_counts()
        y = x[x == x.max()].index.tolist()
        data.loc[((data['district_code'] == i) & ((data['vegetables_month_or_day'] == -1) | (data['vegetables_month_or_day'].isnull()))), 'vegetables_month_or_day'] = y[0]
    for i in data['district_code'].unique():
        x = data['vegetables_month_or_day'][data[(data['district_code'] == i) & (data['vegetables_month_or_day'] != -1)].index].value_counts()
        y = x[x == x.max()].index.tolist()
        data['vegetables_month_or_day'] = data['vegetables_month_or_day'].fillna(y[0])   

    data = data.drop('district_code', axis=1)

    for i in data[data['day_or_month_for_breast_feeding_'] == 'D'].index:
        if data['day_or_month_for_breast_feeding'][i] < 15:
            data['day_or_month_for_breast_feeding'][i] = 0
        else :
            data['day_or_month_for_breast_feeding'][i] = 1

    for i in data[data['age_code'] == 'Y'].index:
        x = data['age'][i]
        data['age'][i] = x*12

    for i in data[data['age_code'] == 'D'].index:
        x = data['age'][i]
        if data['age'][i] < 15:
            data['age'][i] = 0
        else :
            data['age'][i] = 1

    data = data.drop(['age_code', 'day_or_month_for_breast_feeding_'] , axis=1)
    data = data.drop('treatment_type' , axis=1)

    return data