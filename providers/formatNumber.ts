import currencyFormatter from 'currency-formatter'

export const myRound = (value: number, precision: number) => {
  var multiplier = Math.pow(10, precision || 0)
  return Math.round(value * multiplier) / multiplier
}

export const formatterCurrency = (value: number) => {
  return currencyFormatter.format(value, {
    precision: 2,
    thousand: '.',
    decimal: ',',
  })
}
