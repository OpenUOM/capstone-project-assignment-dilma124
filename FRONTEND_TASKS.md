# Frontend Tasks

This document provides guidance on implementing the frontend functionality for the Student Management System. The primary task is to implement a searching functionality for the Teacher and Student classes.

---

## Task Overview

You are required to implement a searching functionality that allows users to search for teachers or students by their name.

### Task Details

**Task Name:** Search Functionality

**Objective:** Implement the logic for searching teachers and students by their name in the respective table components.

**Components to Modify:**
1. `teacher-table.component.ts` - Implement teacher search
2. `student-table.component.ts` - Implement student search

**Important:** Do not change the name of the search function. Differing names will cause to lose marks.

---

## Understanding the Search Task

### Input and Output

| Aspect | Details |
|--------|---------|
| **Input** | Any searching text (String) |
| **Search Field** | Person's name (case-insensitive) |
| **Output** | Update the data array (teacherData or studentData) |
| **Behavior** | Show only matching records in the table |

### Search Logic Overview

The search functionality should:

1. **Accept a search string** - Input from the search field
2. **Check if search is empty** - If empty, reload all records
3. **Filter the data array** - Match against the name field
4. **Perform case-insensitive search** - "john" matches "John"
5. **Update the displayed data** - Show only matching records
6. **Handle partial matches** - "Jo" matches "John"

---

## Teacher Search Implementation

### Location

`frontend/src/app/components/teacher-table/teacher-table.component.ts`

### Complete Implementation

```typescript
search(value) {
    let foundItems = [];
    if (value.length <= 0) {
        // If search field is empty, reload all teachers
        this.getTeacherData();
    } else {
        // Filter teachers by name
        this.teacherData.filter((teacher) => {
            // Check if teacher name contains search value (case-insensitive)
            if (teacher[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                foundItems.push(teacher);
            }
        });
        // Update teacherData with filtered results
        this.teacherData = foundItems;
    }
}
```

### Status

✅ **IMPLEMENTED**

### Code Explanation

#### Function Signature

```typescript
search(value) {
```

**Parameters:**
- `value` (string) - The search text entered by the user
- Passed from template via `search(box.value)` where `box` is the input element reference

#### Initialize Found Items Array

```typescript
let foundItems = [];
```

**Purpose:**
- Create empty array to store filtered results
- Will contain only teachers matching the search criteria

#### Check if Search is Empty

```typescript
if (value.length <= 0) {
    this.getTeacherData();
}
```

**Logic:**
- If user clears the search field (empty string), reload all teachers
- Calls `getTeacherData()` to fetch full list from backend
- Resets the view to show all records

**Why this is important:**
- User might type something, then clear it
- Should restore the complete list instead of keeping filtered results
- Better user experience

#### Filter the Teacher Data

```typescript
else {
    this.teacherData.filter((teacher) => {
        if (teacher[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
            foundItems.push(teacher);
        }
    });
    this.teacherData = foundItems;
}
```

**Step-by-step breakdown:**

1. **`.filter((teacher) => { ... })`**
   - Iterates through each teacher in the `teacherData` array
   - Executes callback function for each teacher
   - Variable `teacher` represents current iteration item

2. **`teacher[0].name`**
   - Accesses the teacher object (at index 0)
   - Retrieves the `name` property
   - Data structure: `teacherData = [[{name, id, age}], [{name, id, age}], ...]`

3. **`.toLowerCase()`**
   - Converts both search value and teacher name to lowercase
   - Enables case-insensitive matching
   - Example: "John" and "john" and "JOHN" all match

4. **`.indexOf(value.toLowerCase())`**
   - Checks if search value appears anywhere in the name
   - Returns index position if found (0 or greater)
   - Returns -1 if not found
   - Allows partial matches: "Jo" matches "John"

5. **`> -1`**
   - Condition is true when indexOf returns 0 or greater
   - Means the search value was found in the name
   - Is false when indexOf returns -1 (not found)

6. **`foundItems.push(teacher)`**
   - Adds matching teacher to results array
   - Executed only when condition is true

7. **`this.teacherData = foundItems`**
   - Updates the component's data array
   - Angular automatically re-renders the table
   - Only matching teachers are now visible

### How It Works - Visual Example

