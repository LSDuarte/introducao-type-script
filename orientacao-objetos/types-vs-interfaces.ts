// Types vs Interfaces
type Sex = 'male' | 'famale'
type Animal = {
    sex: Sex
    hungry: boolean
    age: number
}

interface Mammal extends Animal {
    weaned: boolean
}

type Person = Mammal & {
    name: string
}

const animal: Person = {
    hungry: false,
    weaned: true,
    sex: 'male',
    age: 6,
    name: 'Sei la'
}

interface Greet {
    (name: string): string
}
const greet: Greet = name => 'Hello, ' + name

type GreetMethod = (name: string) => string

const greett = (name: string) => 'Hello, ' + name