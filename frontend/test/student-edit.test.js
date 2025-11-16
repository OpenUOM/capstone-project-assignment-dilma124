import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student Edit Operations`
    .page`http://localhost:4401/student`;

test('Test 1: Edit student name and verify changes', async t => {
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "999999");
    await t.typeText("#student-name", "Pasindu Basnayaka");
    await t.typeText("#student-age", "45");
    await t.typeText("#student-hometown", "catholic");
    await t.click("#student-add");

    await t.navigateTo("/student");
    await t.click("#student-edit-999999");

    // Clear fields and type new values
    await t.tripleClick("#student-name");
    await t.typeText("#student-name", "Changed Student Name");
    await t.tripleClick("#student-age");
    await t.typeText("#student-age", "99");
    await t.tripleClick("#student-hometown");
    await t.typeText("#student-hometown", "Hometown");
    await t.click("#student-edit");

    await t.navigateTo("/student");
    const table = Selector('#student-table');
    const tableText = await table.innerText;
    
    await t.expect(tableText).contains("Changed Student Name");
    await t.expect(tableText).contains("99");
    await t.expect(tableText).contains("Hometown");

    await t.click("#student-delete-999999");
});

test('Test 2: Edit student hometown field only', async t => {
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "555555");
    await t.typeText("#student-name", "Test Student");
    await t.typeText("#student-age", "25");
    await t.typeText("#student-hometown", "OldCity");
    await t.click("#student-add");

    await t.navigateTo("/student");
    await t.click("#student-edit-555555");

    await t.tripleClick("#student-hometown");
    await t.typeText("#student-hometown", "NewCity");
    await t.click("#student-edit");

    await t.navigateTo("/student");
    const table = Selector('#student-table');
    const tableText = await table.innerText;
    
    await t.expect(tableText).contains("Test Student");
    await t.expect(tableText).contains("NewCity");

    await t.click("#student-delete-555555");
});