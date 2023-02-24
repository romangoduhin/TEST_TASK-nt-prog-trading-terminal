export const getCurrentDate = () => {
    return new Date().toISOString()
        .replace('T', ' ')
        .replace('Z', '')
}