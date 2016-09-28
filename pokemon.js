console.log(":D")
function getPokemon() {
  $.ajax({
    console.log(started)
    method: "GET",
    url: "http://pokeapi.co/api/v2/pokemon/1",    
    success: function(res) {
      console.log("got it")
      console.log(res)
    }
  })
}

