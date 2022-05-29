import * as crud from './js/crud';

crud.getUser(11).then(console.log);
crud.createUser({
    name: 'Fausto',
    job: 'Developer'
}).then(console.log)