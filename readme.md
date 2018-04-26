# Predictive Analysis of Clinical, Anthropometric and Biochemical(CAB) Data
                                        
#### What is the machine learning model about?
The machine learning model analyses the Clinical, Anthropometric and Biochemical(CAB) data to predict the illness-type in children under the age of five years.

# About the Data
To supplement the information provided by Annual Health Survey (AHS), a biomarker
component has been introduced in AHS to collect data on nutritional status, life style diseases like diabetes & hypertension and anaemia in Empowered Action Group (EAG) States & Assam. This component, namely Clinical, Anthropometric and Bio-chemical (CAB) survey, is conducted in 2014 on a sub-sample of AHS in all EAG States namely Bihar, Chhattisgarh, Jharkhand, Madhya Pradesh, Odisha, Rajasthan, Uttarakhand & Uttar Pradesh and Assam. The survey has collected information on nutritional status of women, children (1 month and above) and men, prevalence of anaemia among women, children (6 month and above) and men, prevalence of hypertension and abnormal fasting blood glucose among women and men 18 years and above and utilization of iodized salt in households.


### Tech
We have used a number of libraries and tools:
##### For Model:
* **Python3** - Used for scripting our model. And many of its libraries were used:
    * **Scikit-Learn 0.19.1** - For 
    * **Pandas 0.22.0** - For Data Cleaning.
    * **NumPy 1.14.2** - For mathematical opearations.
    * **Matplotlib 2.2.2** - For visualisations.
    * **Seaborn 0.8.1** - For visualisations.
##### For WebApp:
* **HTML5** - Used for Markup.
* **CSS3** - For styling the Markup.
* **Bootstrap3** - For pre-prepared styling classes.
* **JQuery** - For JavaScript sending requests to the web server.
* **Flask** - A python library used for creating the web server.
* **Chart.JS** - For visualisations.


### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### How to run?
Go to the root directory of the project folder and execute the following commands:
```sh
$ python3 prediction.py
$ xdg-open visualisations/index.html
```