import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE,
    projectId: process.env.FIREBASE_PROJECT,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
/*
database.ref().set({
    name: 'edison',
    age: 39,
    isSingle: true,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'google',
    },
    location: {
        city: 'Quito',
        country: 'Ecuador',
    },
}).then(() => {
    console.log('Data is Saved');
}).catch((error) => {
    console.log('This failed. ', error);
});
*/
// changing elements
// database.ref('age').set(40);
// database.ref('location/city').set('tokio');
/*
database.ref('attributes').set({
    height: 177,
    weight: 75,
}).then(() => {
    console.log('Attributes added');
}).catch((error) => {
    console.log('Unable to set attributes. ', error);
});
 */

// remove elements
// passing null to set is equal to remove
/*
database.ref('isSingle').remove(() => {
    console.log('removed');
});

database.ref().remove().then(() => {
    console.log('database removed');
}).catch((error) => {
    console.log('error ', error);
});
*/

// update elements
/*
database.ref().update({
    'name': 'dan', // modifica name
    'age': 25, // modifica age
    'isSingle': null, // elimina single
    'location/city': 'tokio', // si son objetos se usa esta sintaxis
    'job/company': 'Amazon',
    'stressLevel': 9,
}).then(() => {
    console.log('update succesfully');
}).catch((error) => {
    console.log('Error updating: ', error);
});

*/

// select elements
// once obtiene los datos una sola vez y no los consulta nuevamente
/*
database.ref().once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((error) => {
        console.log('Database error: ', error);
    });
*/
// on me permite subscribirme a cambios, no se puede usar promesas,
// se debe usar el callback

/*
const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (error) => {
    console.log('Error fetching data: ', error);
});

setTimeout(() => {
    database.ref('age').set(45);
}, 3000);

setTimeout(() => {
    // database.ref().off(); // desuscribe todas
    database.ref().off(onValueChange);
}, 5000);

setTimeout(() => {
    database.ref('age').set(47);
}, 7000);
*/
// challenge
database.ref().on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(`${data.name} is a ${data.job.title} from ${data.location.country}`);
});

setTimeout(() => {
    database.ref().update({
        'name': 'carla',
        'job/title': 'medic',
        'location/country': 'peru',
    });
}, 3000);
setTimeout(() => {
    database.ref().update({
        'name': 'pepe',
        'job/title': 'athlete',
        'location/country': 'greece',
    });
}, 5000);

// datos como arregos se deben ingresar con push
database.ref('notes').push({
    title: 'to do too',
    details: 'fkdsita',
});


/*
const expense1 = {
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0,
};
const expense2 = {
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
};
const expense3 = {
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf(),
};
*/
// database.ref('expenses').push(expense1);
// database.ref('expenses').push(expense2);
// database.ref('expenses').push(expense3);

/*
database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });
        console.log(expenses);
    });

database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });
        console.log(expenses);
    });
*/

// child events
database.ref('expenses').on('child_removed',
    (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });
database.ref('expenses').on('child_changed',
    (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });
// es llamado para todos los elementos los nuevos y los ya existentes
database.ref('expenses').on('child_added',
    (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });
