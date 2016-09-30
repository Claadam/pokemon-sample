var name = $("#name-text");
var id = $("#id-text");

console.log(":D")
function getPokemon() {
    console.log("getting")
  $.ajax({
    method: "GET",
    url: "http://pokeapi.co/api/v2/pokemon/1",    
    success: function(res) {
      console.log("got it")
      console.log(res)
      name.html(res["name"])
      id.html(res["id"])
      
      console.log(Output)
    }
  })
}

