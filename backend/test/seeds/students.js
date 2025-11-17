exports.seed = function(knex) {
  return knex('student').del()
    .then(function () {
      return knex('student').insert([
        { id: 'S001', name: 'Supun Mihiranga', age: 10, hometown: 'Colombo'},
        { id: 'S002', name: 'Sandun Perera', age: 9, hometown: 'Galle'},
        { id: 'S003', name: 'Isuri De Silva', age: 10, hometown: 'Kandy'}
      ]);
    });
};