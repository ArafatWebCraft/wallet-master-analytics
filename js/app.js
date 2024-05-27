var incomeData = [31, 40, 28, 51, 42, 100];
var expenseData = [11, 32, 45, 32, 34, 52];

var options = {
  series: [{
    name: 'income',
    data: incomeData
  }, {
    name: 'expense',
    data: expenseData
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false
    },
    background: 'none'  // Set the chart background to none
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  grid: {
    show: true,  // Enable grid lines
    borderColor: '#e7e7e7',  // Customize the color of the grid lines
    strokeDashArray: 5,  // Optionally add dashed lines for the grid
    xaxis: {
      lines: {
        show: true  // Show vertical grid lines
      }
    },
    yaxis: {
      lines: {
        show: true  // Show horizontal grid lines
      }
    }
  },
  xaxis: {
    type: 'datetime',
    categories: [
      "2018-09-19T00:00:00.000Z", 
      "2018-09-19T01:30:00.000Z", 
      "2018-09-19T02:30:00.000Z", 
      "2018-09-19T03:30:00.000Z", 
      "2018-09-19T04:30:00.000Z", 
      "2018-09-19T05:30:00.000Z"
    ]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    }
  }
};

var chart = new ApexCharts(document.querySelector("#analytics_cahrt"), options);
chart.render();

document.getElementById('incomeBtn').addEventListener('click', function () {
  chart.updateSeries([{
      name: 'income',
      data: incomeData
  }]);
});

// Handle expense button click
document.getElementById('expenseBtn').addEventListener('click', function () {
  chart.updateSeries([{
      name: 'expense',
      data: expenseData
  }]);
});



function toggleDropdown(dropdownId, arrowIconId) {
  var dropdown = document.getElementById(dropdownId);
  var arrowIcon = document.getElementById(arrowIconId);
  dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
  arrowIcon.classList.toggle("ri-arrow-right-s-line");
  arrowIcon.classList.toggle("ri-arrow-down-s-line");
}


function labelDropdowns() {
    var dropdown = document.getElementById("labelnotFound");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
  }


