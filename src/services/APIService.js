

class APIService {
    static async getPokemonsByLimit(limit){
      const baseUrl = "https://pokeapi.co/api/v2/pokemon"
      const response = await fetch(`${baseUrl}?limit=${limit}`)
  
      return response.json();
    }
  
    static async getPokemonsById(url) {
      const response = await fetch(url)
      return response.json();
    }
}


export default APIService;