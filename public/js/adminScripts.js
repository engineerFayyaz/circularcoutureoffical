type = "text/javascript"
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
    ['2004/05', 165, 938, 522, 998, 450, 614.6],
    ['2005/06', 135, 1120, 599, 1268, 288, 682],
    ['2006/07', 157, 1167, 587, 807, 397, 623],
    ['2007/08', 139, 1110, 615, 968, 215, 609.4],
    ['2008/09', 136, 691, 629, 1026, 366, 569.6]
  ]);

  var options = {
    title: 'Monthly Coffee Production by Country',
    vAxis: { title: 'Cups' },
    hAxis: { title: 'Month' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

//  second chart
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Info '],
    ['Product', 11],
    ['Add Product', 2],
    ['Edit Product', 2],
    ['Category', 2],
    ['Blog', 7]
  ]);

  var options = {
    title: 'Information',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}


// add product

document.getElementById('additionalPhotosSection').addEventListener('click', function () {
  var additionalPhotosContent = document.getElementById('additionalPhotosContent');
  var additionalPhotosIcon = document.getElementById('additionalPhotosIcon');

  if (additionalPhotosContent.style.display === 'none') {
    additionalPhotosContent.style.display = 'block';
    additionalPhotosIcon.className = 'fas fa-chevron-up'; // Change to up arrow icon
  } else {
    additionalPhotosContent.style.display = 'none';
    additionalPhotosIcon.className = 'fas fa-chevron-down'; // Change to down arrow icon
  }
});

function toggleText() {
  var checkbox = document.getElementById('check-apple');
  var offerText = document.getElementById('offerText');
  var inputFields = offerText.getElementsByTagName('input');

  if (checkbox.checked) {
    offerText.style.display = 'block';
    for (var i = 0; i < inputFields.length; i++) {
      inputFields[i].style.display = 'block';
    }
  } else {
    offerText.style.display = 'none';
    for (var i = 0; i < inputFields.length; i++) {
      inputFields[i].style.display = 'none';
    }
  }
}