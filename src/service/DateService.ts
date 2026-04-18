import { DateTime, Settings } from "luxon";

const SPAIN_TIMEZONE = 'Europe/Madrid';
const MEXICO_TIMEZONE = 'America/Mexico_City';
const CHILE_TIMEZONE = 'America/Santiago';

export type Country = "Mexico" | "Chile" | "Spain";

export const TIMEZONES: Record<Country, string> = {
    Mexico: MEXICO_TIMEZONE,
    Chile: CHILE_TIMEZONE,
    Spain: SPAIN_TIMEZONE,
}

export function getCountryTime (country: Country) {
    Settings.defaultZone = TIMEZONES['Spain'];

    const date = DateTime.now().setZone(TIMEZONES[country]);

    return date.toFormat("HH':'mm':'ss");
}