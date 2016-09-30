var Name = $("#name-text");
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
      Name.html(res["name"])
      id.html("id is" + res["id"])
      
    }
  })
}

