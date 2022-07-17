export function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function camelCaseToTitleCase(str: string) {
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); });
}