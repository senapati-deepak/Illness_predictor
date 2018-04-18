var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};
var color = Chart.helpers.color;

// start of bargraphs
var barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Population',
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            10, 20, 20, 35, 40, 80
        ]
    }]

};

var meanHeightData = {
    labels: ['Uttarakhand', 'Rajasthan', 'Uttar Pradesh', 'Bihar', 'Assam', 'Jharkhand', 'Odisha', 'Chhattisgarh', 'Madhya Pradesh'],
    datasets: [{
        label: "Mean Height(in cms)",
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            86.273560, 84.284886, 81.319572, 83.044609, 86.165794, 85.230291, 84.309879, 84.931508, 85.235022
        ]
    },{
        label: "Mean Height of Males(in cms)",
        backgroundColor: color(window.chartColors.orange).alpha(0.5).rgbString(),
        borderColor: window.chartColors.orange,
        borderWidth: 1,
        data: [
            86.775910, 84.630406, 81.631399, 82.847863, 86.599632, 85.616457, 84.844245, 84.413812, 85.049696
        ]
    },{
        label: "Mean Height of Females(in cms)",
        backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [
            85.717790, 83.907955, 80.970772, 83.261188, 85.687860, 84.820511, 83.722821, 85.533816, 85.442577
        ]
    }]

};

var meanWeight = {
    labels: ['Uttarakhand', 'Rajasthan', 'Uttar Pradesh', 'Bihar', 'Assam', 'Jharkhand', 'Odisha', 'Chhattisgarh', 'Madhya Pradesh'],
    datasets: [{
        label: "Mean Weight(in kgs)",
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            11.741458, 10.801541, 10.435524, 10.427538, 11.312061, 10.974762, 10.794475, 10.597504, 11.138301
        ]
    },{
        label: "Mean Weight of Males(in kgs)",
        backgroundColor: color(window.chartColors.orange).alpha(0.5).rgbString(),
        borderColor: window.chartColors.orange,
        borderWidth: 1,
        data: [
            11.902085, 10.987350, 10.575979, 10.409367, 11.559792, 11.124187, 11.065410, 10.624647, 11.258074
        ]
    },{
        label: "Mean Weight of Females(in kgs)",
        backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [
            11.563750, 10.598841, 10.278416, 10.447540, 11.039151, 10.816198, 10.496823, 10.565924, 11.004162
        ]
    }]

};

var haemoglobinLevel = {
    labels: ['Uttarakhand', 'Rajasthan', 'Uttar Pradesh', 'Bihar', 'Assam', 'Jharkhand', 'Odisha', 'Chhattisgarh', 'Madhya Pradesh'],
    datasets: [{
        label: "in percentage grams",
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            7.808699, 8.827684, 8.703089, 8.760808, 9.396149, 9.315352, 9.874305, 9.925562, 9.234044
        ]
    }]

};

var within1HourBF = {
    labels: ['Uttarakhand', 'Rajasthan', 'Uttar Pradesh', 'Bihar', 'Assam', 'Jharkhand', 'Odisha', 'Chhattisgarh', 'Madhya Pradesh'],
    datasets: [{
        label: "within 1 hour of birth",
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            65.506428, 51.360336, 51.119929, 57.835133, 66.132404, 62.241336, 86.714145, 90.937647, 80.767300
        ]
    },{
        label: "within 1-24 hour of birth",
        backgroundColor: color(window.chartColors.orange).alpha(0.5).rgbString(),
        borderColor: window.chartColors.orange,
        borderWidth: 1,
        data: [
            30.448416, 44.930452, 36.928277, 41.675007, 32.766551, 35.003740, 11.214800, 8.277054, 17.755468
        ]
    },{
        label: "within 2-3 days of birth",
        backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
        borderColor: window.chartColors.green,
        borderWidth: 1,
        data: [
            2.916275, 3.158079, 9.882422, 0.363445, 0.501742, 1.421092, 1.424361, 0.439768, 1.233417
        ]
    }]

};

