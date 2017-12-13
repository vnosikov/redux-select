
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
  let result = {};

  result.selects = selectsAndOptionsStructure.map( (select, sind) => {
    let options = select.options.map( (option, oind) => ({
      id: oind,
      name: option,
      selected: false
    }) );

    return {
      id: sind,
      name: select.selectName,
      isOpen: false,
      options: options,
      textPattern: ''
    };
  });

  result.color = 0;
  return result;
}
