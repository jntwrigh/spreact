// Actions
const addOne = () => {
  return {
    type: 'INCREMENT'
  }
};

const subtractOne = () => {
  return {
    type: 'DECREMENT'
  }
};

export { addOne, subtractOne };