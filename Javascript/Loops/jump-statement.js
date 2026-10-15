//jump statements in JavaScript are used to control the flow of loops and switch statements. The two main jump statements are break and continue.   

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // exit the loop when i is equal to 3
    }
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; // skip the current iteration when i is equal to 3
    }
    console.log(i);
}