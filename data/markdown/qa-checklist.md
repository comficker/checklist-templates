# QA Checklist

A process-level quality-assurance checklist for managing a software release.

> Free printable & editable version: [QA Checklist on ChecklistForge](https://checklistforge.com/checklist/qa-checklist) — tick items online or download as PDF.

## Plan the QA cycle

- [ ] Confirm the scope of the release and what is in and out of testing.
- [ ] Review requirements, designs and acceptance criteria with the team.
- [ ] Write a test plan covering test types, schedule and responsibilities.
- [ ] Define entry criteria for when testing can begin.
- [ ] Define exit and sign-off criteria for when testing is complete.
- [ ] Identify risks and prioritize areas that need the most coverage.
- [ ] Estimate effort and confirm resourcing for the cycle.

## Prepare environments and data

- [ ] Set up a stable test environment that mirrors production closely.
- [ ] Deploy the correct build and confirm the version under test.
- [ ] Prepare realistic test data covering common and edge scenarios.
- [ ] Configure required integrations, accounts and feature flags.
- [ ] Verify access for all testers and the tools they need.
- [ ] Confirm the test management and bug tracking tools are ready.

## Author test cases

- [ ] Write clear test cases mapped to requirements and acceptance criteria.
- [ ] Cover positive, negative and boundary scenarios for each feature.
- [ ] Mark which cases are candidates for automation.
- [ ] Prepare a regression suite for previously released functionality.
- [ ] Peer review test cases for coverage and clarity.
- [ ] Link test cases to the stories or tickets they verify.

## Execute tests

- [ ] Run smoke tests first to confirm the build is testable.
- [ ] Execute planned test cases and record actual results.
- [ ] Run the regression suite to catch unintended side effects.
- [ ] Log defects with clear steps, expected and actual results.
- [ ] Capture evidence such as screenshots, logs and recordings.
- [ ] Track test execution progress and coverage against the plan.

## Triage and manage defects

- [ ] Triage each defect by severity, priority and impact.
- [ ] Assign defects to owners with clear reproduction steps.
- [ ] Agree which defects block the release and which can be deferred.
- [ ] Verify fixes and confirm they don't introduce regressions.
- [ ] Re-test resolved issues and close them when verified.
- [ ] Maintain a current list of open issues and their status.

## Sign-off and reporting

- [ ] Confirm exit criteria are met, including critical tests passing.
- [ ] Verify there are no open blocker or critical defects.
- [ ] Summarize results in a test report with coverage and known issues.
- [ ] Document any agreed risks or workarounds for remaining issues.
- [ ] Obtain formal sign-off from QA and stakeholders.
- [ ] Capture lessons learned to improve the next QA cycle.

---
Source: [QA Checklist](https://checklistforge.com/checklist/qa-checklist) by ChecklistForge · License: CC BY 4.0
