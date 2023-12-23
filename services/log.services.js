
import chalk  from 'chalk'
import dedent  from 'dedent-js'

const {bgRed, bgGreen, bgCyan, bgYellow } =chalk


const printError = (err) => {

    console.log( bgRed('Error')+' '+ err)

}



const printSuccess = (message) => {

    console.log( bgGreen('Success')+' '+ message)

}

const printHelp = () => {

    console.log( 
       dedent`${bgCyan('HELP')}
        Without paramets - weather output
        -s [CITY] for setting CITY
        -h for help output
        -t [API_KEY] for save token
        `
    )

}

const printWeather =(res, icon )=> {

    console.log( 
        dedent`${bgYellow('WHEATHER')} Weather in city ${res.name}
         ${icon} ${res.weather[0].description}
         Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
         Humidity: ${res.main.humidity}%
         Wind: ${res.wind.speed}
         `
     )

}

export {printError, printSuccess, printHelp, printWeather}