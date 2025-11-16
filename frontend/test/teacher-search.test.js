import {Selector} from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Teacher Search Operations`
    .page`http://localhost:4401/`;

test('Test 1: Search for teachers with substring match', async t => {
    await t.navigateTo("/");
    await t.typeText("#teacher-search", "su");

    const table = Selector('#teacher-table');
    const rowCount = await table.find('tr').count;

    await t.expect(rowCount).eql(2);
    
    // Clear search to verify table is full again
    await t.tripleClick("#teacher-search");
    await t.pressKey('delete');
    
    const fullTableRowCount = await table.find('tr').count;
    await t.expect(fullTableRowCount).gt(rowCount);
});

test('Test 2: Search for teacher by partial name', async t => {
    // Add test teacher
    await t.navigateTo("/addTeacher");
    await t.typeText("#teacher-id", "700001");
    await t.typeText("#teacher-name", "SearchableTeacher");
    await t.typeText("#teacher-age", "40");
    await t.click("#teacher-add");
    
    await t.navigateTo("/");
    await t.typeText("#teacher-search", "Search");
    
    const table = Selector('#teacher-table');
    const tableText = await table.innerText;
    
    await t.expect(tableText).contains("SearchableTeacher");
});

test('Test 3: Search returns no results for non-existent teacher', async t => {
    await t.navigateTo("/");
    await t.typeText("#teacher-search", "NonExistentTeacher12345");
    
    const table = Selector('#teacher-table');
    const rowCount = await table.find('tr').count;
    
    // Should only have header row
    await t.expect(rowCount).eql(1);
});

test('Test 4: Search is case-insensitive', async t => {
    await t.navigateTo("/");
    await t.typeText("#teacher-search", "SU");
    
    const table = Selector('#teacher-table');
    const rowCount = await table.find('tr').count;
    
    // Should find results regardless of case
    await t.expect(rowCount).gt(1);
});