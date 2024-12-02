export function calcTime(startDate : string, endDate :string) :number {

    const startDateT = new Date(startDate)
    const endDateT = new Date(endDate)

    const calcDate = Math.abs(endDateT.getTime() - startDateT.getTime())

    return Math.floor(calcDate / (1000 * 60 * 60 * 24));

}