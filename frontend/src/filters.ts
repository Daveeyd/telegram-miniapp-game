import { BASE_URL } from './configurations/HttpConfiguration';

export const filters = {
    truncate(value: string = "", maxLength: number = 0): string {
        if (value.length > maxLength) {
            return value.substring(0, maxLength) + '...';
        }
        return value;
    },
    numberFormat(value: number = 0): string {
        if (Number.isInteger(value)) {
            return value.toLocaleString();
        } else {
            return value.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
    },
    serverLinkFormat(link: string = ""): string {
        return BASE_URL + link;
    },
};