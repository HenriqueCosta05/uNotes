export function validateFullName(fullName: string): string | undefined {
    if (!fullName) return "Please enter your full name.";
    if (fullName.length < 5) return "Minimum length is 5 characters.";
    if (!/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(fullName)) return "Invalid full name format.";
    return undefined;
}