**Initial Data:**
```javascript
teacherData = [
  [{ id: 'T001', name: 'John Smith', age: 35 }],
  [{ id: 'T002', name: 'Jane Doe', age: 38 }],
  [{ id: 'T003', name: 'John Wilson', age: 42 }],
  [{ id: 'T004', name: 'Alice Brown', age: 40 }]
]
```

**User types: "john"**

1. Search function called with `value = "john"`
2. Filter iterates through each teacher:
   - "john smith" contains "john" ✓ → Added to foundItems
   - "jane doe" contains "john" ✗ → Skipped
   - "john wilson" contains "john" ✓ → Added to foundItems
   - "alice brown" contains "john" ✗ → Skipped
3. Result: `foundItems = [ [T001], [T003] ]`
4. `teacherData = foundItems` - Table now shows only John Smith and John Wilson

**User clears search field**

1. Search function called with `value = ""`
2. `value.length <= 0` is true
3. `getTeacherData()` called - Reloads all 4 teachers from backend
4. Table shows all teachers again

### Template Integration

In `teacher-table.component.html`:

```html
<input id="teacher-search" 
       style="height: 20px;" 
       #box 
       (keyup)="search(box.value)" 
       placeholder="Search">
```

**Template Explanation:**
- `#box` - Template reference variable for the input element
- `(keyup)` - Event binding that triggers on every key press
- `search(box.value)` - Calls search method with input value
- `box.value` - Gets current input value from the input element

### Working with the Table

In the table template:

```html
<tr *ngFor="let teacher of teacherData">
  <td>{{teacher[0].name}}</td>
  <td>{{teacher[0].id}}</td>
  <td>{{2022 - teacher[0].age}}</td>
  <!-- ... -->
</tr>
```

**How it integrates:**
- `*ngFor="let teacher of teacherData"` - Angular loops through current teacherData
- When search updates teacherData, the loop automatically re-renders
- Only matching records are displayed

---

## Student Search Implementation

### Location

`frontend/src/app/components/student-table/student-table.component.ts`

### Complete Implementation

```typescript
search(value) {
    let foundItems = [];
    if (value.length <= 0) {
        // If search field is empty, reload all students
        this.getStudentData();
    } else {
        // Filter students by name
        this.studentData.filter((student) => {
            // Check if student name contains search value (case-insensitive)
            if (student[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                foundItems.push(student);
            }
        });
        // Update studentData with filtered results
        this.studentData = foundItems;
    }
}
```

### Status

✅ **IMPLEMENTED**

### Code Explanation

The student search implementation is **identical** to the teacher search, with only variable name changes:

| Teacher | Student |
|---------|---------|
| `teacherData` | `studentData` |
| `getTeacherData()` | `getStudentData()` |
| `teacher` | `student` |
| Filters teacher names | Filters student names |

### Key Differences from Teacher

**Teacher Search:**
- Uses `this.teacherData` array
- Calls `this.getTeacherData()` to reload
- Variable name is `teacher`

**Student Search:**
- Uses `this.studentData` array
- Calls `this.getStudentData()` to reload
- Variable name is `student`

Both use the same filtering logic based on the name field.

### How It Works - Visual Example

**Initial Data:**
```javascript
studentData = [
  [{ id: 'S001', name: 'Alice Johnson', age: 20, hometown: 'New York' }],
  [{ id: 'S002', name: 'Bob Smith', age: 22, hometown: 'Los Angeles' }],
  [{ id: 'S003', name: 'Alice Brown', age: 21, hometown: 'Chicago' }],
  [{ id: 'S004', name: 'Charlie Davis', age: 23, hometown: 'Seattle' }]
]
```

**User types: "alice"**

1. Search function called with `value = "alice"`
2. Filter iterates through each student:
   - "alice johnson" contains "alice" ✓ → Added to foundItems
   - "bob smith" contains "alice" ✗ → Skipped
   - "alice brown" contains "alice" ✓ → Added to foundItems
   - "charlie davis" contains "alice" ✗ → Skipped
3. Result: `foundItems = [ [S001], [S003] ]`
4. `studentData = foundItems` - Table now shows only Alice Johnson and Alice Brown

### Template Integration

In `student-table.component.html`:

```html
<input id="student-search" 
       style="height: 20px;" 
       #box 
       (keyup)="search(box.value)" 
       placeholder="Search">
```

