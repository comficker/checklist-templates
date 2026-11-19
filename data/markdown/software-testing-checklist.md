# Software Testing Checklist

A coverage checklist of the test types to run on a software release.

> Free printable & editable version: [Software Testing Checklist on ChecklistForge](https://checklistforge.com/checklist/software-testing-checklist) — tick items online or download as PDF.

## Functional testing

- [ ] Verify each feature works as described in the requirements.
- [ ] Test core user workflows from start to finish.
- [ ] Validate form inputs, validation rules and error messages.
- [ ] Confirm calculations, business logic and data handling are correct.
- [ ] Check integrations and APIs return the expected results.
- [ ] Verify create, read, update and delete operations behave correctly.

## UI and usability

- [ ] Check layout, spacing and styling match the design.
- [ ] Verify all buttons, links and controls work as intended.
- [ ] Test loading, empty, error and success states.
- [ ] Confirm responsive behavior across screen sizes.
- [ ] Check text for typos, truncation and localization issues.
- [ ] Validate navigation and back-button behavior.

## Regression and edge cases

- [ ] Re-test existing features affected by the change.
- [ ] Run the automated regression suite and review failures.
- [ ] Test boundary values such as minimum, maximum and zero.
- [ ] Test empty, very large and invalid inputs.
- [ ] Verify behavior with special characters and different formats.
- [ ] Check concurrent actions and unexpected user sequences.

## Performance testing

- [ ] Measure page load and response times against targets.
- [ ] Run load tests to confirm behavior under expected traffic.
- [ ] Run stress tests to find the breaking point and failure mode.
- [ ] Check memory, CPU and database usage under load.
- [ ] Test with realistic data volumes, not just small datasets.
- [ ] Verify caching, pagination and lazy loading work as intended.

## Security testing

- [ ] Test authentication, session handling and password rules.
- [ ] Verify authorization so users can't access others' data or actions.
- [ ] Check input handling against injection and cross-site scripting. — _Reference the OWASP Top 10 for common web vulnerabilities._
- [ ] Confirm sensitive data is encrypted in transit and at rest.
- [ ] Test error messages don't leak stack traces or secrets.
- [ ] Scan dependencies for known vulnerabilities.

## Compatibility and accessibility

- [ ] Test across major browsers such as Chrome, Firefox, Safari and Edge.
- [ ] Test on different devices and operating systems.
- [ ] Verify keyboard-only navigation works throughout.
- [ ] Check screen reader labels, headings and alt text.
- [ ] Confirm color contrast meets accessibility guidelines.
- [ ] Test behavior with slow or interrupted network connections.

---
Source: [Software Testing Checklist](https://checklistforge.com/checklist/software-testing-checklist) by ChecklistForge · License: CC BY 4.0
