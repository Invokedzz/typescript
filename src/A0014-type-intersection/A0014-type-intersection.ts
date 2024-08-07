type haveName = {name: string};
type haveNickname = {nickname: string};
type haveAge = {age: number};
type Dude = haveName & haveNickname & haveAge;
const person: Dude = {
    name: 'Pablo',
    nickname: 'Honey',
    age: 30,
}

console.log(person.name, person.nickname);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
// type Inter = AB & AC & AD;


export default 1;

// & = (AND), | = (OR).