console.log('initial-state.js');

const selectsAndOptionsStructure = [
  {
    selectName: 'Country',
    options: ['Argentine', 'Chile', 'France', 'Germany', 'Japan', 'Russia', 'USA']
  },
  {
    selectName: 'Language',
    options: ['English', 'Russian', 'Spanish']
  }
];

export function buildInitialState() {
  console.log('inside a rabbit hole');
  let result = {};

  result.selects = selectsAndOptionsStructure.map( (select, sind) => {
    let options = select.options.map( (option, oind) => ({
      id: oind,
      name: option,
      selected: false
    }) );

    return {
      id: sind,
      name: select,
      isOpen: false,
      textPattern: ''
    };
  });

  result.color = 0;
  console.log('before leaving a rabbit hole');
  return result;
}
