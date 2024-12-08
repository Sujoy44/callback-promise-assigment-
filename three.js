function ageInDays(person, logResult) {
    const fullName = person.firstName + " " + person.lastName;
    const ageInDays = person.age * 365;

    const callback = () => {
        console.log(`The person's full name is ${fullName}, and their age in days is ${ageInDays}.`);
    };

    logResult(callback);
}

const person = {
    firstName: "Mithun",
    lastName: "S",
    age: 20
};

ageInDays(person, (callback) => {
    callback();
});

// Output:
// The person's full name is Mithun S, and their age in days is 7300.