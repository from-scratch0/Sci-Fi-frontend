import Highcharts from "highcharts";
import Timeline from "highcharts/modules/timeline.js";
import { specialPeople } from "./timelineData/people";
import { scifiPeriod } from "./timelineData/period";
import { scifiNode } from "./timelineData/scifiNode";
import { historyNode } from "./timelineData/history";
import { camelCase } from "lodash";

Timeline(Highcharts);

export function timeline(element) {
  Highcharts.chart(element, {
    colors: ["#7cb5ec"],
    chart: {
      type: "timeline",
      inverted: true,
      backgroundColor: null,
      height: 2000,
      //width: 1270,
      spacingLeft: 0,
      style: {
        fontFamily:
          "Noto Serif SC, SF Pro Text, SF Pro Icons, Noto Serif, Noto Serif CJK SC, Noto Serif CJK, Source Han Serif SC, Source Han Serif, source-han-serif-sc, Arial, serif",
        fontSize: "14px",
      },
    },
    xAxis: {
      type: "datetime",
      visible: false,
    },
    yAxis: {
      gridLineWidth: 1,
      title: null,
      labels: {
        enabled: false,
      },
    },
    legend: {
      enabled: false,
    },
    title: {
      text: null,
    },
    // subtitle: {
    //   text: 'Info source: <a href="https://en.wikipedia.org/wiki/Timeline_of_space_exploration">www.wikipedia.org</a>',
    // },
    credits: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
      style: {
        width: 500,
      },
      split: true,
      formatter: function () {
        if (this.point.description) {
          var labelVal = this.point.description;
          var reallyVal = labelVal.split("<br/>");

          var x = true;
          var lv1 = x ? 30 : 20;
          var lv2 = x ? 60 : 40;
          var lv3 = x ? 90 : 60;
          var lv4 = x ? 120 : 80;
          var lv5 = x ? 150 : 100;
          var lv6 = x ? 180 : 120;
          var lv7 = x ? 210 : 140;
          var lv8 = x ? 240 : 160;
          var lv9 = x ? 280 : 180;
          var lv10 = x ? 320 : 200;

          reallyVal = reallyVal.map((item) => {
            let lvl = item.length;
            let itemCopy = item;
            if (lvl > lv1 && lvl <= lv2) {
              item =
                itemCopy.substr(0, lv1) +
                "<br/>" +
                itemCopy.substring(lv1, lvl);
            } else if (lvl > lv2 && lvl <= lv3) {
              item =
                itemCopy.substr(0, lv1) +
                "<br/>" +
                itemCopy.substr(lv1, lv1) +
                "<br/>" +
                itemCopy.substring(lv2, lvl);
            } else if (lvl > lv3 && lvl <= lv4) {
              item =
                itemCopy.substr(0, lv1) +
                "<br/>" +
                itemCopy.substr(lv1, lv1) +
                "<br/>" +
                itemCopy.substr(lv2, lv1) +
                "<br/>" +
                itemCopy.substring(lv3, lvl);
            } else if (lvl > lv4 && lvl <= lv5) {
              item =
                itemCopy.substr(0, lv1) +
                "<br/>" +
                itemCopy.substr(lv1, lv1) +
                "<br/>" +
                itemCopy.substr(lv2, lv1) +
                "<br/>" +
                itemCopy.substr(lv3, lv1) +
                "<br/>" +
                itemCopy.substring(lv4, lvl);
            } else if (lvl > lv5 && lvl <= lv6) {
              item =
                itemCopy.substr(0, lv1) +
                "<br/>" +
                itemCopy.substr(lv1, lv1) +
                "<br/>" +
                itemCopy.substr(lv2, lv1) +
                "<br/>" +
                itemCopy.substr(lv3, lv1) +
                "<br/>" +
                itemCopy.substr(lv4, lv1) +
                "<br/>" +
                itemCopy.substring(lv5, lvl);
            } else if (lvl > lv6 && lvl <= lv7) {
              item =
                itemCopy.substr(0, lv1) +
                "<br/>" +
                itemCopy.substr(lv1, lv1) +
                "<br/>" +
                itemCopy.substr(lv2, lv1) +
                "<br/>" +
                itemCopy.substr(lv3, lv1) +
                "<br/>" +
                itemCopy.substr(lv4, lv1) +
                "<br/>" +
                itemCopy.substr(lv5, lv1) +
                "<br/>" +
                itemCopy.substring(lv6, lvl);
            } else if (lvl > lv7 && lvl <= lv8) {
              item =
                itemCopy.substr(0, lv1) +
                "<br/>" +
                itemCopy.substr(lv1, lv1) +
                "<br/>" +
                itemCopy.substr(lv2, lv1) +
                "<br/>" +
                itemCopy.substr(lv3, lv1) +
                "<br/>" +
                itemCopy.substr(lv4, lv1) +
                "<br/>" +
                itemCopy.substr(lv5, lv1) +
                "<br/>" +
                itemCopy.substr(lv6, lv1) +
                "<br/>" +
                itemCopy.substring(lv7, lvl);
            } else if (lvl > lv8 && lvl <= lv9) {
              item =
                itemCopy.substr(0, lv1) +
                "<br/>" +
                itemCopy.substr(lv1, lv1) +
                "<br/>" +
                itemCopy.substr(lv2, lv1) +
                "<br/>" +
                itemCopy.substr(lv3, lv1) +
                "<br/>" +
                itemCopy.substr(lv4, lv1) +
                "<br/>" +
                itemCopy.substr(lv5, lv1) +
                "<br/>" +
                itemCopy.substr(lv6, lv1) +
                "<br/>" +
                itemCopy.substr(lv7, lv1) +
                "<br/>" +
                itemCopy.substring(lv8, lvl);
            } else if (lvl > lv9 && lvl <= lv10) {
              item =
                itemCopy.substr(0, lv1) +
                "<br/>" +
                itemCopy.substr(lv1, lv1) +
                "<br/>" +
                itemCopy.substr(lv2, lv1) +
                "<br/>" +
                itemCopy.substr(lv3, lv1) +
                "<br/>" +
                itemCopy.substr(lv4, lv1) +
                "<br/>" +
                itemCopy.substr(lv5, lv1) +
                "<br/>" +
                itemCopy.substr(lv6, lv1) +
                "<br/>" +
                itemCopy.substr(lv7, lv1) +
                "<br/>" +
                itemCopy.substr(lv8, lv1) +
                "<br/>" +
                itemCopy.substring(lv9, lvl);
            } else if (lvl > lv10) {
              item =
                itemCopy.substr(0, lv1) +
                "<br/>" +
                itemCopy.substr(lv1, lv1) +
                "<br/>" +
                itemCopy.substr(lv2, lv1) +
                "<br/>" +
                itemCopy.substr(lv3, lv1) +
                "<br/>" +
                itemCopy.substr(lv4, lv1) +
                "<br/>" +
                itemCopy.substr(lv5, lv1) +
                "<br/>" +
                itemCopy.substr(lv6, lv1) +
                "<br/>" +
                itemCopy.substr(lv7, lv1) +
                "<br/>" +
                itemCopy.substr(lv8, lv1) +
                "<br/>" +
                itemCopy.substr(lv9, lv1) +
                "<br/>" +
                itemCopy.substring(lv10, lvl);
            }
            return item;
          });

          return reallyVal.join("<br/>");
        }
      },
    },
    labels: {
      items: [
        {
          style: {
            left: "200px",
            top: "40px",
          },
        },
      ],
    },
    plotOptions: {
      series: {
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              window.location = "/movies"; //+this.options.key;
            },
          },
        },
      },
    },
    series: [
      // 科幻时代划分
      {
        dataLabels: {
          format:
            '<span style="font-weight: bolder; font-size: 20px;" > ' +
            "{point.name}</span><br/>{point.label}", // point.x:%d %b %Y
          backgroundColor: null,
          borderColor: null,
          color: "#fff",
          style: {
            fontWeight: "bold",
          },
          connectorWidth: 0,
          distance: 300,
        },
        marker: {
          enabled: false,
          lineWidth: 0,
          symbol: "diamond",
          fillColor: "#EEEE00",
          height: 30,
        },
        tooltip: {
          distance: -260,
        },
        data: scifiPeriod,
        index: 6,
        zIndex: 6,
      },
      // 关键节点
      {
        dataLabels: {
          allowOverlap: false,
          format:
            '<span style="color:#EEEE00">● </span><span style="font-weight: bold;" > ' +
            "{point.name}</span><br/>{point.label}", // point.x:%d %b %Y
          backgroundColor: "rgba(0, 0, 0, .55)",
          color: "#fff",
          distance: 200,
          width: 300,
        },
        marker: {
          symbol: "circle",
          lineWidth: 0,
        },
        data: scifiNode,
        index: 2,
        zIndex: 2,
      },
      // 相关历史节点
      {
        states: {
          hover: {
            enabled: false,
          },
        },
        dataLabels: {
          format:
            '<span style="font-weight: bold; font-size: 14px;" > ' +
            "{point.name}</span><br/>{point.label}", // point.x:%d %b %Y
          backgroundColor: "rgba(255, 255, 255, .55)",
          borderWidth: 0,
          color: "#000", // #ddd
          // style: {
          //   fontSize: "14px",
          // },
          connectorWidth: 0,
          distance: 80,
          z: 10,
        },
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
        data: historyNode,
      },
      // 重要人物
      {
        dataLabels: {
          enabled: true,
          //allowOverlap: false,
          format:
            '<span style="font-weight: bold; font-size: 14px" > ' +
            "{point.name}</span>", // point.x:%d %b %Y
          backgroundColor: null,
          borderColor: null,
          color: "#EEEE00",
          style: {
            fontSize: "12px",
            textOverflow: "ellipsis",
          },
          connectorWidth: 0,
          distance: 460,
        },
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
        data: specialPeople,
        tooltip: {
          distance: 180,
        },
      },
    ],
  });
}
