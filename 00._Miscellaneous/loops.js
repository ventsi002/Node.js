const rocks = [
    { name: "Led Zeppelin", age: 50 },
    { name: "Dwayne Johnson", age: 47 },
    { name: "neptune", age: 100_000_000_000 }
];

//loop methods: map, filter, find, reduce, sort, forEach

const rocksAgedOneYear = rocks.map(rock => {
    return { ...rock, age: rock.age + 1 };
})

console.log(rocksAgedOneYear);

const evenAgeRocks = rocks.filter(rock => rock.age % 2 === 0)

console.log(evenAgeRocks);