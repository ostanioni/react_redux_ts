// Псевдонимы типа

type Age = number

type Person = {
  name: string
  age: Age
}

let age: Age = 55
let driver: Person = {
  name: 'James May',
  age
}
/*___ТИП __________________ ПОДТИП_______

    boolean             Boolean literal
    bigint              BigInt literal
    number              Number literal
    string              String literal
    symbol              unique symbol
    object              Object literal
    Array               Tuple
    enum                const enum
__________________________________________*/