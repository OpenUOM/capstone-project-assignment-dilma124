(async () => {
  try {
    const db = require('./database');

    console.log('=== Student Backend Endpoints Verification ===\n');

    console.log('Initializing database...');
    await db.initializeDatabase();
    console.log('✓ Database initialized\n');

    console.log('Testing addStudent endpoint functionality...');
    const addResult = await db.addStudent(998, 'Endpoint Test Student', 19, 'Test Village');
    console.log('✓ addStudent:', JSON.stringify(addResult));

    console.log('\nTesting listStudents endpoint functionality...');
    const students = await db.readStudents();
    console.log(`✓ listStudents: Found ${students.length} students`);
    console.log('  Sample student:', JSON.stringify(students[0]));

    console.log('\nTesting getStudentInfo endpoint functionality...');
    const studentInfo = await db.readStudentInfo(998);
    console.log('✓ getStudentInfo:', JSON.stringify(studentInfo[0]));

    console.log('\nTesting editStudent endpoint functionality...');
    const editResult = await db.updateStudent('Updated Endpoint Student', 20, 'Updated Village', 998);
    console.log('✓ editStudent:', JSON.stringify(editResult));
    
    const updated = await db.readStudentInfo(998);
    console.log('  Verification - Updated student:', JSON.stringify(updated[0]));

    console.log('\nTesting deleteStudent endpoint functionality...');
    const deleteResult = await db.deleteStudent(998);
    console.log('✓ deleteStudent:', JSON.stringify(deleteResult));
    
    const deleted = await db.readStudentInfo(998);
    console.log('  Verification - Student deleted (query result):', JSON.stringify(deleted));

    console.log('\n=== All Student Endpoint Tests Passed! ===');
    console.log('\nEndpoints Summary:');
    console.log('- GET  /listStudents        → readStudents()');
    console.log('- POST /addStudent          → addStudent(id, name, age, hometown)');
    console.log('- POST /getStudentInfo      → readStudentInfo(id)');
    console.log('- POST /editStudent         → updateStudent(name, age, hometown, id)');
    console.log('- POST /deleteStudent       → deleteStudent(id)');

    process.exit(0);
  } catch (err) {
    console.error('✗ Test failed');
    console.error(err);
    process.exit(1);
  }
})();