The template integration is identical to the teacher component.

---

## Search Algorithm Details

### Algorithm Overview

The search uses a **case-insensitive substring matching** approach.

### Algorithm Steps

1. **Initialize Result Array**: Create empty `foundItems` array
2. **Check Empty Input**: If search is empty, reload all data
3. **Iterate Through Data**: Loop through each record
4. **Extract Name**: Get the name property from each record
5. **Convert to Lowercase**: Normalize both search and name for comparison
6. **Check Substring Match**: Use `indexOf()` to find search text
7. **Add to Results**: If found, add record to `foundItems`
8. **Update Display**: Replace main data array with filtered results

### Time Complexity

- **Time:** O(n * m) where n = number of records, m = average name length
- **Space:** O(k) where k = number of matching records
- For typical datasets (100-1000 records), this is acceptable

### Why This Approach?

**Advantages:**
- ✅ Simple and easy to understand
- ✅ No need for backend changes
- ✅ Instant feedback for user
- ✅ Works with partial matches
- ✅ Case-insensitive by default

**Limitations:**
- ❌ Only searches by name field
- ❌ No advanced filtering options
- ❌ Processes entire dataset each search

---

## Testing the Search Functionality

### Manual Testing Steps

#### Test 1: Basic Search
1. Navigate to Teachers page
2. Type "john" in search field
3. **Expected:** Table shows only teachers with "john" in their name
4. **Verify:** Other teachers are hidden

#### Test 2: Case Insensitivity
1. Type "JOHN" in uppercase
2. **Expected:** Same results as lowercase "john"
3. **Verify:** Search is not case-sensitive

#### Test 3: Partial Match
1. Type "jo" (partial name)
2. **Expected:** Matches "John", "Jones", "Johnson", etc.
3. **Verify:** Substring matching works

#### Test 4: Empty Search
1. Type something in search field
2. Clear the search field completely
3. **Expected:** All records reappear
4. **Verify:** Full list restored

#### Test 5: No Results
1. Type a name that doesn't exist (e.g., "xyz")
2. **Expected:** Table shows no rows
3. **Verify:** Shows empty table when no matches

#### Test 6: Student Search
1. Navigate to Students page
2. Repeat tests 1-5 with student names
3. **Expected:** All tests pass for students too

### Debugging Tips

**Search not working?**
- Check browser console for errors
- Verify `search()` function is called on keyup
- Check data structure: `[{name, id, age}]`

**Wrong data shown?**
- Verify `teacherData` is updated correctly
- Check that original data isn't modified
- Ensure `getTeacherData()` reloads properly

**Case sensitivity issues?**
- Verify both sides of comparison use `.toLowerCase()`
- Check for special characters or spaces

---

## Search Function Specifications

### Function Requirements

| Requirement | Details |
|-------------|---------|
| **Function Name** | `search` (must be exact) |
| **Parameter** | `value: string` (search text) |
| **Return Type** | `void` (modifies component property) |
| **Modifies** | `this.teacherData` or `this.studentData` |
| **Triggered By** | `(keyup)="search(box.value)"` in template |
| **Behavior** | Filters array and updates display |

### Method Signature

```typescript
search(value) {
    // Implementation
}
```

**Note:** TypeScript type annotations are optional but recommended:

```typescript
search(value: string): void {
    // Implementation
}
```

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Changing Function Name

```typescript
// WRONG - Will lose marks!
searchTeacher(value) { }
findTeacher(value) { }
filter(value) { }
```

```typescript
// CORRECT
search(value) { }
```

### ❌ Mistake 2: Case-Sensitive Search

```typescript
// WRONG - Won't match "John" when searching "john"
if (teacher[0].name.indexOf(value) > -1) { }
```

```typescript
// CORRECT - Case-insensitive
if (teacher[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) { }
```

### ❌ Mistake 3: Not Clearing Search

```typescript
// WRONG - Doesn't restore full list
search(value) {
    let foundItems = [];
    this.teacherData.filter((teacher) => {
        if (teacher[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
            foundItems.push(teacher);
        }
    });
    this.teacherData = foundItems;
}
```

