(async () => {
  try {
    const db = require('./database');

    console.log('=== Student CRUD Verification ===\n');

    console.log('Initializing database...');
    await db.initializeDatabase();
    console.log('✓ Database initialized\n');

    console.log('Testing addStudent...');
    await db.addStudent(999, 'Test Student', 20, 'Test City');
    console.log('✓ Student added\n');

    console.log('Testing readStudents...');
    let students = await db.readStudents();
    console.log(`✓ Found ${students.length} students`);
    console.log('Sample:', JSON.stringify(students[0]));

    console.log('\nTesting readStudentInfo for id 999...');
    let studentInfo = await db.readStudentInfo(999);
    console.log('✓ Student found:', JSON.stringify(studentInfo[0]));

    console.log('\nTesting updateStudent for id 999...');
    await db.updateStudent('Updated Student', 21, 'Updated City', 999);
    let updatedInfo = await db.readStudentInfo(999);
    console.log('✓ Student updated:', JSON.stringify(updatedInfo[0]));

    console.log('\nTesting deleteStudent for id 999...');
    await db.deleteStudent(999);
    let deleted = await db.readStudentInfo(999);
    console.log('✓ Student deleted, query result:', JSON.stringify(deleted));

    console.log('\n=== All student CRUD tests passed! ===');
    process.exit(0);
  } catch (err) {
    console.error('✗ Test failed');
    console.error(err);
    process.exit(1);
  }
})();
