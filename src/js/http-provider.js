const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const userUrl = 'https://reqres.in/api/users?page=2';

const obtenerChiste = async () => {
    try {
        const resp = await fetch(jokeUrl);
        if (!resp.ok) return alert('No se pudo realizar la peticion');
        const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value };
    }
    catch (err) {
        throw err;
    }

}

const obtenerUsuarios = async () => {
    const resp = await fetch(userUrl);
    const { data: usuarios } = await resp.json();
    return usuarios;
}

// fetch(jokeUrl)
//     .then(resp => resp.json())
//     .then(({ id, value }) => {
//         console.log(id, value)
//     });

export {
    obtenerChiste,
    obtenerUsuarios
}