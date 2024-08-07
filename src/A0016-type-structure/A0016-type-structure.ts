type User = { username: string, password: string };
type verifyUser = (user: User, sentValue: User) => Boolean;

const verifiedUser: verifyUser = (user, sentValue) => {
    return user.username === sentValue.username && user.password === sentValue.password;
};

const firstUser = { username: 'Peter', password: '123'};
const sentUser = { username: 'Peter', password: '123'};
const login = verifiedUser(firstUser, sentUser);
console.log(login); 

