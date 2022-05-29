import * as crud from './js/crud';

// crud.getUser(11).then(console.log);
// crud.createUser({
//     name: 'Fausto',
//     job: 'Developer'
// }).then(console.log)
// crud.actualizeUser(1, {
//     name: 'Owen',
//     job: 'Molestar all day'
// }).then(console.log);

crud.deleteUser(3).then(console.log)