const
    chalk = require('chalk'),
    an = require('chalk-animation')

const success = mssg => console.log(success(mssg))
const error = mssg => console.log(error(mssg))

const rainbow = mssg => setTimeout(() => an.rainbow(mssg).start(), 100)
const radar = mssg => setTimeout(() => an.radar(mssg).start(), 100)

module.exports = {
    error,
    success,
    rainbow,
    radar
}
