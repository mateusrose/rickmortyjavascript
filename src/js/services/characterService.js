export let characterService = {
    fetch: async (id) => {
        let results = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
       
        return await results.json();
    }
}