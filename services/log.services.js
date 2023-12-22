
import chalk  from 'chalk'
import dedent  from 'dedent-js'

const {bgRed, bgGreen, bgCyan} =chalk


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

export {printError, printSuccess, printHelp}