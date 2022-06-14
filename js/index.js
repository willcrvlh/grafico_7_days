const data = []
const options = {
    
    series: [{
    data: [17.45,34.91, 52.36, 31.07, 23.39, 43.28, 25.48]
  }],
    chart: {
    type: 'bar',
    height: 310
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      
    }
    
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'
    ],
  },
  tooltip: {
    y: {
    formatter: valor =>`$ ${valor}`}
    },
  yaxis:{show:false},
  fill: {
    colors: ['#F44336', '#E91E63', '#9C27B0']
  }
  
  };

  var chart = new ApexCharts(document.querySelector("#grafico"), options);
  chart.render();