// TUGAS 1

str = 'kasur rusak'
output = ''

for (let i = str.length - 1; i >= 0; i--) {
    output += str[i]
}
if (output == str) {
    console.log('palindrom');
} else if (output != str) {
    console.log('not palindrom');
}


// TUGAS 2

let kata = 'jakarta'
result = ''
for (let i = 0; i < kata.length; i++) {
    if (kata[i] == 'a') {
        result += 'o'
    } else {
        result += kata[i]
    }
}
console.log(result);

