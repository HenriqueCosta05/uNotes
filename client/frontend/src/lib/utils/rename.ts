export default function rename(text: string) {
    if (!text) {
        throw new Error('Input text cannot be null or empty');
    }
    const renamedText = text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
    return renamedText;
}