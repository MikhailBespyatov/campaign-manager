export const commaInserterRegExp = new RegExp(/\d{1,3}(?=(\d{3})*$)/g);
export const spaceInserterRegExp = new RegExp(/\d{1,4}(?=(\d{4})*$)/g);
export const slashInserterRegExp = new RegExp(/\d{1,2}(?=(\d{2})*$)/g);
export const removeRightSlashRegExp = new RegExp(/[/]+$/g);

export const oneCapitalCharRequiredRegExp = new RegExp(/[A-Z]/);
export const atLeastOneNumberRequiredRegExp = new RegExp(/[0-9]/);

export const onlySimpleCharactersAllowedRegExp = new RegExp(/^[0-9A-Za-z ]+$/);
export const onlySymbolAndNumbersRegExp = new RegExp(/^[0-9A-Za-z]+$/);
