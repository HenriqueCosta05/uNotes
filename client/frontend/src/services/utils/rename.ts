export default function rename(text: string) {
    if (text) {
        const renamedText = text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
        return renamedText
    }
    else {
        console.error('Error renaming text:', text);
    }
}