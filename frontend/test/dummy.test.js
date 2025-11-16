import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Dummy Application Test`
    .page`http://localhost:4200/`
    .requestTimeout(15000);

test('Verify application loads successfully', async t => {
    // First initialize the database
    await t.navigateTo('/dbinitialize');
    
    // Wait a bit for database to initialize
    await t.wait(2000);
    
    // Navigate to home page to load teacher table
    await t.navigateTo('/');
    
    // Wait for page to load
    await t.wait(2000);
    
    // Test that the application loads and displays the teacher table
    const teacherTable = Selector('#teacher-table');
    await t.expect(teacherTable.exists).ok('Teacher table should exist on home page');
    
    // Verify table is visible
    await t.expect(teacherTable.visible).ok('Teacher table should be visible');
    
    // Navigate to student page by clicking the student link
    const studentLink = Selector('#student-link');
    await t.expect(studentLink.exists).ok('Student link should exist');
    await t.click(studentLink);
    
    // Wait for navigation and page load
    await t.wait(2000);
    
    // Verify student table exists
    const studentTable = Selector('#student-table');
    await t.expect(studentTable.exists).ok('Student table should exist on student page');
    
    // Verify table is visible
    await t.expect(studentTable.visible).ok('Student table should be visible');
});
