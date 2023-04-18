import Data from "../../types/data"
import ErrorHandeler from "../../types/ErrorHandeler";

const records_address = import.meta.env.VITE_RECORDS_ADDRESS;

// Pro tip: stop writing code at 1AM
const insert = (data: Data): ErrorHandeler => {
    let records = get();

    if (!records) {
        localStorage.setItem(records_address, JSON.stringify([data]));

        return {
            error: false,
        };
    }

    try {
        records.push(data);
        localStorage.setItem(
            records_address,
            JSON.stringify(records),
        );
    }
    catch (e: any) {
        return {
            error: true,
            message: e.message
        };
    }


    return {
        error: false
    };
}

const get = (): Data[] => {
    const data = JSON.parse(
        localStorage.getItem(records_address) || '' // '' == false... js is weird
    ) as Data[];

    return data;
}

export { insert, get };