var neverBF = {
    labels: ['Uttarakhand', 'Rajasthan', 'Uttar Pradesh', 'Bihar', 'Assam', 'Jharkhand', 'Odisha', 'Chhattisgarh', 'Madhya Pradesh'],
    datasets: [{
        label: "after 3 days of birth",
        backgroundColor: color(window.chartColors.yellow).alpha(0.5).rgbString(),
        borderColor: window.chartColors.yellow,
        borderWidth: 1,
        data: [
            0.752587, 0.481148, 1.816578, 0.057940, 0.181185, 0.398903, 0.450229, 0.314120, 0.207960
        ]
    },{
        label: "never breastfeed",
        backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [
            0.376294, 0.069985, 0.252792, 0.068475, 0.418118, 0.934929, 0.196464, 0.031412, 0.035855
        ]
    }]

};

var waterMonth = {
    labels: ['Uttarakhand', 'Rajasthan', 'Uttar Pradesh', 'Bihar', 'Assam', 'Jharkhand', 'Odisha', 'Chhattisgarh', 'Madhya Pradesh'],
    datasets: [{
        label: "in percentage grams",
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            5.325180, 5.260957, 3.860964, 4.237293, 5.300627, 5.298803, 5.544368, 4.424533, 5.332951
        ]
    }]

};

var animalMilkMonth = {
    labels: ['Uttarakhand', 'Rajasthan', 'Uttar Pradesh', 'Bihar', 'Assam', 'Jharkhand', 'Odisha', 'Chhattisgarh', 'Madhya Pradesh'],
    datasets: [{
        label: "in percentage grams",
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            4.777360, 5.167702, 3.679659, 5.111035, 5.370592, 3.616679, 2.718075, 3.802576, 5.763428
        ]
    }]

};

var semiSolidFood = {
    labels: ['Uttarakhand', 'Rajasthan', 'Uttar Pradesh', 'Bihar', 'Assam', 'Jharkhand', 'Odisha', 'Chhattisgarh', 'Madhya Pradesh'],
    datasets: [{
        label: "in percentage grams",
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            7.160865, 6.278978, 6.026308, 6.063629, 5.951220, 6.464099, 5.762688, 4.007853, 5.616207
        ]
    }]

};

var solidFood = {
    labels: ['Uttarakhand', 'Rajasthan', 'Uttar Pradesh', 'Bihar', 'Assam', 'Jharkhand', 'Odisha', 'Chhattisgarh', 'Madhya Pradesh'],
    datasets: [{
        label: "in percentage grams",
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            8.337723, 5.725921, 6.779306, 7.635238, 6.966411, 7.036026, 5.753029, 3.719805, 5.760488
        ]
    }]

};

var vegetableFood = {
    labels: ['Uttarakhand', 'Rajasthan', 'Uttar Pradesh', 'Bihar', 'Assam', 'Jharkhand', 'Odisha', 'Chhattisgarh', 'Madhya Pradesh'],
    datasets: [{
        label: "in percentage grams",
        backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [
            7.902791, 6.094655, 6.427102, 7.934422, 7.164878, 7.038145, 5.625246, 3.880635, 5.851990
        ]
    }]

};
// end of bargraphs

// start of piechart
var config = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Odisha',
            'Uttar Pradesh',
            'Uttarakhand',
            'Assam',
            'Jharkhand'
        ]
    },
    options: {
        responsive: true
    }
};

var breastFeed = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                63.905505,
                31.308192,
                3.822280,
                0.742956,
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Within 1 hour',
            'Within 1 to 24 hour',
            'Within 2 to 3 days',
            'After 3 days',
        ]
    },
    options: {
        responsive: true
    }
};

var illness_uttarakhand = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                146, 138, 551, 23, 2331
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Diarrhoea / Dysentery",  // 1
            "Acute Respiratory Infection", // 2
            "Fever of any type", // 3
            "Other illnesses", // 4
            "No illness" // 0
        ]
    },
    options: {
        responsive: true
    }
};

