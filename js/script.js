$(document).ready(function() {


  // function to hide all divs
  function hideAll() {
    $('#dancingText').hide();
    $('#foodText').hide();
    $('#baseballText').hide();
  }

  // run that function right away
  hideAll();

  $('#dancingText').slideToggle();
  $('#foodText').slideToggle();
  $('#baseballText').slideToggle();

    // but first, hide all the divs to ensure that
    // only one will be open, ever
    hideAll();

  $('#dancingpic').click(function() {
    $('#dancingText').slideToggle();
  });

  $('#foodpic').click(function() {
    $('#foodText').slideToggle();
  });

  $('#baseballpic').click(function() {
    $('#baseballText').slideToggle();
  });

});

Highcharts.chart('piechart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Ethnicity in Cuba'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Ethnicity',
        colorByPoint: true,
        data: [{
            name: 'White',
            y: 64.1
        }, {
            name: 'Mulatto (mixed)',
            y: 26.6,
            sliced: true,
            selected: true
        }, {
            name: 'Black',
            y: 9.3
        }]
    }]
});

Highcharts.chart('agegraph', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Age Structure'
    },
    subtitle: {
        text: 'Source: https://www.cia.gov/library/publications/the-world-factbook/geos/cu.html'
    },
    xAxis: {
        categories: [
            '0-14',
            '15-24',
            '25-54',
            '55-64',
            '65-over',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Male',
        data: [950870, 706882, 2490483, 640150, 763058]

    }, {
        name: 'Female',
        data: [896476, 655446, 2462250, 679603, 902189]

    }]
});

function myFunction() {
    var x = document.getElementById("culture");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("freedom");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("detentions");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("prisoners");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("travel");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("execution");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
