var Name = $("#name-text");
console.log(":D")
function getPokemon() {
    console.log("getting")
  $.ajax({
    method: "GET",
    url: "http://pokeapi.co/api/v2/pokemon/1",    
    success: function(res) {
      console.log("got it")
      console.log(res)
      Name.html(res["name"] + "'s ID is " + res["id"])
      
    }
  })
}

