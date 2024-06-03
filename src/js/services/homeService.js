export let homeService = {
    fetch: async (page) => {
        let results = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        return await results.json();
    },
    fetchBySomething: async (args)=>{
        let results = await fetch(`https://rickandmortyapi.com/api/character/?page=${args[0]}&name=${args[1]}`)
     
        return await results.json();
    }
}