//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.



//variables globales  
//los datos
  //crear una variable llamada ciudades
  var ciudades = [
    {name:'Chile',population:19},
    {name:'Bolivia',population:20},
    {name:'Mexíco',population:93},
    {name:'Brasil',population:81}
  ];

  //seleccionar todos los "circle" en el documento  
  d3.selectAll('circle')
    .data(ciudades)
    .attr('fill','#088A08')
    .attr('r', function(d) {
      return d.population / 100;
    })
  //seleccionar todos los "text" en el documento      
  d3.selectAll('text')
    .data(ciudades)
    .attr('fill','#088A08')                      
    .text(function(d) {
      return ". " + d.name;
    });

var width = 450;
var height = 450;
