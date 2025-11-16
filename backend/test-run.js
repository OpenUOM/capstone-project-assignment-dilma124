(async () => {
  try {
    const db = require('./database');

    console.log('Initializing database (migrations + seeds)...');
    await db.initializeDatabase();
    console.log('Database initialized');

    console.log('Adding test teacher with id 999...');
    await db.addTeacher(999, 'Unit Test Teacher', 55);
    console.log('Insert completed');

    console.log('Reading teacher info for id 999...');
    let t = await db.readTeacherInfo(999);
    console.log('Read result:', JSON.stringify(t));

    console.log('Updating teacher id 999...');
    await db.updateTeacher('Updated Teacher', 56, 999);
    console.log('Update completed');

    console.log('Reading teacher info after update...');
    t = await db.readTeacherInfo(999);
    console.log('Read after update:', JSON.stringify(t));

    console.log('Deleting teacher id 999...');
    await db.deleteTeacher(999);
    console.log('Delete completed');

    console.log('Verification script finished successfully');
    process.exit(0);
  } catch (err) {
    console.error('Verification script failed');
    console.error(err);
    process.exit(1);
  }
})();
