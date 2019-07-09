let user = {
    login: 'user@gmail.com',
    password: 'UserPass'
};

let admin = {
    login: 'admin@gmail.com',
    password: 'AdminPass'
};

let unknownUser = {
    login: '',
    password: ''
}

let wrongAlert = {
    w1: 'Canceled',
    w2: 'I don’t know any emails having name length less than 6 symbols',
    w3: 'I don’t know you',
    w4: 'Wrong password',
    w5: 'You have failed the change',
    w6: 'It’s too short password. Sorry.',
    w7: 'You wrote the wrong password.'
    
};

let askAlert = {
    a1: 'Do you want to change your password?',
    a2: 'Please, write the old password',
    a3: 'Please, enter your password',
    a4: 'Enter your email'

};

let rightAlert = {
    r1: 'You have successfully changed your password.'
};

const PASSLENGTH = 6;

unknownUser.login = prompt(askAlert.a4);


!unknownUser.login ? alert(wrongAlert.w1) : unknownUser.password = prompt(askAlert.a3);

unknownUser.login.length < PASSLENGTH ? 
alert(wrongAlert.w2) : unknownUser.password = prompt(askAlert.a3);

console.log(unknownUser)