var nemesis = [7, 8, 2, 15, 9]
var grande = nemesis[0]

for (var maior = 1; maior < 5; maior++) {
    if (nemesis[maior] > grande) {
        grande = nemesis [maior]
    }
}

console.log(`O maior número entre ${nemesis} é o: ${grande}`)