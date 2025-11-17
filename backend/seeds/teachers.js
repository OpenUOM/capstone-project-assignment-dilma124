exports.seed = function(knex) {
  return knex('teacher').del()
    .then(function () {
      return knex('teacher').insert([
        { id: 'T001', name: 'Kusuma Ranasinghe', age: 45},
        { id: 'T002', name: 'Saman De Silva', age: 40},
        { id: 'T003', name: 'Parasanna Mahagamage', age: 30}
      ]);
    });
};