var illness_rajasthan = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                1188, 725, 481, 101, 8936
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Diarrhoea / Dysentery",  // 1
            "Acute Respiratory Infection", // 2
            "Fever of any type", // 3
            "Other illnesses", // 4
            "No illness" // 0
        ]
    },
    options: {
        responsive: true
    }
};

var illness_up = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                3295, 5627, 2352, 581, 22165
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Diarrhoea / Dysentery",  // 1
            "Acute Respiratory Infection", // 2
            "Fever of any type", // 3
            "Other illnesses", // 4
            "No illness" // 0
        ]
    },
    options: {
        responsive: true
    }
};

var illness_bihar = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                657, 2542, 766, 21, 14999
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Diarrhoea / Dysentery",  // 1
            "Acute Respiratory Infection", // 2
            "Fever of any type", // 3
            "Other illnesses", // 4
            "No illness" // 0
        ]
    },
    options: {
        responsive: true
    }
};

var illness_assam = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                71, 455, 150, 35, 6464
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Diarrhoea / Dysentery",  // 1
            "Acute Respiratory Infection", // 2
            "Fever of any type", // 3
            "Other illnesses", // 4
            "No illness" // 0
        ]
    },
    options: {
        responsive: true
    }
};

var illness_jharkhand = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                230, 811, 760, 97, 6124
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Diarrhoea / Dysentery",  // 1
            "Acute Respiratory Infection", // 2
            "Fever of any type", // 3
            "Other illnesses", // 4
            "No illness" // 0
        ]
    },
    options: {
        responsive: true
    }
};

var illness_odisha = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                1219, 1513, 1894, 546, 6964
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Diarrhoea / Dysentery",  // 1
            "Acute Respiratory Infection", // 2
            "Fever of any type", // 3
            "Other illnesses", // 4
            "No illness" // 0
        ]
    },
    options: {
        responsive: true
    }
};

var illness_ch = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                755, 1095, 214, 57, 4246
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Diarrhoea / Dysentery",  // 1
            "Acute Respiratory Infection", // 2
            "Fever of any type", // 3
            "Other illnesses", // 4
            "No illness" // 0
        ]
    },
    options: {
        responsive: true
    }
};

var illness_mp = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                1140, 1759, 384, 57, 10605
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Diarrhoea / Dysentery",  // 1
            "Acute Respiratory Infection", // 2
            "Fever of any type", // 3
            "Other illnesses", // 4
            "No illness" // 0
        ]
    },
    options: {
        responsive: true
    }
};
//end of piechart

//start of scatterplot
var scatterChartData = {
    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.red,
        backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
        data: [{
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }]
    }]
};

var scatterChartData2 = {
    datasets: [{
        label: 'My First dataset',
        borderColor: window.chartColors.blue,
        backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
        data: [{
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }, {
            x: randomScalingFactor(),
            y: randomScalingFactor(),
        }]
    }]
};
//end of scatterplot


