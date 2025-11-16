import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student Delete Operations`
    .page`http://localhost:4200/student`;

test('Test 1: Delete a student and verify removal from table', async t => {
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "222222");
    await t.typeText("#student-name", "Hiruni Gajanayake");
    await t.typeText("#student-age", "45");
    await t.typeText("#student-hometown", "buddhist");
    await t.click("#student-add");

    await t.navigateTo("/student");
    const tableBeforeDelete = Selector('#student-table');
    const rowsBefore = await tableBeforeDelete.find('tr').count;
    
    await t.click("#student-delete-222222");

    const tableAfterDelete = Selector('#student-table');
    const rowsAfter = await tableAfterDelete.find('tr').count;
    const tableText = await tableAfterDelete.innerText;
    
    await t.expect(rowsAfter).lt(rowsBefore);
    await t.expect(tableText).notContains("Hiruni Gajanayake");
});

test('Test 2: Delete multiple students', async t => {
    // Add first student
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "333333");
    await t.typeText("#student-name", "Student ToDelete1");
    await t.typeText("#student-age", "20");
    await t.typeText("#student-hometown", "City1");
    await t.click("#student-add");
    
    // Add second student
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "444444");
    await t.typeText("#student-name", "Student ToDelete2");
    await t.typeText("#student-age", "21");
    await t.typeText("#student-hometown", "City2");
    await t.click("#student-add");
    
    await t.navigateTo("/student");
    
    // Delete first student
    await t.click("#student-delete-333333");
    const table1 = Selector('#student-table');
    let text1 = await table1.innerText;
    await t.expect(text1).notContains("Student ToDelete1");
    
    // Delete second student
    await t.click("#student-delete-444444");
    const table2 = Selector('#student-table');
    let text2 = await table2.innerText;
    await t.expect(text2).notContains("Student ToDelete2");
});