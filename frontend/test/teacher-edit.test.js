import {Selector} from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Teacher Edit Operations`
    .page`http://localhost:4401/`;

test('Test 1: Edit teacher name and age fields', async t => {
    await t.navigateTo("/");
    await t.click("#teacher-edit-10003");

    // Clear and update fields
    await t.tripleClick("#teacher-name");
    await t.typeText("#teacher-name", "Changed Teacher Name");
    await t.tripleClick("#teacher-age");
    await t.typeText("#teacher-age", "99");
    await t.click("#teacher-edit");

    await t.navigateTo("/");
    const table = Selector('#teacher-table');
    const tableText = await table.innerText;
    
    await t.expect(tableText).contains("Changed Teacher Name");
    await t.expect(tableText).contains("99");

    await t.click("#teacher-delete-10003");
});

test('Test 2: Edit teacher name only', async t => {
    // Add new teacher first
    await t.navigateTo("/addTeacher");
    await t.typeText("#teacher-id", "600001");
    await t.typeText("#teacher-name", "Original Name");
    await t.typeText("#teacher-age", "35");
    await t.click("#teacher-add");
    
    await t.navigateTo("/");
    await t.click("#teacher-edit-600001");
    
    // Edit only the name
    await t.tripleClick("#teacher-name");
    await t.typeText("#teacher-name", "Updated Name");
    await t.click("#teacher-edit");
    
    await t.navigateTo("/");
    const table = Selector('#teacher-table');
    const tableText = await table.innerText;
    
    await t.expect(tableText).contains("Updated Name");
    await t.click("#teacher-delete-600001");
});

test('Test 3: Edit teacher age only', async t => {
    // Add new teacher first
    await t.navigateTo("/addTeacher");
    await t.typeText("#teacher-id", "600002");
    await t.typeText("#teacher-name", "AgeTestTeacher");
    await t.typeText("#teacher-age", "30");
    await t.click("#teacher-add");
    
    await t.navigateTo("/");
    await t.click("#teacher-edit-600002");
    
    // Edit only the age
    await t.tripleClick("#teacher-age");
    await t.typeText("#teacher-age", "55");
    await t.click("#teacher-edit");
    
    await t.navigateTo("/");
    const table = Selector('#teacher-table');
    const tableText = await table.innerText;
    
    await t.expect(tableText).contains("AgeTestTeacher");
    await t.expect(tableText).contains("55");
    await t.click("#teacher-delete-600002");
});
