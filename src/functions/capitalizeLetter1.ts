export const capitalizeLetter1 = (word: string, capitalize = false) => {
  const restOfTheWordPart = word.split("/")[2];

  if (capitalize)
    return restOfTheWordPart
      .at(0)
      ?.toUpperCase()
      ?.concat(restOfTheWordPart.slice(1));
  return restOfTheWordPart;
};
