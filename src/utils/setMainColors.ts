export function setMainColors(bgMainColor: string, fgMainColor: string) {
  let varA = bgMainColor
  let varB = fgMainColor
  return [varA, varB]
}

export let mainColors = setMainColors
