new Chart(document.getElementById('monthlyChart'),{

type:'line',

data:{

labels:[
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
'Jul',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec'
],

datasets:[{

label:'Export Weight (kg)',

data:[
1800,
2200,
1950,
2600,
2400,
2800,
3100,
2900,
3300,
3000,
3400,
3600
],

borderColor:'#0B5ED7',

fill:false

}]

}

});

new Chart(document.getElementById('shipmentsChart'),{

type:'doughnut',

data:{

labels:[
'Air Freight',
'Sea Freight'
],

datasets:[{

data:[
35,
65
],

backgroundColor:[
'#0B5ED7',
'#22C55E'
]

}]

}

});



new Chart(document.getElementById('countriesChart'),{

type:'bar',

data:{

labels:[
'Australia',
'New Zealand',
'USA',
'France',
'Japan'
],

datasets:[{

label:'Shipments',

data:[
18,
11,
9,
7,
5
],

backgroundColor:'#22C55E'

}]

}

});


new Chart(document.getElementById('skillsChart'),{

type:'radar',

data:{

labels:[
'Customs',
'Logistics',
'Documentation',
'Freight',
'Excel',
'Python'
],

datasets:[{

label:'Skill Level',

data:[
95,
92,
94,
90,
88,
70
],

backgroundColor:
'rgba(11,94,215,0.2)',

borderColor:'#0B5ED7'

}]

}

});
