function first() {
    const apiData = {
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon',
        id: document.getElementsByClassName("search_input")[0].value,
    }

    const { url, type, id } = apiData

    const apiUrl = `${url}${type}/${id}`

    fetch(apiUrl)
        .then((data) => {
            if (data.ok) {
                return data.json()
            }
            throw new Error('Response not ok.');
        })
        .then(div6 => generateHtml(div6))
        .catch(error => console.error('Error:', error))


    const generateHtml = (data) => {
        console.log(data)
        const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.back_default} height="150px" width="150px">
        <img src=${data.sprites.front_default} height="150px" width="150px">
    `
        console.log(html);
        const pokemonDiv = document.querySelector('.div6');
        pokemonDiv.innerHTML = html;
    }

}