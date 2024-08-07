enum Colors {
    red = 10, // 0
    blue = 20, // 1
    yellow = 30, // 2
}

enum Colors {
    green = 300,
    lightBlue = 25
}

// Os "enum" se unem.

// Mudei red pra 10, blue pra 20 e yellow pra 30.
console.log(Colors)
console.log(Colors.blue);
console.log(Colors[0]); // Porque o red agora é 10, dá undefined.
console.log(Colors[10]);

