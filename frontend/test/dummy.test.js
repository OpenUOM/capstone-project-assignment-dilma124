import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Dummy Application Test`
    .page`http://localhost:4401/`;

test('Verify application loads successfully', async t => {
    // Test that the application loads and displays the teacher table
    const teacherTable = Selector('#teacher-table');
    await t.expect(teacherTable.exists).ok('Teacher table should exist on home page');
    
    // Navigate to student page
    await t.click('#student-link');
    const studentTable = Selector('#student-table');
    await t.expect(studentTable.exists).ok('Student table should exist on student page');
});
