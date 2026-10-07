/*
MUSIIMENTA HOPE
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function 1: Ask the user for input
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Function 2: Calculate the student's grade
function calculateGrade(mark) {
    if (mark >= 80) {
        return "A";
    } else if (mark >= 70) {
        return "B";
    } else if (mark >= 60) {
        return "C";
    } else if (mark >= 50) {
        return "D";
    } else {
        return "F";
    }
}

// Function 3: Display the student's result
function displayResult(name, mark, grade) {
    console.log("----------------------------------------");
    console.log("Student Name : " + name);
    console.log("Mark         : " + mark);
    console.log("Grade        : " + grade);
    console.log("----------------------------------------");
}

// Main function
async function main() {

    console.log("========================================");
    console.log("       STUDENT GRADING SYSTEM");
    console.log("========================================");

    let numberOfStudents = parseInt(
        await askQuestion("Enter the number of students: ")
    );

    // Check whether the number entered is valid
    if (isNaN(numberOfStudents) || numberOfStudents <= 0) {
        console.log("Please enter a valid number of students.");
        rl.close();
        return;
    }

    // Loop through each student
    for (let i = 1; i <= numberOfStudents; i++) {

        console.log("\nStudent " + i);

        let name = await askQuestion("Enter student name: ");

        let mark = parseFloat(
            await askQuestion("Enter student's mark (0-100): ")
        );

        // Validate the mark
        if (isNaN(mark) || mark < 0 || mark > 100) {
            console.log("Invalid mark. Please enter a mark between 0 and 100.");
            i--;
            continue;
        }

        // Calculate grade
        let grade = calculateGrade(mark);

        // Display result
        displayResult(name, mark, grade);
    }

    console.log("\n========================================");
    console.log("All student results have been processed.");
    console.log("Thank you for using the Student Grading System.");
    console.log("========================================");

    rl.close();
}

// Start the program
main();