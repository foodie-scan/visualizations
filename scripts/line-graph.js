const lg = document.getElementById('line-graph');

Chart.defaults.elements.line.borderWidth = 3;

const labels = ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan'];

const data = {
  labels: labels,
  datasets: [{
    label: 'Calories',
    data: [1200, 1900, 1300, 1500, 900],
    fill: false,
    borderColor: '#EB7434',
    tension: 0.1
  }]
};

const options = {
  animations: {
    tension: {
      duration: 1000,
      easing: 'linear',
      from: 1,
      to: 0.2,
      loop: false
    }
  },
  plugins: {
    title: {
      display: true,
      text: 'Calorie Intake for the Past 5 Days'
    }
  }
};

let line = new Chart(lg, {
  type: 'line',
  data: data,
  options: options
});