function update_sample() {
  var numbers = [[10],
    [21, 11],
    [32, 25, 10],
    [12, 21],
    [30]];

  var sample = {},
    svgG = d3.select("#circles"),
    index = 0,
    end = numbers.length - 1,
    par = d3.select("#numbers");

  sample.next = function () {
    var data = numbers[index];
    par.html(data.toString());

    // DATA JOIN
    // Join new data with old elements, if any.
    var selection = svgG.selectAll("circle")
      .data(data);
      
    // UPDATE
    // Update old elements as needed.
    selection.transition()
      .duration(750)
      .attr("r", function (d) { return d; });

    // ENTER
    // Create new elements as needed.
    selection.enter().append("circle")
      .attr("cy", function (d, i) { return 100 * (i + 1); })
      .attr("cx", 50)
      .attr("r", function (d) { return d; });

    // EXIT
    // Remove old elements as needed.
    selection.exit().remove();

    index = index < end ? index + 1 : 0;
    return sample;
  }

  return sample;
}