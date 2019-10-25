import './style.css'
import * as d3 from 'd3'

const width = 500
const height = 400

const svg = d3.select('svg')

svg.append('circle')
  .attr('r', 40)
  .attr('cx', width / 2)
  .attr('cy', height / 2)
  .style('fill', 'red')
