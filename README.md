# GPA Calculator

A GPA Calculator built specifically for Stamford Public Schools' actual grading scale and weighting policy, unlike generic/incorrect online calculators.

## Live site
https://rudrh-nair.github.io/gpa-calculator/

## What it does
- Add classes with grade, type (Normal/Honors/AP/UConn ECE), and year taken
- Calculates both unweighted and weighted GPA using SPS's official point scale and weighting formula taken from Program of Studies (+0.05 per Honors course, +0.07 per AP/ECE course)
- Shows a full breakdown of how each class contributes to your final GPA
- Organizes classes by year, saves automatically to localStorage
- Dark mode accessibility

## Why
Existing generic GPA calculators online don't match Stamford's specific letter-grade cutoffs or weighting rules, so their numbers can be inaccurate for SPS students, calculating GPA by hand is time consuming and most students are unaware of the point scale. This calculator uses the actual published grading policy.

## Data & Privacy
All data is stored locally in your browser (localStorage). Nothing is sent to a server, and no one else can see your classes or grades.

## Built with
Vanilla HTML, CSS, and JavaScript, no frameworks. Built as a personal project to learn web development and solve the problem of inaccessibility to GPA scores.
