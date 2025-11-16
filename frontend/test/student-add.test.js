import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student Add Operations`
    .page`http://localhost:4200/student`;

test('Test 1: Add a single student with all fields', async t => {
    await t.navigateTo("/dbinitialize");
    await t.navigateTo("/addStudent");
    
    await t.typeText("#student-id", "999999");
    await t.typeText("#student-name", "Pasindu Basnayaka");
    await t.typeText("#student-age", "45");
    await t.typeText("#student-hometown", "Catholic");
    await t.click("#student-add");
    
    await t.navigateTo("/student");
    const table = Selector('#student-table');
    const rowCount = await table.find('tr').count;
    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    
    await t.expect(tdText).contains("Pasindu Basnayaka");
    await t.expect(tdText).contains("999999");
    await t.expect(tdText).contains("Catholic");
});

test('Test 2: Add multiple students sequentially', async t => {
    await t.navigateTo("/addStudent");
    
    // Add first student
    await t.typeText("#student-id", "111111");
    await t.typeText("#student-name", "John Doe");
    await t.typeText("#student-age", "20");
    await t.typeText("#student-hometown", "New York");
    await t.click("#student-add");
    
    await t.navigateTo("/addStudent");
    
    // Add second student
    await t.typeText("#student-id", "222111");
    await t.typeText("#student-name", "Jane Smith");
    await t.typeText("#student-age", "22");
    await t.typeText("#student-hometown", "Boston");
    await t.click("#student-add");
    
    await t.navigateTo("/student");
    const table = Selector('#student-table');
    const rowText = await table.innerText;
    
    await t.expect(rowText).contains("John Doe");
    await t.expect(rowText).contains("Jane Smith");
});
