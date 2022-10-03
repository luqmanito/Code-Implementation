let divideAndSort = (num) => {

    if (isNaN(num)) {
        console.log(`input must be number!`);
    } else {
        const result = num.toString().split(0).map((el) => el.split("").sort().join("")).join("")
        console.log(result)
    }
}

divideAndSort(5956560159466056)
// 55566914566956