```typescript
// CORRECT - Clears search properly
search(value) {
    let foundItems = [];
    if (value.length <= 0) {
        this.getTeacherData();  // Reload all
    } else {
        this.teacherData.filter((teacher) => {
            if (teacher[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                foundItems.push(teacher);
            }
        });
        this.teacherData = foundItems;
    }
}
```

### ❌ Mistake 4: Wrong Data Structure

```typescript
// WRONG - Doesn't account for nested array structure
if (teacher.name.toLowerCase().indexOf(value.toLowerCase()) > -1) { }
```

```typescript
// CORRECT - Accesses nested object
if (teacher[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) { }
```

### ❌ Mistake 5: Not Updating Data Array

```typescript
// WRONG - Filters but doesn't update display
this.teacherData.filter((teacher) => {
    if (teacher[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
        foundItems.push(teacher);
    }
});
// Missing: this.teacherData = foundItems;
```

```typescript
// CORRECT - Updates component property
this.teacherData.filter((teacher) => {
    if (teacher[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
        foundItems.push(teacher);
    }
});
this.teacherData = foundItems;  // Update display
```

---

## Implementation Checklist

### Teacher Component

- ✅ Function named `search`
- ✅ Accepts `value` parameter
- ✅ Creates `foundItems` array
- ✅ Checks if `value.length <= 0`
- ✅ Calls `this.getTeacherData()` when empty
- ✅ Filters using `.filter()` method
- ✅ Accesses name using `teacher[0].name`
- ✅ Uses `.toLowerCase()` on both values
- ✅ Uses `.indexOf()` for substring search
- ✅ Checks `> -1` for match
- ✅ Pushes matching teachers to `foundItems`
- ✅ Updates `this.teacherData = foundItems`

### Student Component

- ✅ Function named `search`
- ✅ Accepts `value` parameter
- ✅ Creates `foundItems` array
- ✅ Checks if `value.length <= 0`
- ✅ Calls `this.getStudentData()` when empty
- ✅ Filters using `.filter()` method
- ✅ Accesses name using `student[0].name`
- ✅ Uses `.toLowerCase()` on both values
- ✅ Uses `.indexOf()` for substring search
- ✅ Checks `> -1` for match
- ✅ Pushes matching students to `foundItems`
- ✅ Updates `this.studentData = foundItems`

---

## Summary

### Search Implementation Status

| Component | Function | Status | Verified |
|-----------|----------|--------|----------|
| TeacherTableComponent | `search(value)` | ✅ Implemented | ✅ |
| StudentTableComponent | `search(value)` | ✅ Implemented | ✅ |

### Key Features Implemented

✅ Case-insensitive search  
✅ Substring matching (partial matches)  
✅ Clears search to restore full list  
✅ Updates component data array  
✅ Real-time filtering (on keyup)  
✅ Works for both Teachers and Students  

### Integration Points

**Template:**
- Search input with `#box` reference
- `(keyup)` event binding
- `search(box.value)` method call

**Component:**
- `search(value)` method implementation
- Filters `teacherData` or `studentData`
- Calls `getTeacherData()` or `getStudentData()` to reload

**Display:**
- `*ngFor` loop automatically re-renders
- Shows only filtered records
- Updates in real-time as user types

---

## Troubleshooting Guide

### Issue: Search doesn't work

**Possible Causes:**
1. Function name is not `search`
2. Template not passing `box.value` correctly
3. Data structure doesn't match `[{...}]`

**Solution:**
1. Verify function signature: `search(value) { }`
2. Check template: `(keyup)="search(box.value)"`
3. Log data: `console.log(this.teacherData)`

### Issue: Case sensitivity

**Possible Causes:**
1. Missing `.toLowerCase()` on name
2. Missing `.toLowerCase()` on search value
3. Only one side is lowercased

**Solution:**
```typescript
// CORRECT
teacher[0].name.toLowerCase().indexOf(value.toLowerCase())
```

### Issue: Full list doesn't restore

**Possible Causes:**
1. Missing empty check: `if (value.length <= 0)`
2. `getTeacherData()` not called
3. Condition is wrong

**Solution:**
```typescript
if (value.length <= 0) {
    this.getTeacherData();  // This reloads all data
}
```

---

**Frontend Tasks Completion Date:** November 17, 2025  
**Search Implementation Status:** ✅ COMPLETE AND VERIFIED
