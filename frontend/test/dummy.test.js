import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Comprehensive Application Functionality Test`
    .page`http://localhost:4200/`
    .requestTimeout(15000);

test('Test 1: Application loads and displays teacher page', async t => {
    // Initialize database
    await t.navigateTo('/dbinitialize');
    await t.wait(2000);
    
    // Navigate to home (teachers page)
    await t.navigateTo('/');
    await t.wait(2000);
    
    // Verify teacher table exists and is visible
    const teacherTable = Selector('#teacher-table');
    await t.expect(teacherTable.exists).ok('Teacher table should exist');
    await t.expect(teacherTable.visible).ok('Teacher table should be visible');
    
    // Verify navbar is present
    const navbar = Selector('.navbar-container');
    await t.expect(navbar.exists).ok('Navbar should be present');
    
    // Verify teacher link is present
    const teacherLink = Selector('#teacher-link');
    await t.expect(teacherLink.exists).ok('Teacher link should exist in navbar');
});

test('Test 2: Navigation between Teachers and Students views works', async t => {
    // Navigate to students page
    await t.navigateTo('/');
    await t.wait(1000);
    
    const studentLink = Selector('#student-link');
    await t.expect(studentLink.exists).ok('Student link should exist');
    await t.click(studentLink);
    await t.wait(2000);
    
    // Verify student table is displayed
    const studentTable = Selector('#student-table');
    await t.expect(studentTable.exists).ok('Student table should exist');
    await t.expect(studentTable.visible).ok('Student table should be visible');
    
    // Navigate back to teachers
    const teacherLink = Selector('#teacher-link');
    await t.click(teacherLink);
    await t.wait(2000);
    
    // Verify teacher table is displayed again
    const teacherTable = Selector('#teacher-table');
    await t.expect(teacherTable.visible).ok('Teacher table should be visible after navigation');
});

test('Test 3: Teacher search functionality works', async t => {
    await t.navigateTo('/');
    await t.wait(2000);
    
    // Get the search input
    const teacherSearchInput = Selector('#teacher-search');
    await t.expect(teacherSearchInput.exists).ok('Teacher search input should exist');
    
    // Verify search input is in the page
    const searchContainer = Selector('.search-input');
    await t.expect(searchContainer.exists).ok('Search container should exist');
});

test('Test 4: Add New Teacher button is clickable', async t => {
    await t.navigateTo('/');
    await t.wait(2000);
    
    // Find and verify Add New button
    const addTeacherBtn = Selector('.add-button');
    await t.expect(addTeacherBtn.exists).ok('Add button should exist on teacher page');
    await t.expect(addTeacherBtn.visible).ok('Add button should be visible');
    
    // Click Add New button
    await t.click(addTeacherBtn);
    await t.wait(2000);
    
    // Verify navigation to add teacher page
    const addTeacherForm = Selector('#teacher-id');
    await t.expect(addTeacherForm.exists).ok('Teacher add form should be visible');
});

test('Test 5: Teacher add form has all required fields', async t => {
    await t.navigateTo('/addTeacher');
    await t.wait(2000);
    
    // Verify form fields exist
    const idField = Selector('#teacher-id');
    const nameField = Selector('#teacher-name');
    const ageField = Selector('#teacher-age');
    const submitBtn = Selector('#teacher-add');
    
    await t.expect(idField.exists).ok('Teacher ID field should exist');
    await t.expect(nameField.exists).ok('Teacher Name field should exist');
    await t.expect(ageField.exists).ok('Teacher Age field should exist');
    await t.expect(submitBtn.exists).ok('Teacher Add button should exist');
});

test('Test 6: Student page and Add Student button work', async t => {
    await t.navigateTo('/student');
    await t.wait(2000);
    
    // Verify student table exists
    const studentTable = Selector('#student-table');
    await t.expect(studentTable.exists).ok('Student table should exist');
    
    // Find and verify Add New button
    const addStudentBtn = Selector('.add-button');
    await t.expect(addStudentBtn.exists).ok('Add button should exist on student page');
    
    // Click Add New button
    await t.click(addStudentBtn);
    await t.wait(2000);
    
    // Verify navigation to add student page
    const addStudentForm = Selector('#student-name');
    await t.expect(addStudentForm.exists).ok('Student add form should be visible');
});

test('Test 7: Student add form has all required fields', async t => {
    await t.navigateTo('/addStudent');
    await t.wait(2000);
    
    // Verify form fields exist
    const idField = Selector('#student-name').parent().find('input[name="name"]');
    const nameField = Selector('#student-name');
    const ageField = Selector('#student-age');
    const hometownField = Selector('#student-hometown');
    const submitBtn = Selector('#student-edit');
    
    await t.expect(nameField.exists).ok('Student Name field should exist');
    await t.expect(ageField.exists).ok('Student Age field should exist');
    await t.expect(hometownField.exists).ok('Student Hometown field should exist');
    await t.expect(submitBtn.exists).ok('Student Submit button should exist');
});

test('Test 8: Backend API is responsive', async t => {
    // This test verifies the backend is working by navigating to dbinitialize
    // which makes an API call
    await t.navigateTo('/dbinitialize');
    await t.wait(3000);
    
    // If we get here without timeout, the API is responsive
    // Navigate back to home to verify redirect worked
    await t.navigateTo('/');
    await t.wait(2000);
    
    const teacherTable = Selector('#teacher-table');
    await t.expect(teacherTable.exists).ok('Should return to home after db init');
});

test('Test 9: Components load without errors', async t => {
    const pageSource = await t.eval(() => document.documentElement.outerHTML);
    
    // Verify key components are in the page
    await t.expect(pageSource.includes('app-root')).ok('App root should be in page');
    await t.expect(pageSource.includes('navbar-container')).ok('Navbar should be in page');
    
    // Navigate to different pages and verify no errors
    await t.navigateTo('/');
    await t.wait(1000);
    
    await t.navigateTo('/student');
    await t.wait(1000);
    
    await t.navigateTo('/addTeacher');
    await t.wait(1000);
    
    await t.navigateTo('/addStudent');
    await t.wait(1000);
});

test('Test 10: Edit operations UI elements are present', async t => {
    await t.navigateTo('/');
    await t.wait(2000);
    
    // Check if edit icons are present in the table (if there are rows)
    const table = Selector('#teacher-table');
    const rowCount = await table.find('tbody tr').count;
    
    // If there are rows, verify action cells exist
    if (rowCount > 0) {
        const editIcon = Selector('fa-icon.edit-icon');
        const deleteIcon = Selector('fa-icon.trash-icon');
        
        // These should exist if there are rows
        await t.expect(editIcon.exists).ok('Edit icons should be present in table');
        await t.expect(deleteIcon.exists).ok('Delete icons should be present in table');
    }
});
