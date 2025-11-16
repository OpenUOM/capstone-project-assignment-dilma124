import {Selector} from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Teacher Delete Operations`
    .page`http://localhost:4200/`;

test('Test 1: Delete a teacher and verify removal from table', async t => {
    await t.navigateTo("/addTeacher");
    await t.typeText("#teacher-id", "300000");
    await t.typeText("#teacher-name", "Hasitha Fernando");
    await t.typeText("#teacher-age", "45");
    await t.click("#teacher-add");

    await t.navigateTo("/");
    const tableBeforeDelete = Selector('#teacher-table');
    const rowsBefore = await tableBeforeDelete.find('tr').count;
    
    await t.click("#teacher-delete-300000");

    const tableAfterDelete = Selector('#teacher-table');
    const rowsAfter = await tableAfterDelete.find('tr').count;
    const tableText = await tableAfterDelete.innerText;
    
    await t.expect(rowsAfter).lt(rowsBefore);
    await t.expect(tableText).notContains("Hasitha Fernando");
});

test('Test 2: Delete multiple teachers sequentially', async t => {
    // Add first teacher
    await t.navigateTo("/addTeacher");
    await t.typeText("#teacher-id", "400001");
    await t.typeText("#teacher-name", "Teacher ToDelete1");
    await t.typeText("#teacher-age", "40");
    await t.click("#teacher-add");
    
    // Add second teacher
    await t.navigateTo("/addTeacher");
    await t.typeText("#teacher-id", "400002");
    await t.typeText("#teacher-name", "Teacher ToDelete2");
    await t.typeText("#teacher-age", "41");
    await t.click("#teacher-add");
    
    await t.navigateTo("/");
    
    // Delete first teacher
    await t.click("#teacher-delete-400001");
    const table1 = Selector('#teacher-table');
    let text1 = await table1.innerText;
    await t.expect(text1).notContains("Teacher ToDelete1");
    
    // Delete second teacher
    await t.click("#teacher-delete-400002");
    const table2 = Selector('#teacher-table');
    let text2 = await table2.innerText;
    await t.expect(text2).notContains("Teacher ToDelete2");
});

test('Test 3: Verify teacher count decreases after deletion', async t => {
    await t.navigateTo("/addTeacher");
    await t.typeText("#teacher-id", "500000");
    await t.typeText("#teacher-name", "DeleteMe Teacher");
    await t.typeText("#teacher-age", "35");
    await t.click("#teacher-add");
    
    await t.navigateTo("/");
    const tableBeforeDelete = Selector('#teacher-table');
    const countBefore = await tableBeforeDelete.find('tr').count;
    
    await t.click("#teacher-delete-500000");
    
    const tableAfterDelete = Selector('#teacher-table');
    const countAfter = await tableAfterDelete.find('tr').count;
    
    await t.expect(countAfter).eql(countBefore - 1);
});