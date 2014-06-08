var l = 30, min = 40, max = 100, v = 0.15;
var chartW = 500, chartH = 600;
var screenW = parseInt(d3.select('body').style('width'));
var screenH = screen.availHeight;
var svgH = screenH * 2 / 3;

var svg = d3.select('body').append('svg')
  .attr('width', '100%')
  .attr('height', svgH);

var data = genTransitionData(l, min, max, v);
var scaleY = d3.scale.linear().domain([0, max]).range([0, chartH]);
var scaleColor = d3.scale.linear().domain([0, max]).range(['white', '#2c87ff']);
var scaleX = d3.scale.ordinal();

data = data.map(function(e){
  return Math.round(e);
});

assert('data array has expected length', data.length === l);
data.map(function(e){
  assert('e is between bounds', e >= min && e <= max);
});

var g = svg.append('g')
  .attr('transform', 'translate(' + ((screenW - chartW) / 2) 
    + ',' + ((svgH - chartH) / 2) + ')');

scaleX.domain(d3.range(l)).rangeRoundBands([0, chartW], 0.15);

var bars = g.selectAll('.bar')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', function(d, i){
    // fix this - use roundBands:
    // return i * 15;  // 10 for bar, 5 for space
    return scaleX(i);
  })
  .attr('y', function(d){
    return (svgH - chartH) / 2 + chartH - scaleY(d);
  })
  .attr('width', scaleX.rangeBand())  // <-- fix this
  .attr('height', scaleY)
  .style('fill', scaleColor);

console.log(data);