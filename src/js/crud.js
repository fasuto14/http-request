const urlCrud = 'https://reqres.in/api/users';

const getUser = async (id) => {
    const resp = await fetch(`${urlCrud}/${id}`);
    const { data } = await resp.json();
    return data;
};

const createUser = async (usuario) => {
    const resp = await fetch(urlCrud, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}

const actualizeUser = async (id, usuario) => {
    const resp = await fetch(`${urlCrud}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getUser,
    createUser,
    actualizeUser
}