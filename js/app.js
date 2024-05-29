const options = {
  chart: {
      height: "263",
      maxWidth: "70%",
      type: "line",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
          enabled: false,
      },
      toolbar: {
          show: false,
      },
  },
  tooltip: {
      enabled: true,
      x: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  stroke: {
      width: 8,
  },
  grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
          left: 2,
          right: 2,
          top: -26
      },
  },
  series: [
      {
          name: "Income",
          data: [6500, 6418, 6456, 6526, 6356, 6456, 6600, 6700, 6800, 6900, 7000, 7100], // Add values for all months
          color: "#1A56DB",
      },
      {
          name: "Expense",
          data: [6456, 6356, 6526, 6332, 6418, 6500, 6600, 6700, 6800, 6900, 7000, 7100], // Add values for all months
          color: "#7E3AF2",
      },
  ],
  legend: {
      show: false
  },
  stroke: {
      curve: 'smooth'
  },
  xaxis: {
      categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'], // Add all months
      labels: {
          show: true,
          style: {
              fontFamily: "Inter, sans-serif",
              cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          }
      },
      axisBorder: {
          show: false,
      },
      axisTicks: {
          show: false,
      },
  },
  yaxis: {
      show: false,
  },
}

if (document.getElementById("line-chart") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("line-chart"), options);
  chart.render();
}



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


