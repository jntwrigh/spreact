export const getNext = (tx) => {
  return {
    action: 'GET_NEXT_TX',
    tx
  }
};

export const getPrevious = (tx) => {
  return {
    action: 'GET_PREVIOUS_TX',
    tx
  }
};