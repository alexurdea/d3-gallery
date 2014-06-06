var data = [100, 200, 300];
var r = 200;

var color = d3.scale.ordinal().range(['green', '#54d154', '#659165']);

var svg = d3.select('body').append('svg')
  .attr('width', '100%')
  .attr('height', screen.availHeight / 3 * 2);

var group = svg.append('g')
  .attr('transform', 'translate(300, 300)');

var arc = d3.svg.arc()
  .innerRadius(r / 5 * 2.5)
  .outerRadius(r);

var pie = d3.layout.pie();

var arcs = group.selectAll('.arc')
  .data(pie(data))
  .enter()
  .append('g')
  .attr('class', 'arc');

arcs.append('path')
  .attr('d', arc)
  .attr('fill', function(d){
    return color(d.data);
  });