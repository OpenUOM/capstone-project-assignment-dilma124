import {Selector} from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Teacher Add Operations`
    .page`http://localhost:4200/`;

test('Test 1: Add a single teacher with all required fields', async t => {
    await t.navigateTo("/dbinitialize");
    await t.navigateTo("/addTeacher");
    
    await t.typeText("#teacher-id", "123456");
    await t.typeText("#teacher-name", "Mohan Perera");
    await t.typeText("#teacher-age", "45");
    await t.click("#teacher-add");

    await t.navigateTo("/");
    const table = Selector('#teacher-table');
    const rowCount = await table.find('tr').count;
    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    
    await t.expect(tdText).contains("Mohan Perera");
    await t.expect(tdText).contains("123456");
});

test('Test 2: Add multiple teachers sequentially', async t => {
    await t.navigateTo("/addTeacher");
    
    // Add first teacher
    await t.typeText("#teacher-id", "789101");
    await t.typeText("#teacher-name", "Kelum Silva");
    await t.typeText("#teacher-age", "50");
    await t.click("#teacher-add");
    
    await t.navigateTo("/addTeacher");
    
    // Add second teacher
    await t.typeText("#teacher-id", "789102");
    await t.typeText("#teacher-name", "Sampath Kumar");
    await t.typeText("#teacher-age", "48");
    await t.click("#teacher-add");
    
    await t.navigateTo("/");
    const table = Selector('#teacher-table');
    const tableText = await table.innerText;
    
    await t.expect(tableText).contains("Kelum Silva");
    await t.expect(tableText).contains("Sampath Kumar");
});

test('Test 3: Add teacher and verify it appears in table with correct data', async t => {
    await t.navigateTo("/addTeacher");
    
    await t.typeText("#teacher-id", "111222");
    await t.typeText("#teacher-name", "Ravi Shankar");
    await t.typeText("#teacher-age", "42");
    await t.click("#teacher-add");
    
    await t.navigateTo("/");
    const table = Selector('#teacher-table');
    const tableText = await table.innerText;
    
    await t.expect(tableText).contains("Ravi Shankar");
    await t.expect(tableText).contains("111222");
});