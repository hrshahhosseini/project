const persian_numbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
const english_numbers = ['0', '1', '2', '3', '۴', '5', '6', '7', '8', '9']
exports.toPersianNumber = (input) => {
    return String(input).split('').map((char) => {

        if (char == english_numbers[char]) {
            return persian_numbers[char]
        }
        else
            return char

    }).join('')
}