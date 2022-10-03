let divideAndSort = (num) => {

    if (isNaN(num)) {
        console.log(`input must be number!`);
    } else {
        const output = num.toString().split(0).map((item) => item.split("").sort().join("")).join("")
        console.log(output)
    }
}

divideAndSort(5956560159466056)
// 55566914566956




