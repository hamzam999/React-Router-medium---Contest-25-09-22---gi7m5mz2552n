import React from 'react'

export const Calculator = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const num1 = parseInt(queryParams.get('num1'))
  const num2 = parseInt(queryParams.get('num2'))
  const op = queryParams.get('op')
  let result = 0

  if (op == ' B' || op == '+') {
    result = num1 + num2
  } else if (op === ' D' || op == '-') {
    result = num1 - num2
  } else if (op == ' F' || op == '/') {
    result = num1 / num2
  } else if (op == ' A' || op == '*') {
    result = num1 * num2
  } else if (op == ' 5' || op == '%') {
    result = num1 % num2
  } else {
    result = -1
  }
  return (
    <>
      <span id="calc-result">Your calculation Result is {result} </span>
    </>
  )
}