//show of bargraphs
window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart'
            }
        }
    });

    var meanChartHeight = document.getElementById('meanheight').getContext('2d');
    window.myBar = new Chart(meanChartHeight, {
        type: 'bar',
        data: meanHeightData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 70
                    }
                }]
            },
            responsive: true,
            legend: {
                position: 'top',
            }
        }
    });

    var meanChartWeight = document.getElementById('meanweight').getContext('2d');
    window.myBar = new Chart(meanChartWeight, {
        type: 'bar',
        data: meanWeight,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            },
            responsive: true,
            legend: {
                position: 'top',
            }
        }
    });

    var meanChartHaemoglobinLevel = document.getElementById('haemoglobinlevel').getContext('2d');
    window.myBar = new Chart(meanChartHaemoglobinLevel, {
        type: 'bar',
        data: haemoglobinLevel,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            },
            responsive: true,
            legend: {
                position: 'top',
            }
        }
    });

    var meanChartWithin1HourBF = document.getElementById('within1hourbf').getContext('2d');
    window.myBar = new Chart(meanChartWithin1HourBF, {
        type: 'bar',
        data: within1HourBF,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            },
            responsive: true,
            legend: {
                position: 'top',
            }
        }
    });

    

    var meanChartNeverBF = document.getElementById('neverbf').getContext('2d');
    window.myBar = new Chart(meanChartNeverBF, {
        type: 'bar',
        data: neverBF,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            },
            responsive: true,
            legend: {
                position: 'top',
            }
        }
    });

    var meanChartWaterMonth = document.getElementById('watermonth').getContext('2d');
    window.myBar = new Chart(meanChartWaterMonth, {
        type: 'bar',
        data: waterMonth,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            },
            responsive: true,
            legend: {
                position: 'top',
            }
        }
    });

    var meanChartAnimalMilkMonth = document.getElementById('animalmilkmonth').getContext('2d');
    window.myBar = new Chart(meanChartAnimalMilkMonth, {
        type: 'bar',
        data: animalMilkMonth,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            },
            responsive: true,
            legend: {
                position: 'top',
            }
        }
    });

    var meanChartSemiSolidFood = document.getElementById('semisolidfood').getContext('2d');
    window.myBar = new Chart(meanChartSemiSolidFood, {
        type: 'bar',
        data: semiSolidFood,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            },
            responsive: true,
            legend: {
                position: 'top',
            }
        }
    });

    var meanChartSolidFood = document.getElementById('solidfood').getContext('2d');
    window.myBar = new Chart(meanChartSolidFood, {
        type: 'bar',
        data: solidFood,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            },
            responsive: true,
            legend: {
                position: 'top',
            }
        }
    });

    var meanChartVegetableFood = document.getElementById('vegetablefood').getContext('2d');
    window.myBar = new Chart(meanChartVegetableFood, {
        type: 'bar',
        data: vegetableFood,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0
                    }
                }]
            },
            responsive: true,
            legend: {
                position: 'top',
            }
        }
    });
    
    //show of piechart
    var first_breastfeed = document.getElementById('totalbf').getContext('2d');
    window.myPie = new Chart(first_breastfeed, breastFeed);

    var uttarakhand_illness_pie = document.getElementById('uttarakhandillness').getContext('2d');
    window.myPie = new Chart(uttarakhand_illness_pie, illness_uttarakhand);

    var rajasthan_illness_pie = document.getElementById('rajasthanillness').getContext('2d');
    window.myPie = new Chart(rajasthan_illness_pie, illness_rajasthan);

    var up_illness_pie = document.getElementById('upillness').getContext('2d');
    window.myPie = new Chart(up_illness_pie, illness_up);

    var ch_illness_pie = document.getElementById('chillness').getContext('2d');
    window.myPie = new Chart(ch_illness_pie, illness_ch);

    var odisha_illness_pie = document.getElementById('odishaillness').getContext('2d');
    window.myPie = new Chart(odisha_illness_pie, illness_odisha);

    var bihar_illness_pie = document.getElementById('biharillness').getContext('2d');
    window.myPie = new Chart(bihar_illness_pie, illness_bihar);

    var jharkhand_illness_pie = document.getElementById('jharkhandillness').getContext('2d');
    window.myPie = new Chart(jharkhand_illness_pie, illness_jharkhand);

    var mp_illness_pie = document.getElementById('mpillness').getContext('2d');
    window.myPie = new Chart(mp_illness_pie, illness_mp);

    var illness_assam_pie = document.getElementById('assamillness').getContext('2d');
    window.myPie = new Chart(illness_assam_pie, illness_assam);

    var firstPieChart = document.getElementById('chart-area').getContext('2d');
    window.myPie = new Chart(firstPieChart, config);

    
    //show of sctterplots
    var firstScatterPlot = document.getElementById('scatter1').getContext('2d');
    window.myScatter = Chart.Scatter(firstScatterPlot, {
        data: scatterChartData,
        options: {
            title: {
                display: true,
                text: 'Chart.js Scatter Chart'
            },
        }
    });

    var secondScatterPlot = document.getElementById('scatter2').getContext('2d');
    window.myScatter = Chart.Scatter(secondScatterPlot, {
        data: scatterChartData2,
        options: {
            title: {
                display: true,
                text: 'Second Scatter Chart'
            },
        }
    });

};
