#!/ust/bin/env node

import { getArgs } from "./helpers/args.js"
import { getIcon, getWeather } from "./services/api.service.js"
import { printError, printHelp, printSuccess, printWeather } from "./services/log.services.js"
import { TOKEN_DICTIONARY, getKeyValue, saveKeyValue } from "./services/storage.service.js"

const saveToken = async (token) => {
	if (!token.length) {
		printError('Empty token');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('Token saved');
	} catch (e) {
		printError(e.message);
	}
}

const saveCity = async (city) => {
	if (!city.length) {
		printError('Empty city');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.city, city);
		printSuccess('City Saved');
	} catch (e) {
		printError(e.message);
	}
}

const getForcast = async () => {
	try {
		const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
		const weather = await getWeather(city);
		printWeather(weather, getIcon(weather.weather[0].icon));
	} catch (e) {
		if (e?.response?.status == 404) {
			printError('Error city name');
		} else if (e?.response?.status == 401) {
			printError('Error token name');
		} else {
			printError(e.message);
		}
	}
}

const initCLI = () => {
	const args = getArgs(process.argv);
	if (args.h) {
		return printHelp();
	}
	if (args.s) {
		return saveCity(args.s);
	}
	if (args.t) {
		return saveToken(args.t);
	}
	return getForcast();
};

initCLI();