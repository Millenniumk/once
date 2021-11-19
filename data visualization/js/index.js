//柱状图模块1
(function () {
  //实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"), "dark");
  var xData = ["源氏", "死神", "小美", "半藏", "麦克雷", "猎空", "黑百合"];
  var yData = [50, 80, 100, 130, 150, 100, 50],
    //制定配置项和数据
    option = {
      //一般默认开启动画
      animation: true,
      color: ["rgb(0, 255, 0)"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "10px",
        bottom: "4%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: xData,
          axisTick: {
            alignWithLabel: true,
          },
          //修改刻度标签
          axisLabel: {
            color: "#fff",
            fontSize: "15",
          },
          //x轴不显示的基础样式
          axisLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            color: "rgb(255, 255, 0)",
            fontSize: "15",
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgb(0, 255, 0)",
              width: "4",
              type: "solid",
            },
          },
          //y分割线颜色
          splitLine: {
            lineStyle: { color: "rgba(255,255,255,30%" },
          },
        },
      ],
      series: [
        {
          name: "击杀次数",
          type: "bar",
          barWidth: "35%",
          //实际项目中，数据是响应式的
          data: yData,
          itemStyle: {
            barBorderRadius: 5,
          },
        },
      ],
    };
  //把配置项给实例对象
  myChart.setOption(option);
  //让图标跟随屏幕变化大小
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  //修改数据的按钮的js
  var btnModify = document.querySelector(".barbt");
  btnModify.onclick = function () {
    var newMccreeKill = [50, 80, 100, 130, 100, 100, 50],
      option = {
        series: [{ data: newMccreeKill }],
      };
    myChart.setOption(option);
  };
  var btnAdd = document.querySelector(".barbtadd");
  btnAdd.onclick = function () {
    xData.push("76号");
    yData.push(90);
    option = {
      xAxis: { data: xData },
      series: { data: yData },
    };
    myChart.setOption(option);
  };
})();
//柱状图2
(function () {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    /* legend: {
      data: ["2011年", "2012年"],
    }, */
    grid: {
      top: "10%",
      left: "22%",
      right: "18%",
      bottom: "10%",
      //containLabel: true,
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      //第一个对象
      {
        type: "category",
        inverse: true,
        //项目中实际是用的请求axios活动的数据
        data: ["英雄联盟", "守望先锋", "炉石传说", "王者荣耀", "和平精英"],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "rgb(255, 255, 0)",
        },
      },
      //第二个对象
      {
        type: "category",
        //项目中实际是用的请求axios活动的数据
        data: ["维恩", "猎空", "安度因", "亚瑟", "小团团"],
        inverse: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#fff",
        },
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,
        //修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          color: function name(params) {
            return myColor[params.dataIndex];
          },
        },
        //柱子的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        label: {
          show: true,
          positiong: "inside",
          //{c}自动解析为data里面的数据
          formatter: "{c}%",
        },
      },
      //外框的css
      {
        name: "框",
        type: "bar",
        //柱子的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 15,
        data: [100, 100, 100, 100, 100],
        yAxisIndex: 1,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15,
        },
      },
    ],
  };
  myChart.setOption(option);
  //让图标跟随屏幕变化大小
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//折线图1
(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var yearData = [
    {
      year: "2020",
      data: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [210, 230, 120, 230, 210, 120, 210, 230, 120, 230, 210, 120],
      ],
    },
    {
      year: "2021",
      data: [
        [230, 120, 230, 210, 120, 210, 230, 120, 230, 210, 120, 210],
        [24, 40, 101, 134, 90, 24, 40, 101, 134, 90, 24, 40],
      ],
    },
  ];
  var option = {
    //通过这个color修改线的颜色
    color: ["#00f2f1", "#ed3f35"],
    title: {
      text: "",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      //如果series对象有name值，则legend可以不用写data
      textStyle: { color: "#4c9bfd" },
      right: "10%",
    },
    grid: {
      left: "3%",
      top: "20",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      borderColor: "#012f4a",
      show: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      fontSize: {},
      axisTick: { show: false },
      axisLabel: {
        color: "#4c9bfd",
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisTick: { show: false },
      axisLabel: {
        color: "#4c9bfd",
      },
      axisLine: {
        show: false,
      },
      boundaryGap: false,
      splitLine: {
        lineStyle: {
          color: "#012f4a",
        },
      },
    },
    series: [
      {
        name: "新增游戏玩家",
        color: "",
        type: "line",
        data: yearData[0].data[0],
        smooth: true,
      },
      {
        name: "新增消费玩家",
        type: "line",
        data: yearData[0].data[1],
        smooth: true,
      },
    ],
  };
  //把配置给示例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  //点击2020和2021的切换效果
  $(".line h2").on("click", "a", function () {
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    myChart.setOption(option);
    //没有实现年份数据跳转的功能，试着用vue实现
  });
})();
//折线图2右侧
(function () {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      textStyle: {
        color: "ragb(255,255,255,0.5)",
        fontSize: "12",
      },
      top: "0%",
      textStyle: {
        color: "ragb(255,255,255,0.5)",
        fontSize: "12",
      },
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true,
    },
    xAxis: {
      axisLabel: {
        textStyle: {
          color: "ragb(255,255,255,0.5)",
          fontSize: "12",
        },
      },
      axisLine: {
        lineStyle: {
          color: "ragb(255,255,255,0.2)",
        },
      },
      type: "category",
      data: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
    },
    yAxis: {
      type: "value",
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: "ragb(255,255,255,0.2)",
        },
      },
      axisLabel: {
        textStyle: {
          color: "ragb(255,255,255,0.5)",
          fontSize: "12",
        },
      },
      splitLine: {
        lineStyle: {
          color: "ragb(255,255,255,0.1)",
        },
      },
    },
    series: [
      {
        name: "邮件营销",
        smooth: true,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1,132,213,0.4)", //渐变起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1,132,213,0.1)", //渐变后终点颜色
              },
            ],
            false
          ),
          shadowColor: "rgba(0,0,0,0.1)",
        },
        //拐点
        symbol: "circle",
        //拐点大小
        symbolSize: "10",
        //鼠标经过时显示
        showSymbol: false,
        //拐点样式
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221,220,107,.1)",
          borderWidth: 12,
        },
        data: [
          30, 140, 230, 340, 130, 240, 330, 140, 230, 340, 30, 140, 230, 340,
          230, 240, 330, 40, 330, 40, 130, 40, 130, 140, 30, 40, 30, 40, 30, 40,
        ],
        type: "line",
        lineStyle: {
          color: "#0184d5",
          width: "2",
        },
      },
      {
        name: "搜索引擎",
        smooth: true,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1,132,213,0.4)", //渐变起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1,132,213,0.1)", //渐变后终点颜色
              },
            ],
            false
          ),
          shadowColor: "rgba(0,0,0,0.1)",
        },
        //拐点
        symbol: "circle",
        //拐点大小
        symbolSize: "10",
        //鼠标经过时显示
        showSymbol: false,
        //拐点样式
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221,220,107,.1)",
          borderWidth: 12,
        },
        data: [
          130, 40, 130, 40, 230, 40, 15, 40, 130, 40, 230, 40, 130, 40, 30, 40,
          15, 140, 130, 240, 230, 40, 130, 240, 30, 40, 130, 240, 30, 240,
        ],
        type: "line",
        lineStyle: {
          color: "rgb(0, 255, 0)",
          width: "2",
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//饼形图3下
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  option = {
    color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
    tooltip: {
      trigger: "item",
    },
    legend: {
      //top: "5%",
      //orient: "vertical",
      //left: "10",
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgb(255,255,255)",
        fontSize: "12",
      },
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        center: ["50%", "50%"],
        radius: ["40%", "60%"],
        avoidLabelOverlap: false,
        label: {
          //是否展示列表信息
          show: true,
          fontSize: 20,

          //position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "20",
            fontWeight: "bold",
          },
        },
        //信息连接线
        labelLine: {
          show: true,
        },
        data: [
          { value: 1048, name: "0-20岁" },
          { value: 735, name: "20-29岁" },
          { value: 580, name: "30-39岁" },
          { value: 484, name: "40-49岁" },
          { value: 300, name: "50岁以上" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//饼形图3右
(function () {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    title: {
      text: "2021年",
      subtext: "10月",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      left: "center",
      top: "bottom",
      bottom: "0",
      itemHeight: 10,
      itemWidth: 10,
      textStyle: {
        color: "rgb(255,255,255)",
      },
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "地区分布",
        type: "pie",
        radius: [10, 70],
        center: ["50%", "50%"],
        roseType: "radius",
        //图形文字标签设置
        label: {
          fontSize: 20,
          color: "white",
        },
        labelLine: { length: 6, length2: 8 },
        itemStyle: {
          borderRadius: 5,
        },
        data: [
          { value: 30, name: "云南" },
          { value: 28, name: "北京" },
          { value: 26, name: "山东" },
          { value: 24, name: "河北" },
          { value: 22, name: "江苏" },
          { value: 20, name: "浙江" },
          { value: 18, name: "四川" },
          { value: 16, name: "湖南" },
          { value: 17, name: "湖北" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
//中间地图盒子
(function () {
  var myChart = echarts.init(document.querySelector(".map .map3"));
  $.get("china.json", function (ret) {
    //console.log(ret);
    echarts.registerMap("worldMap", ret);
    option = {
      title: {
        text: "中国地图",
        top: "90%",
        left: "45%",
        textStyle: {
          fontSize: 30,
          color: "#fff",
        },
      },
      geo: {
        type: "map",
        map: "worldMap",
        roam: false, //设置允许拖动和缩放
        label: {
          show: true,
        },
        zoom: 1, //默认缩放大小
        center: [105, 35], //中心位置
      },
    };
    myChart.setOption(option);
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
