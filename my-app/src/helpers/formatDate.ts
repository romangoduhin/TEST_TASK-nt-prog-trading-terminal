export const formatDate = (date: string) => {
    let formattedDate = new Date(date);
    return formattedDate.getHours() + ":" + formattedDate.getMinutes()
}