import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-dashboard',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.css'],
})
export class ChartDashboardComponent implements OnInit {
  faPenToSquare = faPenToSquare;

  chart = new Chart({
    chart: {
      type: 'line',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          y: -5,
          format: '\u202B' + '{point.name}',
          style: {
            fontSize: '15px',
            fontFamily: '"Neo Sans Arabic", sans-serif',
            textShadow: false,
          },
          useHTML: true,
        },
      },
      areaspline: {
        fillOpacity: 0.1,
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    title: {
      align: 'right',
      text: 'احصائيات استخدام القسيمة',
    },
    yAxis: {
      visible: false,
      tickmarkPlacement: 'on',
      gridLineWidth: 1,
    },

    xAxis: {
      categories: [
        'ديسمبر',
        'نوفمبر',
        'اكتوبر',
        'سبتمبر',
        'اغسطس',
        'يوليو',
        'ينويه',
        'مايو',
        'ابريل',
        'مارس',
        'فبراير',
        'يناير',
      ],
    },

    series: [
      {
        name: 'استخدام',
        tooltip: {
          valueDecimals: 2,
        },
        color: '#506ef9',
        type: 'areaspline',
        keys: ['y', 'selected'],
        data: [
          [110.9, false],
          [150.5, false],
          [60.4, false],
          [100.0, false],
          [240.0, false],
          [180.6, false],
          [190.5, false],
          [180.4, false],
          [110.1, false],
          [100.6, false],
          [90.4, false],
          [190.4, false],
        ],
      },
    ],
  });
  constructor() {}
  ngOnInit(): void {}
}
