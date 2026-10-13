# GPA Calculator

A GPA Calculator built specifically for Stamford Public Schools' actual grading scale and weighting policy, unlike generic/incorrect online calculators.

## Live site
https://rudrh-nair.github.io/gpa-calculator/

## What it does
- Add classes with a grade, course type, and year
- Course types: Normal, Honors Civics 1/2, Honors, AP, UConn ECE, NCC, IBDP
- Calculates unweighted and weighted GPA using the SPS point scale
- Weighting from the Program of Studies: +0.05 Honors, +0.07 AP/ECE/NCC/IBDP, +0.025 each for Honors Civics 1 and 2
- Breakdown showing how each class affects your GPA
- Click any grade to edit it
- Classes are grouped by year, saved automatically, with a dark mode
- Responsive layout that adjusts for phones

## Why
Existing generic GPA calculators online don't match Stamford's specific letter-grade cutoffs or weighting rules, so their numbers can be inaccurate for SPS students, calculating GPA by hand is time consuming and most students are unaware of the point scale. This calculator uses the actual published grading policy.

## Data & Privacy
All data is stored locally in your browser (localStorage). Nothing is sent to a server, and no one else can see your classes or grades.

## Built with
Vanilla HTML, CSS, and JavaScript, no frameworks. Built as a personal project to learn web development and solve the problem of inaccessibility to GPA scores.
