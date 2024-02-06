const readJSON = async (): Promise<any> => {
    try {
        const response = await fetch('../../db.json');
        if (!response.ok) {
            throw new Error('HTTP error ' + response.status);
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('Error fetching JSON:', e);
        throw e;
    }
}

export default readJSON;