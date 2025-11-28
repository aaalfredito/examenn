const ChartJS = window.Chart;

function ActivityChart() {
  try {
    const chartRef = React.useRef(null);

    React.useEffect(() => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        new ChartJS(ctx, {
          type: 'line',
          data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            datasets: [{
              label: 'Actividad',
              data: [12, 19, 15, 25, 22, 18, 24],
              borderColor: '#2563eb',
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              tension: 0.4,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false }
            }
          }
        });
      }
    }, []);

    return (
      <div className="bg-white rounded-xl p-6 shadow-lg" data-name="activity-chart" data-file="components/ActivityChart.js">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Actividad del Usuario</h2>
        <div className="h-64">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ActivityChart component error:', error);
    return null;
  }
}