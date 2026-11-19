# Release Checklist

A checklist for releasing a software version from final prep to post-release.

> Free printable & editable version: [Release Checklist on ChecklistForge](https://checklistforge.com/checklist/release-checklist) — tick items online or download as PDF.

## Plan the release

- [ ] Confirm the scope and the features and fixes included in this version.
- [ ] Verify all planned work is merged and the release branch is frozen.
- [ ] Choose the version number using your versioning scheme.
- [ ] Schedule the release date and time, and a maintenance window if needed.
- [ ] Confirm owners for deploy, comms, monitoring and support.
- [ ] Check for dependencies, migrations or coordinated changes.

## Prepare the version

- [ ] Bump the version number in code, packages and config.
- [ ] Update the changelog with features, fixes and breaking changes.
- [ ] Write user-facing release notes in clear, benefit-led language.
- [ ] Prepare internal notes covering technical and migration details.
- [ ] Tag the release in version control and create a release branch or tag.
- [ ] Update documentation, help articles and API references.

## Final tests and approval

- [ ] Run the full automated test suite and confirm it passes.
- [ ] Complete regression and smoke testing on the release candidate.
- [ ] Confirm no open blocker or critical defects remain.
- [ ] Verify any feature flags are set correctly for the release.
- [ ] Obtain final QA and stakeholder sign-off.
- [ ] Confirm rollback and backup plans are ready.

## Deploy and verify

- [ ] Back up the database and record the current production version.
- [ ] Deploy the new version to production following your deploy process.
- [ ] Run migrations and confirm they complete successfully.
- [ ] Smoke test critical paths and confirm the correct version is live.
- [ ] Check error rates, performance and integrations after deploy.
- [ ] Roll out gradually with a canary or staged release if available.

## Communicate the release

- [ ] Publish release notes to users via the appropriate channels.
- [ ] Notify internal teams including support, sales and product.
- [ ] Brief the support team on changes and likely questions.
- [ ] Update status pages or in-app announcements as needed.
- [ ] Inform key customers of any breaking changes or required actions.
- [ ] Confirm marketing or social posts are scheduled if planned.

## Monitor and follow up

- [ ] Watch dashboards, logs and alerts closely after release.
- [ ] Track adoption and key metrics against expectations.
- [ ] Monitor support channels for new issues or confusion.
- [ ] Be ready to hotfix or roll back if a serious problem appears.
- [ ] Close out release tickets and update records.
- [ ] Hold a brief retrospective and capture improvements for next time.

---
Source: [Release Checklist](https://checklistforge.com/checklist/release-checklist) by ChecklistForge · License: CC BY 4.0
