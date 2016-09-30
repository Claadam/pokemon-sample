var Output = $("#output-text");

console.log(":D")
function getPokemon() {
  $.ajax({
    method: "GET",
    url: "http://pokeapi.co/api/v2/pokemon/1",    
    success: function(res) {
      console.log("got it")
      console.log(res)
      Output.val(res)
    }
  })
}

