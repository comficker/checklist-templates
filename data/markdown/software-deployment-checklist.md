# Software Deployment Checklist

A step-by-step checklist for deploying software to production safely.

> Free printable & editable version: [Software Deployment Checklist on ChecklistForge](https://checklistforge.com/checklist/software-deployment-checklist) — tick items online or download as PDF.

## Pre-deployment checks

- [ ] Confirm the code is reviewed, approved and merged to the release branch.
- [ ] Verify all automated tests and the build pass in the pipeline.
- [ ] Check that database migrations are written and reversible where possible.
- [ ] Confirm environment variables, secrets and config are set for production.
- [ ] Review and update dependencies, and check for known vulnerabilities.
- [ ] Schedule the deploy window and notify the team and stakeholders.
- [ ] Freeze unrelated changes to keep the release scope clear.

## Prepare and back up

- [ ] Take a fresh backup of the production database before deploying. — _Verify the backup completed and is restorable._
- [ ] Snapshot or back up critical files and current configuration.
- [ ] Record the currently deployed version and commit hash.
- [ ] Confirm rollback artifacts, such as the previous build, are available.
- [ ] Put up a maintenance page if downtime is expected.
- [ ] Verify monitoring and alerting are active before you begin.

## Execute the deployment

- [ ] Deploy to a staging or canary environment first if available.
- [ ] Run database migrations and confirm they complete successfully.
- [ ] Deploy the new application version to production.
- [ ] Apply configuration and feature-flag changes as planned.
- [ ] Clear or warm caches and CDN content as needed.
- [ ] Restart or reload services and confirm they come back healthy.

## Smoke test and verify

- [ ] Confirm the application loads and the correct version is live.
- [ ] Test critical user paths such as login, checkout or core workflows.
- [ ] Verify integrations and third-party services respond correctly.
- [ ] Check error rates, response times and resource usage.
- [ ] Validate that the database changes behave as expected.
- [ ] Confirm background jobs and scheduled tasks are running.

## Rollback plan

- [ ] Define clear criteria for when to roll back versus fix forward.
- [ ] Document the exact steps to revert code, config and migrations.
- [ ] Know how to restore the database backup if data is affected.
- [ ] Assign who has authority to trigger a rollback during the window.
- [ ] Test that the rollback path works before relying on it.
- [ ] Communicate immediately if a rollback is performed.

## Post-deployment monitoring

- [ ] Watch dashboards, logs and alerts closely for the first period after deploy.
- [ ] Compare key metrics against the pre-deploy baseline.
- [ ] Remove the maintenance page and confirm full availability.
- [ ] Notify stakeholders that the deployment is complete and stable.
- [ ] Close out the release and update deployment records and tickets.
- [ ] Log any issues and follow up with a retrospective if needed.

---
Source: [Software Deployment Checklist](https://checklistforge.com/checklist/software-deployment-checklist) by ChecklistForge · License: CC BY 4.0
