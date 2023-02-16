const matches = require('./match_data.json')

const matchGet = (matchType) => {
    if (matchType.includes('random-button')) {
        return matches[Math.floor(Math.random() * matchType.length)]
    } else {
        return matches[0]
    }
}

export { matchGet }