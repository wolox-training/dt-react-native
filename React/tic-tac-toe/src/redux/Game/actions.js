export const X_IS_NEXT = 'X_IS_NEXT';
export const CHANGE_STEP_NUMBER = 'CHANGE_STEP_NUMBER';
export const CHANGE_STEP = 'CHANGE_STEP';
export const CHANGE_X_IS_NEXT = 'CHANGE_X_IS_NEXT';

export const changeStep = (number, bool) => ({ type: CHANGE_STEP, number, bool });
