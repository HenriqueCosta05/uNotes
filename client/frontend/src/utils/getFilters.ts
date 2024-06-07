import readJSON from "./readJSON";
//This function basically receives the filters name conditionally, while there are filters.
export const getFilters = async () => {
    try {
        const data = await readJSON();
        const filters = data.appinfo.notes[3].options;
        if (filters) {
            return filters;
        }
        else {
            return "Error: No filters found";
        }
    } catch (error) {
        console.error(error);
    }
}