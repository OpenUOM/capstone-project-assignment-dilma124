import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student Search Operations`
    .page`http://localhost:4200/student`;

test('Test 1: Search for students with substring match', async t => {
    await t.navigateTo("/student");
    await t.typeText("#student-search", "si");

    const table = Selector('#student-table');
    const rowCount = await table.find('tr').count;

    await t.expect(rowCount).eql(2);
    
    // Clear search to verify table is full again
    await t.tripleClick("#student-search");
    await t.pressKey('delete');
    
    const fullTableRowCount = await table.find('tr').count;
    await t.expect(fullTableRowCount).gt(rowCount);
});

test('Test 2: Search for student by exact name substring', async t => {
    // Add test student
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "666666");
    await t.typeText("#student-name", "SearchTestStudent");
    await t.typeText("#student-age", "23");
    await t.typeText("#student-hometown", "TestCity");
    await t.click("#student-add");
    
    await t.navigateTo("/student");
    await t.typeText("#student-search", "SearchTest");
    
    const table = Selector('#student-table');
    const tableText = await table.innerText;
    
    await t.expect(tableText).contains("SearchTestStudent");
});

test('Test 3: Search returns no results for non-existent student', async t => {
    await t.navigateTo("/student");
    await t.typeText("#student-search", "NonExistentName12345");
    
    const table = Selector('#student-table');
    const rowCount = await table.find('tr').count;
    
    // Should only have header row
    await t.expect(rowCount).eql(1);
});