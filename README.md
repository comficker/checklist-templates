# checklist-templates

**410 free checklist templates** as clean JSON and Markdown — moving, house cleaning, travel packing, wedding planning, baby, home maintenance, safety and equipment inspections, events and more. Use them in apps, notes (Obsidian, Notion, GitHub task lists), scripts or AI agents. Comes with a small JS API, a CLI and an MCP server.

Every checklist also has a **free printable PDF and an online editor** on [ChecklistForge](https://checklistforge.com/checklists): tick items, remove or add lines, and download a print-ready PDF.

[![npm](https://img.shields.io/npm/v/checklist-templates)](https://www.npmjs.com/package/checklist-templates) · Data: CC BY 4.0 · Code: MIT

## Install

```bash
npm install checklist-templates
```

```js
import { search, get, toMarkdown, categories } from 'checklist-templates';

search('carry on packing');          // → [{ id: 'carry-on-checklist', name, item_count, checklistforge }, …]
get('moving-checklist').sections;     // → [{ title, items: [{ text, note? }] }, …]
console.log(toMarkdown('house-cleaning-checklist')); // "- [ ] …" task list
```

Raw files work without installing: `https://cdn.jsdelivr.net/npm/checklist-templates/data/json/moving-checklist.json`

### CLI

```bash
npx checklist-templates search wedding
npx checklist-templates show moving-checklist > moving.md
```

### MCP server (Claude, Cursor, VS Code…)

```json
{ "mcpServers": { "checklist-templates": { "command": "npx", "args": ["-y", "-p", "checklist-templates", "checklist-templates-mcp"] } } }
```

Tools: `search_checklists`, `list_categories`, `list_checklists`, `get_checklist` (Markdown or JSON). Each result links to the printable PDF / editable version on ChecklistForge.

## Data format

```json
{
  "id": "moving-checklist",
  "name": "Moving Checklist",
  "category": "moving",
  "item_count": 32,
  "sections": [{ "title": "8 weeks before", "items": [{ "text": "…", "note": "…" }] }],
  "faq": [{ "q": "…", "a": "…" }],
  "checklistforge": "https://checklistforge.com/checklist/moving-checklist",
  "license": "CC-BY-4.0",
  "credit": "Moving Checklist by ChecklistForge (https://checklistforge.com/checklist/moving-checklist)"
}
```

`data/index.json` lists every checklist; `data/json/<id>.json` and `data/markdown/<id>.md` hold the full lists.

## All checklists

[Cleaning](#cleaning) (15) · [Moving & Relocation](#moving--relocation) (13) · [Travel](#travel) (28) · [Home Maintenance](#home-maintenance) (12) · [Home Organization](#home-organization) (10) · [Pregnancy & Baby](#pregnancy--baby) (13) · [Wedding](#wedding) (10) · [Emergency Preparedness](#emergency-preparedness) (8) · [Food & Kitchen](#food--kitchen) (7) · [Inspections](#inspections) (13) · [Workplace Safety](#workplace-safety) (13) · [Vehicles](#vehicles) (23) · [Pets](#pets) (50) · [Health & Medical](#health--medical) (16) · [Marketing](#marketing) (16) · [Students & Study](#students--study) (16) · [HR & Hiring](#hr--hiring) (15) · [College & Career](#college--career) (13) · [Construction](#construction) (12) · [Maintenance & Quality](#maintenance--quality) (12) · [Business & Startup](#business--startup) (11) · [Self-Care & Wellness](#self-care--wellness) (10) · [Teaching & Classroom](#teaching--classroom) (10) · [Back to School](#back-to-school) (9) · [Diet & Nutrition](#diet--nutrition) (8) · [IT & Software](#it--software) (8) · [Project Management](#project-management) (8) · [Recovery & Senior Care](#recovery--senior-care) (7) · [Fitness & Exercise](#fitness--exercise) (6) · [Office Management](#office-management) (5) · [Sales & Customer](#sales--customer) (5) · [Personal Care](#personal-care) (4) · [School Operations](#school-operations) (4)

### Cleaning

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| ADHD Cleaning Checklist | 33 | [JSON](data/json/adhd-cleaning-checklist.json) · [MD](data/markdown/adhd-cleaning-checklist.md) | [Free printable adhd cleaning checklist](https://checklistforge.com/checklist/adhd-cleaning-checklist) |
| Airbnb Cleaning Checklist | 38 | [JSON](data/json/airbnb-cleaning-checklist.json) · [MD](data/markdown/airbnb-cleaning-checklist.md) | [Free printable airbnb cleaning checklist](https://checklistforge.com/checklist/airbnb-cleaning-checklist) |
| Bathroom Cleaning Checklist | 31 | [JSON](data/json/bathroom-cleaning-checklist.json) · [MD](data/markdown/bathroom-cleaning-checklist.md) | [Free printable bathroom cleaning checklist](https://checklistforge.com/checklist/bathroom-cleaning-checklist) |
| Bedroom Cleaning Checklist | 32 | [JSON](data/json/bedroom-cleaning-checklist.json) · [MD](data/markdown/bedroom-cleaning-checklist.md) | [Free printable bedroom cleaning checklist](https://checklistforge.com/checklist/bedroom-cleaning-checklist) |
| Daily Cleaning Checklist | 24 | [JSON](data/json/daily-cleaning-checklist.json) · [MD](data/markdown/daily-cleaning-checklist.md) | [Free printable daily cleaning checklist](https://checklistforge.com/checklist/daily-cleaning-checklist) |
| Deep Cleaning Checklist | 36 | [JSON](data/json/deep-cleaning-checklist.json) · [MD](data/markdown/deep-cleaning-checklist.md) | [Free printable deep cleaning checklist](https://checklistforge.com/checklist/deep-cleaning-checklist) |
| Hotel Housekeeping Checklist | 36 | [JSON](data/json/hotel-housekeeping-checklist.json) · [MD](data/markdown/hotel-housekeeping-checklist.md) | [Free printable hotel housekeeping checklist](https://checklistforge.com/checklist/hotel-housekeeping-checklist) |
| House Cleaning Checklist | 34 | [JSON](data/json/house-cleaning-checklist.json) · [MD](data/markdown/house-cleaning-checklist.md) | [Free printable house cleaning checklist](https://checklistforge.com/checklist/house-cleaning-checklist) |
| Kitchen Cleaning Checklist | 32 | [JSON](data/json/kitchen-cleaning-checklist.json) · [MD](data/markdown/kitchen-cleaning-checklist.md) | [Free printable kitchen cleaning checklist](https://checklistforge.com/checklist/kitchen-cleaning-checklist) |
| Monthly Cleaning Checklist | 35 | [JSON](data/json/monthly-cleaning-checklist.json) · [MD](data/markdown/monthly-cleaning-checklist.md) | [Free printable monthly cleaning checklist](https://checklistforge.com/checklist/monthly-cleaning-checklist) |
| Move Out Cleaning Checklist | 38 | [JSON](data/json/move-out-cleaning-checklist.json) · [MD](data/markdown/move-out-cleaning-checklist.md) | [Free printable move out cleaning checklist](https://checklistforge.com/checklist/move-out-cleaning-checklist) |
| Office Cleaning Checklist | 34 | [JSON](data/json/office-cleaning-checklist.json) · [MD](data/markdown/office-cleaning-checklist.md) | [Free printable office cleaning checklist](https://checklistforge.com/checklist/office-cleaning-checklist) |
| Spring Cleaning Checklist | 35 | [JSON](data/json/spring-cleaning-checklist.json) · [MD](data/markdown/spring-cleaning-checklist.md) | [Free printable spring cleaning checklist](https://checklistforge.com/checklist/spring-cleaning-checklist) |
| Washroom Cleaning Checklist | 38 | [JSON](data/json/washroom-cleaning-checklist.json) · [MD](data/markdown/washroom-cleaning-checklist.md) | [Free printable washroom cleaning checklist](https://checklistforge.com/checklist/washroom-cleaning-checklist) |
| Weekly Cleaning Checklist | 33 | [JSON](data/json/weekly-cleaning-checklist.json) · [MD](data/markdown/weekly-cleaning-checklist.md) | [Free printable weekly cleaning checklist](https://checklistforge.com/checklist/weekly-cleaning-checklist) |

### Moving & Relocation

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Apartment Moving Checklist | 23 | [JSON](data/json/apartment-moving-checklist.json) · [MD](data/markdown/apartment-moving-checklist.md) | [Free printable apartment moving checklist](https://checklistforge.com/checklist/apartment-moving-checklist) |
| Change of Address Checklist | 30 | [JSON](data/json/change-of-address-checklist.json) · [MD](data/markdown/change-of-address-checklist.md) | [Free printable change of address checklist](https://checklistforge.com/checklist/change-of-address-checklist) |
| First Apartment Checklist | 27 | [JSON](data/json/first-apartment-checklist.json) · [MD](data/markdown/first-apartment-checklist.md) | [Free printable first apartment checklist](https://checklistforge.com/checklist/first-apartment-checklist) |
| Moving Checklist | 32 | [JSON](data/json/moving-checklist.json) · [MD](data/markdown/moving-checklist.md) | [Free printable moving checklist](https://checklistforge.com/checklist/moving-checklist) |
| Moving Day Checklist | 32 | [JSON](data/json/moving-day-checklist.json) · [MD](data/markdown/moving-day-checklist.md) | [Free printable moving day checklist](https://checklistforge.com/checklist/moving-day-checklist) |
| Moving House Checklist | 24 | [JSON](data/json/moving-house-checklist.json) · [MD](data/markdown/moving-house-checklist.md) | [Free printable moving house checklist](https://checklistforge.com/checklist/moving-house-checklist) |
| Moving Timeline Checklist | 26 | [JSON](data/json/moving-timeline-checklist.json) · [MD](data/markdown/moving-timeline-checklist.md) | [Free printable moving timeline checklist](https://checklistforge.com/checklist/moving-timeline-checklist) |
| New Home Checklist | 29 | [JSON](data/json/new-home-checklist.json) · [MD](data/markdown/new-home-checklist.md) | [Free printable new home checklist](https://checklistforge.com/checklist/new-home-checklist) |
| New Home Essentials Checklist | 33 | [JSON](data/json/new-home-essentials-checklist.json) · [MD](data/markdown/new-home-essentials-checklist.md) | [Free printable new home essentials checklist](https://checklistforge.com/checklist/new-home-essentials-checklist) |
| New Homeowner Checklist | 29 | [JSON](data/json/new-homeowner-checklist.json) · [MD](data/markdown/new-homeowner-checklist.md) | [Free printable new homeowner checklist](https://checklistforge.com/checklist/new-homeowner-checklist) |
| Office Moving Checklist | 25 | [JSON](data/json/office-moving-checklist.json) · [MD](data/markdown/office-moving-checklist.md) | [Free printable office moving checklist](https://checklistforge.com/checklist/office-moving-checklist) |
| Unpacking Checklist | 33 | [JSON](data/json/unpacking-checklist.json) · [MD](data/markdown/unpacking-checklist.md) | [Free printable unpacking checklist](https://checklistforge.com/checklist/unpacking-checklist) |
| Utilities Transfer Checklist | 26 | [JSON](data/json/utilities-transfer-checklist.json) · [MD](data/markdown/utilities-transfer-checklist.md) | [Free printable utilities transfer checklist](https://checklistforge.com/checklist/utilities-transfer-checklist) |

### Travel

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Backpacking Checklist | 42 | [JSON](data/json/backpacking-checklist.json) · [MD](data/markdown/backpacking-checklist.md) | [Free printable backpacking checklist](https://checklistforge.com/checklist/backpacking-checklist) |
| Beach Vacation Checklist | 39 | [JSON](data/json/beach-vacation-checklist.json) · [MD](data/markdown/beach-vacation-checklist.md) | [Free printable beach vacation checklist](https://checklistforge.com/checklist/beach-vacation-checklist) |
| Business Travel Checklist | 40 | [JSON](data/json/business-travel-checklist.json) · [MD](data/markdown/business-travel-checklist.md) | [Free printable business travel checklist](https://checklistforge.com/checklist/business-travel-checklist) |
| Camping Checklist | 43 | [JSON](data/json/camping-checklist.json) · [MD](data/markdown/camping-checklist.md) | [Free printable camping checklist](https://checklistforge.com/checklist/camping-checklist) |
| Car Camping Checklist | 44 | [JSON](data/json/car-camping-checklist.json) · [MD](data/markdown/car-camping-checklist.md) | [Free printable car camping checklist](https://checklistforge.com/checklist/car-camping-checklist) |
| Carry-On Checklist | 28 | [JSON](data/json/carry-on-checklist.json) · [MD](data/markdown/carry-on-checklist.md) | [Free printable carry-on checklist](https://checklistforge.com/checklist/carry-on-checklist) |
| Cruise Packing Checklist | 37 | [JSON](data/json/cruise-packing-checklist.json) · [MD](data/markdown/cruise-packing-checklist.md) | [Free printable cruise packing checklist](https://checklistforge.com/checklist/cruise-packing-checklist) |
| Domestic Travel Checklist | 30 | [JSON](data/json/domestic-travel-checklist.json) · [MD](data/markdown/domestic-travel-checklist.md) | [Free printable domestic travel checklist](https://checklistforge.com/checklist/domestic-travel-checklist) |
| Family Vacation Checklist | 42 | [JSON](data/json/family-vacation-checklist.json) · [MD](data/markdown/family-vacation-checklist.md) | [Free printable family vacation checklist](https://checklistforge.com/checklist/family-vacation-checklist) |
| Hiking Checklist | 38 | [JSON](data/json/hiking-checklist.json) · [MD](data/markdown/hiking-checklist.md) | [Free printable hiking checklist](https://checklistforge.com/checklist/hiking-checklist) |
| International Travel Checklist | 31 | [JSON](data/json/international-travel-checklist.json) · [MD](data/markdown/international-travel-checklist.md) | [Free printable international travel checklist](https://checklistforge.com/checklist/international-travel-checklist) |
| Moving Abroad Checklist | 36 | [JSON](data/json/moving-abroad-checklist.json) · [MD](data/markdown/moving-abroad-checklist.md) | [Free printable moving abroad checklist](https://checklistforge.com/checklist/moving-abroad-checklist) |
| Passport Checklist | 26 | [JSON](data/json/passport-checklist.json) · [MD](data/markdown/passport-checklist.md) | [Free printable passport checklist](https://checklistforge.com/checklist/passport-checklist) |
| REAL ID Checklist | 27 | [JSON](data/json/real-id-checklist.json) · [MD](data/markdown/real-id-checklist.md) | [Free printable real id checklist](https://checklistforge.com/checklist/real-id-checklist) |
| Road Trip Checklist | 45 | [JSON](data/json/road-trip-checklist.json) · [MD](data/markdown/road-trip-checklist.md) | [Free printable road trip checklist](https://checklistforge.com/checklist/road-trip-checklist) |
| RV Camping Checklist | 44 | [JSON](data/json/rv-camping-checklist.json) · [MD](data/markdown/rv-camping-checklist.md) | [Free printable rv camping checklist](https://checklistforge.com/checklist/rv-camping-checklist) |
| Ski Trip Packing List | 41 | [JSON](data/json/ski-trip-packing-checklist.json) · [MD](data/markdown/ski-trip-packing-checklist.md) | [Free printable ski trip packing list (PDF)](https://checklistforge.com/checklist/ski-trip-packing-checklist) |
| Study Abroad Checklist | 36 | [JSON](data/json/study-abroad-checklist.json) · [MD](data/markdown/study-abroad-checklist.md) | [Free printable study abroad checklist](https://checklistforge.com/checklist/study-abroad-checklist) |
| Toiletries Packing List | 37 | [JSON](data/json/toiletries-packing-checklist.json) · [MD](data/markdown/toiletries-packing-checklist.md) | [Free printable toiletries packing list (PDF)](https://checklistforge.com/checklist/toiletries-packing-checklist) |
| Travel Checklist | 33 | [JSON](data/json/travel-checklist.json) · [MD](data/markdown/travel-checklist.md) | [Free printable travel checklist](https://checklistforge.com/checklist/travel-checklist) |
| Travel Document Checklist | 25 | [JSON](data/json/travel-document-checklist.json) · [MD](data/markdown/travel-document-checklist.md) | [Free printable travel document checklist](https://checklistforge.com/checklist/travel-document-checklist) |
| Travel Essentials Checklist | 23 | [JSON](data/json/travel-essentials-checklist.json) · [MD](data/markdown/travel-essentials-checklist.md) | [Free printable travel essentials checklist](https://checklistforge.com/checklist/travel-essentials-checklist) |
| Travel Packing Checklist | 35 | [JSON](data/json/travel-packing-checklist.json) · [MD](data/markdown/travel-packing-checklist.md) | [Free printable travel packing checklist](https://checklistforge.com/checklist/travel-packing-checklist) |
| Travel Safety Checklist | 28 | [JSON](data/json/travel-safety-checklist.json) · [MD](data/markdown/travel-safety-checklist.md) | [Free printable travel safety checklist](https://checklistforge.com/checklist/travel-safety-checklist) |
| Vacation Checklist | 30 | [JSON](data/json/vacation-checklist.json) · [MD](data/markdown/vacation-checklist.md) | [Free printable vacation checklist](https://checklistforge.com/checklist/vacation-checklist) |
| Vacation Packing Checklist | 35 | [JSON](data/json/vacation-packing-checklist.json) · [MD](data/markdown/vacation-packing-checklist.md) | [Free printable vacation packing checklist](https://checklistforge.com/checklist/vacation-packing-checklist) |
| Visa Checklist | 27 | [JSON](data/json/visa-checklist.json) · [MD](data/markdown/visa-checklist.md) | [Free printable visa checklist](https://checklistforge.com/checklist/visa-checklist) |
| Weekend Trip Checklist | 33 | [JSON](data/json/weekend-trip-checklist.json) · [MD](data/markdown/weekend-trip-checklist.md) | [Free printable weekend trip checklist](https://checklistforge.com/checklist/weekend-trip-checklist) |

### Home Maintenance

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Electrical Safety Checklist | 32 | [JSON](data/json/electrical-safety-checklist.json) · [MD](data/markdown/electrical-safety-checklist.md) | [Free printable electrical safety checklist](https://checklistforge.com/checklist/electrical-safety-checklist) |
| Fall Home Maintenance Checklist | 32 | [JSON](data/json/fall-home-maintenance-checklist.json) · [MD](data/markdown/fall-home-maintenance-checklist.md) | [Free printable fall home maintenance checklist](https://checklistforge.com/checklist/fall-home-maintenance-checklist) |
| Home Inspection Checklist | 49 | [JSON](data/json/home-inspection-checklist.json) · [MD](data/markdown/home-inspection-checklist.md) | [Free printable home inspection checklist](https://checklistforge.com/checklist/home-inspection-checklist) |
| Home Maintenance Checklist | 34 | [JSON](data/json/home-maintenance-checklist.json) · [MD](data/markdown/home-maintenance-checklist.md) | [Free printable home maintenance checklist](https://checklistforge.com/checklist/home-maintenance-checklist) |
| Home Safety Checklist | 36 | [JSON](data/json/home-safety-checklist.json) · [MD](data/markdown/home-safety-checklist.md) | [Free printable home safety checklist](https://checklistforge.com/checklist/home-safety-checklist) |
| HVAC Maintenance Checklist | 30 | [JSON](data/json/hvac-maintenance-checklist.json) · [MD](data/markdown/hvac-maintenance-checklist.md) | [Free printable hvac maintenance checklist](https://checklistforge.com/checklist/hvac-maintenance-checklist) |
| Make Ready Checklist | 37 | [JSON](data/json/make-ready-checklist.json) · [MD](data/markdown/make-ready-checklist.md) | [Free printable make ready checklist](https://checklistforge.com/checklist/make-ready-checklist) |
| Plumbing Maintenance Checklist | 33 | [JSON](data/json/plumbing-maintenance-checklist.json) · [MD](data/markdown/plumbing-maintenance-checklist.md) | [Free printable plumbing maintenance checklist](https://checklistforge.com/checklist/plumbing-maintenance-checklist) |
| Roof Inspection Checklist | 31 | [JSON](data/json/roof-inspection-checklist.json) · [MD](data/markdown/roof-inspection-checklist.md) | [Free printable roof inspection checklist](https://checklistforge.com/checklist/roof-inspection-checklist) |
| Seasonal Home Maintenance Checklist | 29 | [JSON](data/json/seasonal-home-maintenance-checklist.json) · [MD](data/markdown/seasonal-home-maintenance-checklist.md) | [Free printable seasonal home maintenance checklist](https://checklistforge.com/checklist/seasonal-home-maintenance-checklist) |
| Summer Home Maintenance Checklist | 33 | [JSON](data/json/summer-home-maintenance-checklist.json) · [MD](data/markdown/summer-home-maintenance-checklist.md) | [Free printable summer home maintenance checklist](https://checklistforge.com/checklist/summer-home-maintenance-checklist) |
| Winter Home Maintenance Checklist | 32 | [JSON](data/json/winter-home-maintenance-checklist.json) · [MD](data/markdown/winter-home-maintenance-checklist.md) | [Free printable winter home maintenance checklist](https://checklistforge.com/checklist/winter-home-maintenance-checklist) |

### Home Organization

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Chore Chart by Age | 53 | [JSON](data/json/chore-chart.json) · [MD](data/markdown/chore-chart.md) | [Free printable chore chart by age (PDF)](https://checklistforge.com/checklist/chore-chart) |
| Closet Organization Checklist | 30 | [JSON](data/json/closet-organization-checklist.json) · [MD](data/markdown/closet-organization-checklist.md) | [Free printable closet organization checklist](https://checklistforge.com/checklist/closet-organization-checklist) |
| Decluttering Checklist | 30 | [JSON](data/json/decluttering-checklist.json) · [MD](data/markdown/decluttering-checklist.md) | [Free printable decluttering checklist](https://checklistforge.com/checklist/decluttering-checklist) |
| Donation Checklist | 30 | [JSON](data/json/donation-checklist.json) · [MD](data/markdown/donation-checklist.md) | [Free printable donation checklist](https://checklistforge.com/checklist/donation-checklist) |
| Garage Organization Checklist | 30 | [JSON](data/json/garage-organization-checklist.json) · [MD](data/markdown/garage-organization-checklist.md) | [Free printable garage organization checklist](https://checklistforge.com/checklist/garage-organization-checklist) |
| Home Office Checklist | 30 | [JSON](data/json/home-office-checklist.json) · [MD](data/markdown/home-office-checklist.md) | [Free printable home office checklist](https://checklistforge.com/checklist/home-office-checklist) |
| Home Organization Checklist | 30 | [JSON](data/json/home-organization-checklist.json) · [MD](data/markdown/home-organization-checklist.md) | [Free printable home organization checklist](https://checklistforge.com/checklist/home-organization-checklist) |
| Kitchen Organization Checklist | 30 | [JSON](data/json/kitchen-organization-checklist.json) · [MD](data/markdown/kitchen-organization-checklist.md) | [Free printable kitchen organization checklist](https://checklistforge.com/checklist/kitchen-organization-checklist) |
| Pantry Checklist | 30 | [JSON](data/json/pantry-checklist.json) · [MD](data/markdown/pantry-checklist.md) | [Free printable pantry checklist](https://checklistforge.com/checklist/pantry-checklist) |
| Storage Checklist | 30 | [JSON](data/json/storage-checklist.json) · [MD](data/markdown/storage-checklist.md) | [Free printable storage checklist](https://checklistforge.com/checklist/storage-checklist) |

### Pregnancy & Baby

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Baby Essentials Checklist | 39 | [JSON](data/json/baby-essentials-checklist.json) · [MD](data/markdown/baby-essentials-checklist.md) | [Free printable baby essentials checklist](https://checklistforge.com/checklist/baby-essentials-checklist) |
| Baby Feeding Checklist | 37 | [JSON](data/json/baby-feeding-checklist.json) · [MD](data/markdown/baby-feeding-checklist.md) | [Free printable baby feeding checklist](https://checklistforge.com/checklist/baby-feeding-checklist) |
| Baby Registry Checklist | 41 | [JSON](data/json/baby-registry-checklist.json) · [MD](data/markdown/baby-registry-checklist.md) | [Free printable baby registry checklist](https://checklistforge.com/checklist/baby-registry-checklist) |
| Baby Shower Checklist | 42 | [JSON](data/json/baby-shower-checklist.json) · [MD](data/markdown/baby-shower-checklist.md) | [Free printable baby shower checklist](https://checklistforge.com/checklist/baby-shower-checklist) |
| First Baby Checklist | 42 | [JSON](data/json/first-baby-checklist.json) · [MD](data/markdown/first-baby-checklist.md) | [Free printable first baby checklist](https://checklistforge.com/checklist/first-baby-checklist) |
| Hospital Bag Checklist | 41 | [JSON](data/json/hospital-bag-checklist.json) · [MD](data/markdown/hospital-bag-checklist.md) | [Free printable hospital bag checklist](https://checklistforge.com/checklist/hospital-bag-checklist) |
| Maternity Checklist | 42 | [JSON](data/json/maternity-checklist.json) · [MD](data/markdown/maternity-checklist.md) | [Free printable maternity checklist](https://checklistforge.com/checklist/maternity-checklist) |
| Newborn Care Checklist | 36 | [JSON](data/json/newborn-care-checklist.json) · [MD](data/markdown/newborn-care-checklist.md) | [Free printable newborn care checklist](https://checklistforge.com/checklist/newborn-care-checklist) |
| Nursery Checklist | 42 | [JSON](data/json/nursery-checklist.json) · [MD](data/markdown/nursery-checklist.md) | [Free printable nursery checklist](https://checklistforge.com/checklist/nursery-checklist) |
| Postpartum Checklist | 36 | [JSON](data/json/postpartum-checklist.json) · [MD](data/markdown/postpartum-checklist.md) | [Free printable postpartum checklist](https://checklistforge.com/checklist/postpartum-checklist) |
| Pregnancy Checklist | 40 | [JSON](data/json/pregnancy-checklist.json) · [MD](data/markdown/pregnancy-checklist.md) | [Free printable pregnancy checklist](https://checklistforge.com/checklist/pregnancy-checklist) |
| Pregnancy Nutrition Checklist | 35 | [JSON](data/json/pregnancy-nutrition-checklist.json) · [MD](data/markdown/pregnancy-nutrition-checklist.md) | [Free printable pregnancy nutrition checklist](https://checklistforge.com/checklist/pregnancy-nutrition-checklist) |
| Prenatal Checklist | 36 | [JSON](data/json/prenatal-checklist.json) · [MD](data/markdown/prenatal-checklist.md) | [Free printable prenatal checklist](https://checklistforge.com/checklist/prenatal-checklist) |

### Wedding

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Bridal Checklist | 36 | [JSON](data/json/bridal-checklist.json) · [MD](data/markdown/bridal-checklist.md) | [Free printable bridal checklist](https://checklistforge.com/checklist/bridal-checklist) |
| Destination Wedding Checklist | 42 | [JSON](data/json/destination-wedding-checklist.json) · [MD](data/markdown/destination-wedding-checklist.md) | [Free printable destination wedding checklist](https://checklistforge.com/checklist/destination-wedding-checklist) |
| Wedding Budget Checklist | 37 | [JSON](data/json/wedding-budget-checklist.json) · [MD](data/markdown/wedding-budget-checklist.md) | [Free printable wedding budget checklist](https://checklistforge.com/checklist/wedding-budget-checklist) |
| Wedding Checklist | 38 | [JSON](data/json/wedding-checklist.json) · [MD](data/markdown/wedding-checklist.md) | [Free printable wedding checklist](https://checklistforge.com/checklist/wedding-checklist) |
| Wedding Day Checklist | 37 | [JSON](data/json/wedding-day-checklist.json) · [MD](data/markdown/wedding-day-checklist.md) | [Free printable wedding day checklist](https://checklistforge.com/checklist/wedding-day-checklist) |
| Wedding Photography Checklist | 42 | [JSON](data/json/wedding-photography-checklist.json) · [MD](data/markdown/wedding-photography-checklist.md) | [Free printable wedding photography checklist](https://checklistforge.com/checklist/wedding-photography-checklist) |
| Wedding Planning Checklist | 37 | [JSON](data/json/wedding-planning-checklist.json) · [MD](data/markdown/wedding-planning-checklist.md) | [Free printable wedding planning checklist](https://checklistforge.com/checklist/wedding-planning-checklist) |
| Wedding Reception Checklist | 42 | [JSON](data/json/wedding-reception-checklist.json) · [MD](data/markdown/wedding-reception-checklist.md) | [Free printable wedding reception checklist](https://checklistforge.com/checklist/wedding-reception-checklist) |
| Wedding Timeline Checklist | 42 | [JSON](data/json/wedding-timeline-checklist.json) · [MD](data/markdown/wedding-timeline-checklist.md) | [Free printable wedding timeline checklist](https://checklistforge.com/checklist/wedding-timeline-checklist) |
| Wedding Vendor Checklist | 41 | [JSON](data/json/wedding-vendor-checklist.json) · [MD](data/markdown/wedding-vendor-checklist.md) | [Free printable wedding vendor checklist](https://checklistforge.com/checklist/wedding-vendor-checklist) |

### Emergency Preparedness

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Bug Out Bag Checklist | 32 | [JSON](data/json/bug-out-bag-checklist.json) · [MD](data/markdown/bug-out-bag-checklist.md) | [Free printable bug out bag checklist](https://checklistforge.com/checklist/bug-out-bag-checklist) |
| Disaster Preparedness Checklist | 34 | [JSON](data/json/disaster-preparedness-checklist.json) · [MD](data/markdown/disaster-preparedness-checklist.md) | [Free printable disaster preparedness checklist](https://checklistforge.com/checklist/disaster-preparedness-checklist) |
| Earthquake Checklist | 29 | [JSON](data/json/earthquake-checklist.json) · [MD](data/markdown/earthquake-checklist.md) | [Free printable earthquake checklist](https://checklistforge.com/checklist/earthquake-checklist) |
| Emergency Kit Checklist | 31 | [JSON](data/json/emergency-kit-checklist.json) · [MD](data/markdown/emergency-kit-checklist.md) | [Free printable emergency kit checklist](https://checklistforge.com/checklist/emergency-kit-checklist) |
| Emergency Preparedness Checklist | 33 | [JSON](data/json/emergency-preparedness-checklist.json) · [MD](data/markdown/emergency-preparedness-checklist.md) | [Free printable emergency preparedness checklist](https://checklistforge.com/checklist/emergency-preparedness-checklist) |
| Go Bag Checklist | 41 | [JSON](data/json/go-bag-checklist.json) · [MD](data/markdown/go-bag-checklist.md) | [Free printable go bag checklist](https://checklistforge.com/checklist/go-bag-checklist) |
| Hurricane Checklist | 29 | [JSON](data/json/hurricane-checklist.json) · [MD](data/markdown/hurricane-checklist.md) | [Free printable hurricane checklist](https://checklistforge.com/checklist/hurricane-checklist) |
| Survival Checklist | 32 | [JSON](data/json/survival-checklist.json) · [MD](data/markdown/survival-checklist.md) | [Free printable survival checklist](https://checklistforge.com/checklist/survival-checklist) |

### Food & Kitchen

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Camping Food Checklist | 38 | [JSON](data/json/camping-food-checklist.json) · [MD](data/markdown/camping-food-checklist.md) | [Free printable camping food checklist](https://checklistforge.com/checklist/camping-food-checklist) |
| Grocery Checklist | 40 | [JSON](data/json/grocery-checklist.json) · [MD](data/markdown/grocery-checklist.md) | [Free printable grocery checklist](https://checklistforge.com/checklist/grocery-checklist) |
| Healthy Grocery Checklist | 34 | [JSON](data/json/healthy-grocery-checklist.json) · [MD](data/markdown/healthy-grocery-checklist.md) | [Free printable healthy grocery checklist](https://checklistforge.com/checklist/healthy-grocery-checklist) |
| Kitchen Essentials Checklist | 44 | [JSON](data/json/kitchen-essentials-checklist.json) · [MD](data/markdown/kitchen-essentials-checklist.md) | [Free printable kitchen essentials checklist](https://checklistforge.com/checklist/kitchen-essentials-checklist) |
| Meal Prep Checklist | 32 | [JSON](data/json/meal-prep-checklist.json) · [MD](data/markdown/meal-prep-checklist.md) | [Free printable meal prep checklist](https://checklistforge.com/checklist/meal-prep-checklist) |
| Pantry Essentials Checklist | 39 | [JSON](data/json/pantry-essentials-checklist.json) · [MD](data/markdown/pantry-essentials-checklist.md) | [Free printable pantry essentials checklist](https://checklistforge.com/checklist/pantry-essentials-checklist) |
| Weekly Meal Planning Checklist | 31 | [JSON](data/json/weekly-meal-planning-checklist.json) · [MD](data/markdown/weekly-meal-planning-checklist.md) | [Free printable weekly meal planning checklist](https://checklistforge.com/checklist/weekly-meal-planning-checklist) |

### Inspections

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Building Inspection Checklist | 36 | [JSON](data/json/building-inspection-checklist.json) · [MD](data/markdown/building-inspection-checklist.md) | [Free printable building inspection checklist](https://checklistforge.com/checklist/building-inspection-checklist) |
| Crane Inspection Checklist | 36 | [JSON](data/json/crane-inspection-checklist.json) · [MD](data/markdown/crane-inspection-checklist.md) | [Free printable crane inspection checklist](https://checklistforge.com/checklist/crane-inspection-checklist) |
| Equipment Inspection Checklist | 36 | [JSON](data/json/equipment-inspection-checklist.json) · [MD](data/markdown/equipment-inspection-checklist.md) | [Free printable equipment inspection checklist](https://checklistforge.com/checklist/equipment-inspection-checklist) |
| Facility Inspection Checklist | 36 | [JSON](data/json/facility-inspection-checklist.json) · [MD](data/markdown/facility-inspection-checklist.md) | [Free printable facility inspection checklist](https://checklistforge.com/checklist/facility-inspection-checklist) |
| Factory Inspection Checklist | 36 | [JSON](data/json/factory-inspection-checklist.json) · [MD](data/markdown/factory-inspection-checklist.md) | [Free printable factory inspection checklist](https://checklistforge.com/checklist/factory-inspection-checklist) |
| Fire Extinguisher Inspection Checklist | 31 | [JSON](data/json/fire-extinguisher-inspection-checklist.json) · [MD](data/markdown/fire-extinguisher-inspection-checklist.md) | [Free printable fire extinguisher inspection checklist](https://checklistforge.com/checklist/fire-extinguisher-inspection-checklist) |
| Forklift Inspection Checklist | 36 | [JSON](data/json/forklift-inspection-checklist.json) · [MD](data/markdown/forklift-inspection-checklist.md) | [Free printable forklift inspection checklist](https://checklistforge.com/checklist/forklift-inspection-checklist) |
| Heavy Equipment Checklist | 36 | [JSON](data/json/heavy-equipment-checklist.json) · [MD](data/markdown/heavy-equipment-checklist.md) | [Free printable heavy equipment checklist](https://checklistforge.com/checklist/heavy-equipment-checklist) |
| Scaffold Inspection Checklist | 36 | [JSON](data/json/scaffold-inspection-checklist.json) · [MD](data/markdown/scaffold-inspection-checklist.md) | [Free printable scaffold inspection checklist](https://checklistforge.com/checklist/scaffold-inspection-checklist) |
| Site Inspection Checklist | 36 | [JSON](data/json/site-inspection-checklist.json) · [MD](data/markdown/site-inspection-checklist.md) | [Free printable site inspection checklist](https://checklistforge.com/checklist/site-inspection-checklist) |
| Tool Inspection Checklist | 36 | [JSON](data/json/tool-inspection-checklist.json) · [MD](data/markdown/tool-inspection-checklist.md) | [Free printable tool inspection checklist](https://checklistforge.com/checklist/tool-inspection-checklist) |
| Vehicle Inspection Checklist | 36 | [JSON](data/json/vehicle-inspection-checklist.json) · [MD](data/markdown/vehicle-inspection-checklist.md) | [Free printable vehicle inspection checklist](https://checklistforge.com/checklist/vehicle-inspection-checklist) |
| Warehouse Inspection Checklist | 36 | [JSON](data/json/warehouse-inspection-checklist.json) · [MD](data/markdown/warehouse-inspection-checklist.md) | [Free printable warehouse inspection checklist](https://checklistforge.com/checklist/warehouse-inspection-checklist) |

### Workplace Safety

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Confined Space Checklist | 32 | [JSON](data/json/confined-space-checklist.json) · [MD](data/markdown/confined-space-checklist.md) | [Free printable confined space checklist](https://checklistforge.com/checklist/confined-space-checklist) |
| Emergency Evacuation Checklist | 32 | [JSON](data/json/emergency-evacuation-checklist.json) · [MD](data/markdown/emergency-evacuation-checklist.md) | [Free printable emergency evacuation checklist](https://checklistforge.com/checklist/emergency-evacuation-checklist) |
| Excavation Checklist | 32 | [JSON](data/json/excavation-checklist.json) · [MD](data/markdown/excavation-checklist.md) | [Free printable excavation checklist](https://checklistforge.com/checklist/excavation-checklist) |
| Fall Protection Checklist | 32 | [JSON](data/json/fall-protection-checklist.json) · [MD](data/markdown/fall-protection-checklist.md) | [Free printable fall protection checklist](https://checklistforge.com/checklist/fall-protection-checklist) |
| Fire Inspection Checklist | 32 | [JSON](data/json/fire-inspection-checklist.json) · [MD](data/markdown/fire-inspection-checklist.md) | [Free printable fire inspection checklist](https://checklistforge.com/checklist/fire-inspection-checklist) |
| Fire Safety Checklist | 32 | [JSON](data/json/fire-safety-checklist.json) · [MD](data/markdown/fire-safety-checklist.md) | [Free printable fire safety checklist](https://checklistforge.com/checklist/fire-safety-checklist) |
| Ladder Safety Checklist | 27 | [JSON](data/json/ladder-safety-checklist.json) · [MD](data/markdown/ladder-safety-checklist.md) | [Free printable ladder safety checklist](https://checklistforge.com/checklist/ladder-safety-checklist) |
| Lockout/Tagout Checklist | 31 | [JSON](data/json/lockout-tagout-checklist.json) · [MD](data/markdown/lockout-tagout-checklist.md) | [Free printable lockout/tagout checklist](https://checklistforge.com/checklist/lockout-tagout-checklist) |
| OSHA Checklist | 32 | [JSON](data/json/osha-checklist.json) · [MD](data/markdown/osha-checklist.md) | [Free printable osha checklist](https://checklistforge.com/checklist/osha-checklist) |
| PPE Checklist | 31 | [JSON](data/json/ppe-checklist.json) · [MD](data/markdown/ppe-checklist.md) | [Free printable ppe checklist](https://checklistforge.com/checklist/ppe-checklist) |
| Site Safety Checklist | 32 | [JSON](data/json/site-safety-checklist.json) · [MD](data/markdown/site-safety-checklist.md) | [Free printable site safety checklist](https://checklistforge.com/checklist/site-safety-checklist) |
| Warehouse Safety Checklist | 32 | [JSON](data/json/warehouse-safety-checklist.json) · [MD](data/markdown/warehouse-safety-checklist.md) | [Free printable warehouse safety checklist](https://checklistforge.com/checklist/warehouse-safety-checklist) |
| Workplace Safety Checklist | 33 | [JSON](data/json/workplace-safety-checklist.json) · [MD](data/markdown/workplace-safety-checklist.md) | [Free printable workplace safety checklist](https://checklistforge.com/checklist/workplace-safety-checklist) |

### Vehicles

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Bicycle Safety Checklist | 31 | [JSON](data/json/bicycle-safety-checklist.json) · [MD](data/markdown/bicycle-safety-checklist.md) | [Free printable bicycle safety checklist](https://checklistforge.com/checklist/bicycle-safety-checklist) |
| Bike Maintenance Checklist | 33 | [JSON](data/json/bike-maintenance-checklist.json) · [MD](data/markdown/bike-maintenance-checklist.md) | [Free printable bike maintenance checklist](https://checklistforge.com/checklist/bike-maintenance-checklist) |
| Boat Maintenance Checklist | 33 | [JSON](data/json/boat-maintenance-checklist.json) · [MD](data/markdown/boat-maintenance-checklist.md) | [Free printable boat maintenance checklist](https://checklistforge.com/checklist/boat-maintenance-checklist) |
| Boat Safety Checklist | 31 | [JSON](data/json/boat-safety-checklist.json) · [MD](data/markdown/boat-safety-checklist.md) | [Free printable boat safety checklist](https://checklistforge.com/checklist/boat-safety-checklist) |
| Car Buying Checklist | 36 | [JSON](data/json/car-buying-checklist.json) · [MD](data/markdown/car-buying-checklist.md) | [Free printable car buying checklist](https://checklistforge.com/checklist/car-buying-checklist) |
| Car Inspection Checklist | 36 | [JSON](data/json/car-inspection-checklist.json) · [MD](data/markdown/car-inspection-checklist.md) | [Free printable car inspection checklist](https://checklistforge.com/checklist/car-inspection-checklist) |
| Car Maintenance Checklist | 36 | [JSON](data/json/car-maintenance-checklist.json) · [MD](data/markdown/car-maintenance-checklist.md) | [Free printable car maintenance checklist](https://checklistforge.com/checklist/car-maintenance-checklist) |
| Driver Safety Checklist | 36 | [JSON](data/json/driver-safety-checklist.json) · [MD](data/markdown/driver-safety-checklist.md) | [Free printable driver safety checklist](https://checklistforge.com/checklist/driver-safety-checklist) |
| Fleet Maintenance Checklist | 36 | [JSON](data/json/fleet-maintenance-checklist.json) · [MD](data/markdown/fleet-maintenance-checklist.md) | [Free printable fleet maintenance checklist](https://checklistforge.com/checklist/fleet-maintenance-checklist) |
| IMSAFE Checklist | 30 | [JSON](data/json/imsafe-checklist.json) · [MD](data/markdown/imsafe-checklist.md) | [Free printable imsafe checklist](https://checklistforge.com/checklist/imsafe-checklist) |
| Motorcycle Checklist | 34 | [JSON](data/json/motorcycle-checklist.json) · [MD](data/markdown/motorcycle-checklist.md) | [Free printable motorcycle checklist](https://checklistforge.com/checklist/motorcycle-checklist) |
| Motorcycle Maintenance Checklist | 30 | [JSON](data/json/motorcycle-maintenance-checklist.json) · [MD](data/markdown/motorcycle-maintenance-checklist.md) | [Free printable motorcycle maintenance checklist](https://checklistforge.com/checklist/motorcycle-maintenance-checklist) |
| New Car Checklist | 36 | [JSON](data/json/new-car-checklist.json) · [MD](data/markdown/new-car-checklist.md) | [Free printable new car checklist](https://checklistforge.com/checklist/new-car-checklist) |
| Road Trip Car Checklist | 36 | [JSON](data/json/road-trip-car-checklist.json) · [MD](data/markdown/road-trip-car-checklist.md) | [Free printable road trip car checklist](https://checklistforge.com/checklist/road-trip-car-checklist) |
| RV Arrival Checklist | 31 | [JSON](data/json/rv-arrival-checklist.json) · [MD](data/markdown/rv-arrival-checklist.md) | [Free printable rv arrival checklist](https://checklistforge.com/checklist/rv-arrival-checklist) |
| RV Checklist | 34 | [JSON](data/json/rv-checklist.json) · [MD](data/markdown/rv-checklist.md) | [Free printable rv checklist](https://checklistforge.com/checklist/rv-checklist) |
| RV Departure Checklist | 35 | [JSON](data/json/rv-departure-checklist.json) · [MD](data/markdown/rv-departure-checklist.md) | [Free printable rv departure checklist](https://checklistforge.com/checklist/rv-departure-checklist) |
| Summer Car Checklist | 36 | [JSON](data/json/summer-car-checklist.json) · [MD](data/markdown/summer-car-checklist.md) | [Free printable summer car checklist](https://checklistforge.com/checklist/summer-car-checklist) |
| Truck Inspection Checklist | 36 | [JSON](data/json/truck-inspection-checklist.json) · [MD](data/markdown/truck-inspection-checklist.md) | [Free printable truck inspection checklist](https://checklistforge.com/checklist/truck-inspection-checklist) |
| Used Car Buying Checklist | 36 | [JSON](data/json/used-car-buying-checklist.json) · [MD](data/markdown/used-car-buying-checklist.md) | [Free printable used car buying checklist](https://checklistforge.com/checklist/used-car-buying-checklist) |
| Used Car Inspection Checklist | 36 | [JSON](data/json/used-car-inspection-checklist.json) · [MD](data/markdown/used-car-inspection-checklist.md) | [Free printable used car inspection checklist](https://checklistforge.com/checklist/used-car-inspection-checklist) |
| Vehicle Safety Checklist | 36 | [JSON](data/json/vehicle-safety-checklist.json) · [MD](data/markdown/vehicle-safety-checklist.md) | [Free printable vehicle safety checklist](https://checklistforge.com/checklist/vehicle-safety-checklist) |
| Winter Car Checklist | 36 | [JSON](data/json/winter-car-checklist.json) · [MD](data/markdown/winter-car-checklist.md) | [Free printable winter car checklist](https://checklistforge.com/checklist/winter-car-checklist) |

### Pets

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Aquarium Maintenance Checklist | 24 | [JSON](data/json/aquarium-maintenance-checklist.json) · [MD](data/markdown/aquarium-maintenance-checklist.md) | [Free printable aquarium maintenance checklist](https://checklistforge.com/checklist/aquarium-maintenance-checklist) |
| Bird Care Checklist | 30 | [JSON](data/json/bird-care-checklist.json) · [MD](data/markdown/bird-care-checklist.md) | [Free printable bird care checklist](https://checklistforge.com/checklist/bird-care-checklist) |
| Cat Adoption Checklist | 36 | [JSON](data/json/cat-adoption-checklist.json) · [MD](data/markdown/cat-adoption-checklist.md) | [Free printable cat adoption checklist](https://checklistforge.com/checklist/cat-adoption-checklist) |
| Cat Care Checklist | 36 | [JSON](data/json/cat-care-checklist.json) · [MD](data/markdown/cat-care-checklist.md) | [Free printable cat care checklist](https://checklistforge.com/checklist/cat-care-checklist) |
| Cat First Aid Checklist | 31 | [JSON](data/json/cat-first-aid-checklist.json) · [MD](data/markdown/cat-first-aid-checklist.md) | [Free printable cat first aid checklist](https://checklistforge.com/checklist/cat-first-aid-checklist) |
| Cat Grooming Checklist | 37 | [JSON](data/json/cat-grooming-checklist.json) · [MD](data/markdown/cat-grooming-checklist.md) | [Free printable cat grooming checklist](https://checklistforge.com/checklist/cat-grooming-checklist) |
| Cat Medication Checklist | 31 | [JSON](data/json/cat-medication-checklist.json) · [MD](data/markdown/cat-medication-checklist.md) | [Free printable cat medication checklist](https://checklistforge.com/checklist/cat-medication-checklist) |
| Cat Sitter Checklist | 37 | [JSON](data/json/cat-sitter-checklist.json) · [MD](data/markdown/cat-sitter-checklist.md) | [Free printable cat sitter checklist](https://checklistforge.com/checklist/cat-sitter-checklist) |
| Cat Supplies Checklist | 29 | [JSON](data/json/cat-supplies-checklist.json) · [MD](data/markdown/cat-supplies-checklist.md) | [Free printable cat supplies checklist](https://checklistforge.com/checklist/cat-supplies-checklist) |
| Dog Adoption Checklist | 36 | [JSON](data/json/dog-adoption-checklist.json) · [MD](data/markdown/dog-adoption-checklist.md) | [Free printable dog adoption checklist](https://checklistforge.com/checklist/dog-adoption-checklist) |
| Dog Care Checklist | 36 | [JSON](data/json/dog-care-checklist.json) · [MD](data/markdown/dog-care-checklist.md) | [Free printable dog care checklist](https://checklistforge.com/checklist/dog-care-checklist) |
| Dog First Aid Checklist | 31 | [JSON](data/json/dog-first-aid-checklist.json) · [MD](data/markdown/dog-first-aid-checklist.md) | [Free printable dog first aid checklist](https://checklistforge.com/checklist/dog-first-aid-checklist) |
| Dog Grooming Checklist | 37 | [JSON](data/json/dog-grooming-checklist.json) · [MD](data/markdown/dog-grooming-checklist.md) | [Free printable dog grooming checklist](https://checklistforge.com/checklist/dog-grooming-checklist) |
| Dog Medication Checklist | 31 | [JSON](data/json/dog-medication-checklist.json) · [MD](data/markdown/dog-medication-checklist.md) | [Free printable dog medication checklist](https://checklistforge.com/checklist/dog-medication-checklist) |
| Dog Sitter Checklist | 37 | [JSON](data/json/dog-sitter-checklist.json) · [MD](data/markdown/dog-sitter-checklist.md) | [Free printable dog sitter checklist](https://checklistforge.com/checklist/dog-sitter-checklist) |
| Dog Supplies Checklist | 30 | [JSON](data/json/dog-supplies-checklist.json) · [MD](data/markdown/dog-supplies-checklist.md) | [Free printable dog supplies checklist](https://checklistforge.com/checklist/dog-supplies-checklist) |
| Dog Training Checklist | 36 | [JSON](data/json/dog-training-checklist.json) · [MD](data/markdown/dog-training-checklist.md) | [Free printable dog training checklist](https://checklistforge.com/checklist/dog-training-checklist) |
| Dog Travel Checklist | 37 | [JSON](data/json/dog-travel-checklist.json) · [MD](data/markdown/dog-travel-checklist.md) | [Free printable dog travel checklist](https://checklistforge.com/checklist/dog-travel-checklist) |
| Dog Walking Checklist | 36 | [JSON](data/json/dog-walking-checklist.json) · [MD](data/markdown/dog-walking-checklist.md) | [Free printable dog walking checklist](https://checklistforge.com/checklist/dog-walking-checklist) |
| Fish Tank Checklist | 29 | [JSON](data/json/fish-tank-checklist.json) · [MD](data/markdown/fish-tank-checklist.md) | [Free printable fish tank checklist](https://checklistforge.com/checklist/fish-tank-checklist) |
| Hamster Care Checklist | 29 | [JSON](data/json/hamster-care-checklist.json) · [MD](data/markdown/hamster-care-checklist.md) | [Free printable hamster care checklist](https://checklistforge.com/checklist/hamster-care-checklist) |
| Horse Care Checklist | 29 | [JSON](data/json/horse-care-checklist.json) · [MD](data/markdown/horse-care-checklist.md) | [Free printable horse care checklist](https://checklistforge.com/checklist/horse-care-checklist) |
| Kitten Care Checklist | 36 | [JSON](data/json/kitten-care-checklist.json) · [MD](data/markdown/kitten-care-checklist.md) | [Free printable kitten care checklist](https://checklistforge.com/checklist/kitten-care-checklist) |
| Kitten Checklist | 36 | [JSON](data/json/kitten-checklist.json) · [MD](data/markdown/kitten-checklist.md) | [Free printable kitten checklist](https://checklistforge.com/checklist/kitten-checklist) |
| Kitten Vaccination Checklist | 31 | [JSON](data/json/kitten-vaccination-checklist.json) · [MD](data/markdown/kitten-vaccination-checklist.md) | [Free printable kitten vaccination checklist](https://checklistforge.com/checklist/kitten-vaccination-checklist) |
| New Cat Checklist | 36 | [JSON](data/json/new-cat-checklist.json) · [MD](data/markdown/new-cat-checklist.md) | [Free printable new cat checklist](https://checklistforge.com/checklist/new-cat-checklist) |
| New Dog Checklist | 36 | [JSON](data/json/new-dog-checklist.json) · [MD](data/markdown/new-dog-checklist.md) | [Free printable new dog checklist](https://checklistforge.com/checklist/new-dog-checklist) |
| New Kitten Checklist | 36 | [JSON](data/json/new-kitten-checklist.json) · [MD](data/markdown/new-kitten-checklist.md) | [Free printable new kitten checklist](https://checklistforge.com/checklist/new-kitten-checklist) |
| New Puppy Checklist | 36 | [JSON](data/json/new-puppy-checklist.json) · [MD](data/markdown/new-puppy-checklist.md) | [Free printable new puppy checklist](https://checklistforge.com/checklist/new-puppy-checklist) |
| Pet Adoption Checklist | 36 | [JSON](data/json/pet-adoption-checklist.json) · [MD](data/markdown/pet-adoption-checklist.md) | [Free printable pet adoption checklist](https://checklistforge.com/checklist/pet-adoption-checklist) |
| Pet Boarding Checklist | 37 | [JSON](data/json/pet-boarding-checklist.json) · [MD](data/markdown/pet-boarding-checklist.md) | [Free printable pet boarding checklist](https://checklistforge.com/checklist/pet-boarding-checklist) |
| Pet Care Checklist | 36 | [JSON](data/json/pet-care-checklist.json) · [MD](data/markdown/pet-care-checklist.md) | [Free printable pet care checklist](https://checklistforge.com/checklist/pet-care-checklist) |
| Pet Checklist | 36 | [JSON](data/json/pet-checklist.json) · [MD](data/markdown/pet-checklist.md) | [Free printable pet checklist](https://checklistforge.com/checklist/pet-checklist) |
| Pet Emergency Kit Checklist | 31 | [JSON](data/json/pet-emergency-kit-checklist.json) · [MD](data/markdown/pet-emergency-kit-checklist.md) | [Free printable pet emergency kit checklist](https://checklistforge.com/checklist/pet-emergency-kit-checklist) |
| Pet First Aid Checklist | 31 | [JSON](data/json/pet-first-aid-checklist.json) · [MD](data/markdown/pet-first-aid-checklist.md) | [Free printable pet first aid checklist](https://checklistforge.com/checklist/pet-first-aid-checklist) |
| Pet Grooming Checklist | 37 | [JSON](data/json/pet-grooming-checklist.json) · [MD](data/markdown/pet-grooming-checklist.md) | [Free printable pet grooming checklist](https://checklistforge.com/checklist/pet-grooming-checklist) |
| Pet Health Checklist | 31 | [JSON](data/json/pet-health-checklist.json) · [MD](data/markdown/pet-health-checklist.md) | [Free printable pet health checklist](https://checklistforge.com/checklist/pet-health-checklist) |
| Pet Medication Checklist | 31 | [JSON](data/json/pet-medication-checklist.json) · [MD](data/markdown/pet-medication-checklist.md) | [Free printable pet medication checklist](https://checklistforge.com/checklist/pet-medication-checklist) |
| Pet Moving Checklist | 24 | [JSON](data/json/pet-moving-checklist.json) · [MD](data/markdown/pet-moving-checklist.md) | [Free printable pet moving checklist](https://checklistforge.com/checklist/pet-moving-checklist) |
| Pet Sitter Checklist | 37 | [JSON](data/json/pet-sitter-checklist.json) · [MD](data/markdown/pet-sitter-checklist.md) | [Free printable pet sitter checklist](https://checklistforge.com/checklist/pet-sitter-checklist) |
| Pet Supplies Checklist | 28 | [JSON](data/json/pet-supplies-checklist.json) · [MD](data/markdown/pet-supplies-checklist.md) | [Free printable pet supplies checklist](https://checklistforge.com/checklist/pet-supplies-checklist) |
| Pet Travel Checklist | 37 | [JSON](data/json/pet-travel-checklist.json) · [MD](data/markdown/pet-travel-checklist.md) | [Free printable pet travel checklist](https://checklistforge.com/checklist/pet-travel-checklist) |
| Pet Vaccination Checklist | 31 | [JSON](data/json/pet-vaccination-checklist.json) · [MD](data/markdown/pet-vaccination-checklist.md) | [Free printable pet vaccination checklist](https://checklistforge.com/checklist/pet-vaccination-checklist) |
| Puppy Checklist | 36 | [JSON](data/json/puppy-checklist.json) · [MD](data/markdown/puppy-checklist.md) | [Free printable puppy checklist](https://checklistforge.com/checklist/puppy-checklist) |
| Puppy Training Checklist | 37 | [JSON](data/json/puppy-training-checklist.json) · [MD](data/markdown/puppy-training-checklist.md) | [Free printable puppy training checklist](https://checklistforge.com/checklist/puppy-training-checklist) |
| Puppy Vaccination Checklist | 31 | [JSON](data/json/puppy-vaccination-checklist.json) · [MD](data/markdown/puppy-vaccination-checklist.md) | [Free printable puppy vaccination checklist](https://checklistforge.com/checklist/puppy-vaccination-checklist) |
| Rabbit Care Checklist | 30 | [JSON](data/json/rabbit-care-checklist.json) · [MD](data/markdown/rabbit-care-checklist.md) | [Free printable rabbit care checklist](https://checklistforge.com/checklist/rabbit-care-checklist) |
| Reptile Care Checklist | 29 | [JSON](data/json/reptile-care-checklist.json) · [MD](data/markdown/reptile-care-checklist.md) | [Free printable reptile care checklist](https://checklistforge.com/checklist/reptile-care-checklist) |
| Senior Cat Checklist | 31 | [JSON](data/json/senior-cat-checklist.json) · [MD](data/markdown/senior-cat-checklist.md) | [Free printable senior cat checklist](https://checklistforge.com/checklist/senior-cat-checklist) |
| Senior Dog Checklist | 31 | [JSON](data/json/senior-dog-checklist.json) · [MD](data/markdown/senior-dog-checklist.md) | [Free printable senior dog checklist](https://checklistforge.com/checklist/senior-dog-checklist) |

### Health & Medical

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Annual Physical Checklist | 26 | [JSON](data/json/annual-physical-checklist.json) · [MD](data/markdown/annual-physical-checklist.md) | [Free printable annual physical checklist](https://checklistforge.com/checklist/annual-physical-checklist) |
| Blood Pressure Checklist | 28 | [JSON](data/json/blood-pressure-checklist.json) · [MD](data/markdown/blood-pressure-checklist.md) | [Free printable blood pressure checklist](https://checklistforge.com/checklist/blood-pressure-checklist) |
| Cholesterol Checklist | 27 | [JSON](data/json/cholesterol-checklist.json) · [MD](data/markdown/cholesterol-checklist.md) | [Free printable cholesterol checklist](https://checklistforge.com/checklist/cholesterol-checklist) |
| Diabetes Checklist | 26 | [JSON](data/json/diabetes-checklist.json) · [MD](data/markdown/diabetes-checklist.md) | [Free printable diabetes checklist](https://checklistforge.com/checklist/diabetes-checklist) |
| Doctor Appointment Checklist | 26 | [JSON](data/json/doctor-appointment-checklist.json) · [MD](data/markdown/doctor-appointment-checklist.md) | [Free printable doctor appointment checklist](https://checklistforge.com/checklist/doctor-appointment-checklist) |
| Emergency Medical Checklist | 27 | [JSON](data/json/emergency-medical-checklist.json) · [MD](data/markdown/emergency-medical-checklist.md) | [Free printable emergency medical checklist](https://checklistforge.com/checklist/emergency-medical-checklist) |
| First Aid Kit Checklist | 28 | [JSON](data/json/first-aid-kit-checklist.json) · [MD](data/markdown/first-aid-kit-checklist.md) | [Free printable first aid kit checklist](https://checklistforge.com/checklist/first-aid-kit-checklist) |
| Head-to-Toe Assessment Checklist | 38 | [JSON](data/json/head-to-toe-assessment-checklist.json) · [MD](data/markdown/head-to-toe-assessment-checklist.md) | [Free printable head-to-toe assessment checklist](https://checklistforge.com/checklist/head-to-toe-assessment-checklist) |
| Health Screening Checklist | 25 | [JSON](data/json/health-screening-checklist.json) · [MD](data/markdown/health-screening-checklist.md) | [Free printable health screening checklist](https://checklistforge.com/checklist/health-screening-checklist) |
| Hospital Discharge Checklist | 26 | [JSON](data/json/hospital-discharge-checklist.json) · [MD](data/markdown/hospital-discharge-checklist.md) | [Free printable hospital discharge checklist](https://checklistforge.com/checklist/hospital-discharge-checklist) |
| Medication Checklist | 26 | [JSON](data/json/medication-checklist.json) · [MD](data/markdown/medication-checklist.md) | [Free printable medication checklist](https://checklistforge.com/checklist/medication-checklist) |
| Medicine Checklist | 26 | [JSON](data/json/medicine-checklist.json) · [MD](data/markdown/medicine-checklist.md) | [Free printable medicine checklist](https://checklistforge.com/checklist/medicine-checklist) |
| Menopause and Perimenopause Symptoms Checklist | 37 | [JSON](data/json/menopause-symptoms-checklist.json) · [MD](data/markdown/menopause-symptoms-checklist.md) | [Free printable menopause and perimenopause symptoms checklist](https://checklistforge.com/checklist/menopause-symptoms-checklist) |
| Travel Health Checklist | 26 | [JSON](data/json/travel-health-checklist.json) · [MD](data/markdown/travel-health-checklist.md) | [Free printable travel health checklist](https://checklistforge.com/checklist/travel-health-checklist) |
| Travel Vaccination Checklist | 26 | [JSON](data/json/vaccination-travel-checklist.json) · [MD](data/markdown/vaccination-travel-checklist.md) | [Free printable travel vaccination checklist](https://checklistforge.com/checklist/vaccination-travel-checklist) |
| Vaccination Checklist | 26 | [JSON](data/json/vaccination-checklist.json) · [MD](data/markdown/vaccination-checklist.md) | [Free printable vaccination checklist](https://checklistforge.com/checklist/vaccination-checklist) |

### Marketing

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| App Launch Checklist | 42 | [JSON](data/json/app-launch-checklist.json) · [MD](data/markdown/app-launch-checklist.md) | [Free printable app launch checklist](https://checklistforge.com/checklist/app-launch-checklist) |
| Blog Post Checklist | 25 | [JSON](data/json/blog-post-checklist.json) · [MD](data/markdown/blog-post-checklist.md) | [Free printable blog post checklist](https://checklistforge.com/checklist/blog-post-checklist) |
| Campaign Launch Checklist | 38 | [JSON](data/json/campaign-launch-checklist.json) · [MD](data/markdown/campaign-launch-checklist.md) | [Free printable campaign launch checklist](https://checklistforge.com/checklist/campaign-launch-checklist) |
| Content Checklist | 33 | [JSON](data/json/content-checklist.json) · [MD](data/markdown/content-checklist.md) | [Free printable content checklist](https://checklistforge.com/checklist/content-checklist) |
| Content Marketing Checklist | 39 | [JSON](data/json/content-marketing-checklist.json) · [MD](data/markdown/content-marketing-checklist.md) | [Free printable content marketing checklist](https://checklistforge.com/checklist/content-marketing-checklist) |
| Email Marketing Checklist | 31 | [JSON](data/json/email-marketing-checklist.json) · [MD](data/markdown/email-marketing-checklist.md) | [Free printable email marketing checklist](https://checklistforge.com/checklist/email-marketing-checklist) |
| Local SEO Checklist | 38 | [JSON](data/json/local-seo-checklist.json) · [MD](data/markdown/local-seo-checklist.md) | [Free printable local seo checklist](https://checklistforge.com/checklist/local-seo-checklist) |
| Marketing Checklist | 39 | [JSON](data/json/marketing-checklist.json) · [MD](data/markdown/marketing-checklist.md) | [Free printable marketing checklist](https://checklistforge.com/checklist/marketing-checklist) |
| On-Page SEO Checklist | 38 | [JSON](data/json/on-page-seo-checklist.json) · [MD](data/markdown/on-page-seo-checklist.md) | [Free printable on-page seo checklist](https://checklistforge.com/checklist/on-page-seo-checklist) |
| Product Launch Checklist | 33 | [JSON](data/json/product-launch-checklist.json) · [MD](data/markdown/product-launch-checklist.md) | [Free printable product launch checklist](https://checklistforge.com/checklist/product-launch-checklist) |
| SEO Audit Checklist | 41 | [JSON](data/json/seo-audit-checklist.json) · [MD](data/markdown/seo-audit-checklist.md) | [Free printable seo audit checklist](https://checklistforge.com/checklist/seo-audit-checklist) |
| SEO Checklist | 39 | [JSON](data/json/seo-checklist.json) · [MD](data/markdown/seo-checklist.md) | [Free printable seo checklist](https://checklistforge.com/checklist/seo-checklist) |
| Social Media Checklist | 30 | [JSON](data/json/social-media-checklist.json) · [MD](data/markdown/social-media-checklist.md) | [Free printable social media checklist](https://checklistforge.com/checklist/social-media-checklist) |
| Technical SEO Checklist | 38 | [JSON](data/json/technical-seo-checklist.json) · [MD](data/markdown/technical-seo-checklist.md) | [Free printable technical seo checklist](https://checklistforge.com/checklist/technical-seo-checklist) |
| Website Launch Checklist | 37 | [JSON](data/json/website-launch-checklist.json) · [MD](data/markdown/website-launch-checklist.md) | [Free printable website launch checklist](https://checklistforge.com/checklist/website-launch-checklist) |
| Website Redesign Checklist | 42 | [JSON](data/json/website-redesign-checklist.json) · [MD](data/markdown/website-redesign-checklist.md) | [Free printable website redesign checklist](https://checklistforge.com/checklist/website-redesign-checklist) |

### Students & Study

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Daily Student Checklist | 24 | [JSON](data/json/daily-student-checklist.json) · [MD](data/markdown/daily-student-checklist.md) | [Free printable daily student checklist](https://checklistforge.com/checklist/daily-student-checklist) |
| Distance Learning Checklist | 25 | [JSON](data/json/distance-learning-checklist.json) · [MD](data/markdown/distance-learning-checklist.md) | [Free printable distance learning checklist](https://checklistforge.com/checklist/distance-learning-checklist) |
| Essay Checklist | 34 | [JSON](data/json/essay-checklist.json) · [MD](data/markdown/essay-checklist.md) | [Free printable essay checklist](https://checklistforge.com/checklist/essay-checklist) |
| Exam Checklist | 27 | [JSON](data/json/exam-checklist.json) · [MD](data/markdown/exam-checklist.md) | [Free printable exam checklist](https://checklistforge.com/checklist/exam-checklist) |
| Homework Checklist | 25 | [JSON](data/json/homework-checklist.json) · [MD](data/markdown/homework-checklist.md) | [Free printable homework checklist](https://checklistforge.com/checklist/homework-checklist) |
| Online Learning Checklist | 25 | [JSON](data/json/online-learning-checklist.json) · [MD](data/markdown/online-learning-checklist.md) | [Free printable online learning checklist](https://checklistforge.com/checklist/online-learning-checklist) |
| Presentation Checklist | 28 | [JSON](data/json/presentation-checklist.json) · [MD](data/markdown/presentation-checklist.md) | [Free printable presentation checklist](https://checklistforge.com/checklist/presentation-checklist) |
| Reading Checklist | 26 | [JSON](data/json/reading-checklist.json) · [MD](data/markdown/reading-checklist.md) | [Free printable reading checklist](https://checklistforge.com/checklist/reading-checklist) |
| Research Paper Checklist | 34 | [JSON](data/json/research-paper-checklist.json) · [MD](data/markdown/research-paper-checklist.md) | [Free printable research paper checklist](https://checklistforge.com/checklist/research-paper-checklist) |
| Science Project Checklist | 31 | [JSON](data/json/science-project-checklist.json) · [MD](data/markdown/science-project-checklist.md) | [Free printable science project checklist](https://checklistforge.com/checklist/science-project-checklist) |
| Student Checklist | 33 | [JSON](data/json/student-checklist.json) · [MD](data/markdown/student-checklist.md) | [Free printable student checklist](https://checklistforge.com/checklist/student-checklist) |
| Student Planner Checklist | 30 | [JSON](data/json/student-planner-checklist.json) · [MD](data/markdown/student-planner-checklist.md) | [Free printable student planner checklist](https://checklistforge.com/checklist/student-planner-checklist) |
| Study Checklist | 31 | [JSON](data/json/study-checklist.json) · [MD](data/markdown/study-checklist.md) | [Free printable study checklist](https://checklistforge.com/checklist/study-checklist) |
| Test Preparation Checklist | 26 | [JSON](data/json/test-preparation-checklist.json) · [MD](data/markdown/test-preparation-checklist.md) | [Free printable test preparation checklist](https://checklistforge.com/checklist/test-preparation-checklist) |
| Weekly Study Checklist | 25 | [JSON](data/json/weekly-study-checklist.json) · [MD](data/markdown/weekly-study-checklist.md) | [Free printable weekly study checklist](https://checklistforge.com/checklist/weekly-study-checklist) |
| Writing Checklist | 28 | [JSON](data/json/writing-checklist.json) · [MD](data/markdown/writing-checklist.md) | [Free printable writing checklist](https://checklistforge.com/checklist/writing-checklist) |

### HR & Hiring

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Employee Evaluation Checklist | 36 | [JSON](data/json/employee-evaluation-checklist.json) · [MD](data/markdown/employee-evaluation-checklist.md) | [Free printable employee evaluation checklist](https://checklistforge.com/checklist/employee-evaluation-checklist) |
| Employee Exit Checklist | 36 | [JSON](data/json/employee-exit-checklist.json) · [MD](data/markdown/employee-exit-checklist.md) | [Free printable employee exit checklist](https://checklistforge.com/checklist/employee-exit-checklist) |
| Employee Onboarding Checklist | 36 | [JSON](data/json/employee-onboarding-checklist.json) · [MD](data/markdown/employee-onboarding-checklist.md) | [Free printable employee onboarding checklist](https://checklistforge.com/checklist/employee-onboarding-checklist) |
| Employee Training Checklist | 36 | [JSON](data/json/employee-training-checklist.json) · [MD](data/markdown/employee-training-checklist.md) | [Free printable employee training checklist](https://checklistforge.com/checklist/employee-training-checklist) |
| Hiring Checklist | 36 | [JSON](data/json/hiring-checklist.json) · [MD](data/markdown/hiring-checklist.md) | [Free printable hiring checklist](https://checklistforge.com/checklist/hiring-checklist) |
| HR Compliance Checklist | 36 | [JSON](data/json/hr-compliance-checklist.json) · [MD](data/markdown/hr-compliance-checklist.md) | [Free printable hr compliance checklist](https://checklistforge.com/checklist/hr-compliance-checklist) |
| Interview Checklist | 36 | [JSON](data/json/interview-checklist.json) · [MD](data/markdown/interview-checklist.md) | [Free printable interview checklist](https://checklistforge.com/checklist/interview-checklist) |
| Job Interview Checklist | 36 | [JSON](data/json/job-interview-checklist.json) · [MD](data/markdown/job-interview-checklist.md) | [Free printable job interview checklist](https://checklistforge.com/checklist/job-interview-checklist) |
| New Employee Orientation Checklist | 36 | [JSON](data/json/new-employee-orientation-checklist.json) · [MD](data/markdown/new-employee-orientation-checklist.md) | [Free printable new employee orientation checklist](https://checklistforge.com/checklist/new-employee-orientation-checklist) |
| New Hire Checklist | 36 | [JSON](data/json/new-hire-checklist.json) · [MD](data/markdown/new-hire-checklist.md) | [Free printable new hire checklist](https://checklistforge.com/checklist/new-hire-checklist) |
| New Manager Checklist | 36 | [JSON](data/json/new-manager-checklist.json) · [MD](data/markdown/new-manager-checklist.md) | [Free printable new manager checklist](https://checklistforge.com/checklist/new-manager-checklist) |
| Offboarding Checklist | 36 | [JSON](data/json/offboarding-checklist.json) · [MD](data/markdown/offboarding-checklist.md) | [Free printable offboarding checklist](https://checklistforge.com/checklist/offboarding-checklist) |
| Performance Review Checklist | 36 | [JSON](data/json/performance-review-checklist.json) · [MD](data/markdown/performance-review-checklist.md) | [Free printable performance review checklist](https://checklistforge.com/checklist/performance-review-checklist) |
| Recruitment Checklist | 36 | [JSON](data/json/recruitment-checklist.json) · [MD](data/markdown/recruitment-checklist.md) | [Free printable recruitment checklist](https://checklistforge.com/checklist/recruitment-checklist) |
| Remote Onboarding Checklist | 36 | [JSON](data/json/remote-onboarding-checklist.json) · [MD](data/markdown/remote-onboarding-checklist.md) | [Free printable remote onboarding checklist](https://checklistforge.com/checklist/remote-onboarding-checklist) |

### College & Career

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Career Planning Checklist | 36 | [JSON](data/json/career-planning-checklist.json) · [MD](data/markdown/career-planning-checklist.md) | [Free printable career planning checklist](https://checklistforge.com/checklist/career-planning-checklist) |
| College Application Checklist | 36 | [JSON](data/json/college-application-checklist.json) · [MD](data/markdown/college-application-checklist.md) | [Free printable college application checklist](https://checklistforge.com/checklist/college-application-checklist) |
| College Checklist | 42 | [JSON](data/json/college-checklist.json) · [MD](data/markdown/college-checklist.md) | [Free printable college checklist](https://checklistforge.com/checklist/college-checklist) |
| College Dorm Checklist | 36 | [JSON](data/json/college-dorm-checklist.json) · [MD](data/markdown/college-dorm-checklist.md) | [Free printable college dorm checklist](https://checklistforge.com/checklist/college-dorm-checklist) |
| College Graduation Checklist | 36 | [JSON](data/json/college-graduation-checklist.json) · [MD](data/markdown/college-graduation-checklist.md) | [Free printable college graduation checklist](https://checklistforge.com/checklist/college-graduation-checklist) |
| College Move-In Checklist | 36 | [JSON](data/json/college-move-in-checklist.json) · [MD](data/markdown/college-move-in-checklist.md) | [Free printable college move-in checklist](https://checklistforge.com/checklist/college-move-in-checklist) |
| College Move-Out Checklist | 36 | [JSON](data/json/college-move-out-checklist.json) · [MD](data/markdown/college-move-out-checklist.md) | [Free printable college move-out checklist](https://checklistforge.com/checklist/college-move-out-checklist) |
| College Packing Checklist | 42 | [JSON](data/json/college-packing-checklist.json) · [MD](data/markdown/college-packing-checklist.md) | [Free printable college packing checklist](https://checklistforge.com/checklist/college-packing-checklist) |
| Financial Aid Checklist | 36 | [JSON](data/json/financial-aid-checklist.json) · [MD](data/markdown/financial-aid-checklist.md) | [Free printable financial aid checklist](https://checklistforge.com/checklist/financial-aid-checklist) |
| Graduation Checklist | 36 | [JSON](data/json/graduation-checklist.json) · [MD](data/markdown/graduation-checklist.md) | [Free printable graduation checklist](https://checklistforge.com/checklist/graduation-checklist) |
| High School Graduation Checklist | 36 | [JSON](data/json/high-school-graduation-checklist.json) · [MD](data/markdown/high-school-graduation-checklist.md) | [Free printable high school graduation checklist](https://checklistforge.com/checklist/high-school-graduation-checklist) |
| Internship Checklist | 36 | [JSON](data/json/internship-checklist.json) · [MD](data/markdown/internship-checklist.md) | [Free printable internship checklist](https://checklistforge.com/checklist/internship-checklist) |
| Scholarship Application Checklist | 36 | [JSON](data/json/scholarship-application-checklist.json) · [MD](data/markdown/scholarship-application-checklist.md) | [Free printable scholarship application checklist](https://checklistforge.com/checklist/scholarship-application-checklist) |

### Construction

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Construction Checklist | 42 | [JSON](data/json/construction-checklist.json) · [MD](data/markdown/construction-checklist.md) | [Free printable construction checklist](https://checklistforge.com/checklist/construction-checklist) |
| Construction Closeout Checklist | 36 | [JSON](data/json/construction-closeout-checklist.json) · [MD](data/markdown/construction-closeout-checklist.md) | [Free printable construction closeout checklist](https://checklistforge.com/checklist/construction-closeout-checklist) |
| Construction Handover Checklist | 36 | [JSON](data/json/construction-handover-checklist.json) · [MD](data/markdown/construction-handover-checklist.md) | [Free printable construction handover checklist](https://checklistforge.com/checklist/construction-handover-checklist) |
| Construction Inspection Checklist | 36 | [JSON](data/json/construction-inspection-checklist.json) · [MD](data/markdown/construction-inspection-checklist.md) | [Free printable construction inspection checklist](https://checklistforge.com/checklist/construction-inspection-checklist) |
| Construction Safety Checklist | 36 | [JSON](data/json/construction-safety-checklist.json) · [MD](data/markdown/construction-safety-checklist.md) | [Free printable construction safety checklist](https://checklistforge.com/checklist/construction-safety-checklist) |
| Contractor Checklist | 36 | [JSON](data/json/contractor-checklist.json) · [MD](data/markdown/contractor-checklist.md) | [Free printable contractor checklist](https://checklistforge.com/checklist/contractor-checklist) |
| Daily Construction Checklist | 36 | [JSON](data/json/daily-construction-checklist.json) · [MD](data/markdown/daily-construction-checklist.md) | [Free printable daily construction checklist](https://checklistforge.com/checklist/daily-construction-checklist) |
| Job Site Checklist | 36 | [JSON](data/json/job-site-checklist.json) · [MD](data/markdown/job-site-checklist.md) | [Free printable job site checklist](https://checklistforge.com/checklist/job-site-checklist) |
| Post-Construction Checklist | 36 | [JSON](data/json/post-construction-checklist.json) · [MD](data/markdown/post-construction-checklist.md) | [Free printable post-construction checklist](https://checklistforge.com/checklist/post-construction-checklist) |
| Pre-Construction Checklist | 36 | [JSON](data/json/pre-construction-checklist.json) · [MD](data/markdown/pre-construction-checklist.md) | [Free printable pre-construction checklist](https://checklistforge.com/checklist/pre-construction-checklist) |
| Punch List Checklist | 36 | [JSON](data/json/punch-list-checklist.json) · [MD](data/markdown/punch-list-checklist.md) | [Free printable punch list checklist](https://checklistforge.com/checklist/punch-list-checklist) |
| Subcontractor Checklist | 36 | [JSON](data/json/subcontractor-checklist.json) · [MD](data/markdown/subcontractor-checklist.md) | [Free printable subcontractor checklist](https://checklistforge.com/checklist/subcontractor-checklist) |

### Maintenance & Quality

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| 5S Audit Checklist | 35 | [JSON](data/json/5s-checklist.json) · [MD](data/markdown/5s-checklist.md) | [Free printable 5s audit checklist](https://checklistforge.com/checklist/5s-checklist) |
| Audit Checklist | 36 | [JSON](data/json/audit-checklist.json) · [MD](data/markdown/audit-checklist.md) | [Free printable audit checklist](https://checklistforge.com/checklist/audit-checklist) |
| Compliance Checklist | 36 | [JSON](data/json/compliance-checklist.json) · [MD](data/markdown/compliance-checklist.md) | [Free printable compliance checklist](https://checklistforge.com/checklist/compliance-checklist) |
| Hazard Assessment Checklist | 36 | [JSON](data/json/hazard-assessment-checklist.json) · [MD](data/markdown/hazard-assessment-checklist.md) | [Free printable hazard assessment checklist](https://checklistforge.com/checklist/hazard-assessment-checklist) |
| Maintenance Checklist | 37 | [JSON](data/json/maintenance-checklist.json) · [MD](data/markdown/maintenance-checklist.md) | [Free printable maintenance checklist](https://checklistforge.com/checklist/maintenance-checklist) |
| Manufacturing Checklist | 36 | [JSON](data/json/manufacturing-checklist.json) · [MD](data/markdown/manufacturing-checklist.md) | [Free printable manufacturing checklist](https://checklistforge.com/checklist/manufacturing-checklist) |
| Preventive Maintenance Checklist | 36 | [JSON](data/json/preventive-maintenance-checklist.json) · [MD](data/markdown/preventive-maintenance-checklist.md) | [Free printable preventive maintenance checklist](https://checklistforge.com/checklist/preventive-maintenance-checklist) |
| QA/QC Checklist | 36 | [JSON](data/json/qa-qc-checklist.json) · [MD](data/markdown/qa-qc-checklist.md) | [Free printable qa/qc checklist](https://checklistforge.com/checklist/qa-qc-checklist) |
| Quality Assurance Checklist | 36 | [JSON](data/json/quality-assurance-checklist.json) · [MD](data/markdown/quality-assurance-checklist.md) | [Free printable quality assurance checklist](https://checklistforge.com/checklist/quality-assurance-checklist) |
| Quality Audit Checklist | 36 | [JSON](data/json/quality-audit-checklist.json) · [MD](data/markdown/quality-audit-checklist.md) | [Free printable quality audit checklist](https://checklistforge.com/checklist/quality-audit-checklist) |
| Quality Control Checklist | 36 | [JSON](data/json/quality-control-checklist.json) · [MD](data/markdown/quality-control-checklist.md) | [Free printable quality control checklist](https://checklistforge.com/checklist/quality-control-checklist) |
| Risk Assessment Checklist | 36 | [JSON](data/json/risk-assessment-checklist.json) · [MD](data/markdown/risk-assessment-checklist.md) | [Free printable risk assessment checklist](https://checklistforge.com/checklist/risk-assessment-checklist) |

### Business & Startup

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Business Continuity Checklist | 36 | [JSON](data/json/business-continuity-checklist.json) · [MD](data/markdown/business-continuity-checklist.md) | [Free printable business continuity checklist](https://checklistforge.com/checklist/business-continuity-checklist) |
| Business Launch Checklist | 37 | [JSON](data/json/business-launch-checklist.json) · [MD](data/markdown/business-launch-checklist.md) | [Free printable business launch checklist](https://checklistforge.com/checklist/business-launch-checklist) |
| Business Plan Checklist | 41 | [JSON](data/json/business-plan-checklist.json) · [MD](data/markdown/business-plan-checklist.md) | [Free printable business plan checklist](https://checklistforge.com/checklist/business-plan-checklist) |
| Business Process Checklist | 42 | [JSON](data/json/business-process-checklist.json) · [MD](data/markdown/business-process-checklist.md) | [Free printable business process checklist](https://checklistforge.com/checklist/business-process-checklist) |
| Business Registration Checklist | 36 | [JSON](data/json/business-registration-checklist.json) · [MD](data/markdown/business-registration-checklist.md) | [Free printable business registration checklist](https://checklistforge.com/checklist/business-registration-checklist) |
| Business Startup Checklist | 40 | [JSON](data/json/business-startup-checklist.json) · [MD](data/markdown/business-startup-checklist.md) | [Free printable business startup checklist](https://checklistforge.com/checklist/business-startup-checklist) |
| Inventory Checklist | 31 | [JSON](data/json/inventory-checklist.json) · [MD](data/markdown/inventory-checklist.md) | [Free printable inventory checklist](https://checklistforge.com/checklist/inventory-checklist) |
| Operations Checklist | 42 | [JSON](data/json/operations-checklist.json) · [MD](data/markdown/operations-checklist.md) | [Free printable operations checklist](https://checklistforge.com/checklist/operations-checklist) |
| Small Business Checklist | 38 | [JSON](data/json/small-business-checklist.json) · [MD](data/markdown/small-business-checklist.md) | [Free printable small business checklist](https://checklistforge.com/checklist/small-business-checklist) |
| SOP Checklist | 43 | [JSON](data/json/sop-checklist.json) · [MD](data/markdown/sop-checklist.md) | [Free printable sop checklist](https://checklistforge.com/checklist/sop-checklist) |
| Startup Checklist | 39 | [JSON](data/json/startup-checklist.json) · [MD](data/markdown/startup-checklist.md) | [Free printable startup checklist](https://checklistforge.com/checklist/startup-checklist) |

### Self-Care & Wellness

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Anxiety Checklist | 30 | [JSON](data/json/anxiety-checklist.json) · [MD](data/markdown/anxiety-checklist.md) | [Free printable anxiety checklist](https://checklistforge.com/checklist/anxiety-checklist) |
| Daily Habits Checklist | 30 | [JSON](data/json/daily-habits-checklist.json) · [MD](data/markdown/daily-habits-checklist.md) | [Free printable daily habits checklist](https://checklistforge.com/checklist/daily-habits-checklist) |
| Depression Self-Care Checklist | 30 | [JSON](data/json/depression-self-care-checklist.json) · [MD](data/markdown/depression-self-care-checklist.md) | [Free printable depression self-care checklist](https://checklistforge.com/checklist/depression-self-care-checklist) |
| Evening Routine Checklist | 30 | [JSON](data/json/evening-routine-checklist.json) · [MD](data/markdown/evening-routine-checklist.md) | [Free printable evening routine checklist](https://checklistforge.com/checklist/evening-routine-checklist) |
| Healthy Habits Checklist | 30 | [JSON](data/json/healthy-habits-checklist.json) · [MD](data/markdown/healthy-habits-checklist.md) | [Free printable healthy habits checklist](https://checklistforge.com/checklist/healthy-habits-checklist) |
| Mental Health Checklist | 36 | [JSON](data/json/mental-health-checklist.json) · [MD](data/markdown/mental-health-checklist.md) | [Free printable mental health checklist](https://checklistforge.com/checklist/mental-health-checklist) |
| Morning Routine Checklist | 30 | [JSON](data/json/morning-routine-checklist.json) · [MD](data/markdown/morning-routine-checklist.md) | [Free printable morning routine checklist](https://checklistforge.com/checklist/morning-routine-checklist) |
| Self-Care Checklist | 35 | [JSON](data/json/self-care-checklist.json) · [MD](data/markdown/self-care-checklist.md) | [Free printable self-care checklist](https://checklistforge.com/checklist/self-care-checklist) |
| Sleep Hygiene Checklist | 30 | [JSON](data/json/sleep-hygiene-checklist.json) · [MD](data/markdown/sleep-hygiene-checklist.md) | [Free printable sleep hygiene checklist](https://checklistforge.com/checklist/sleep-hygiene-checklist) |
| Wellness Checklist | 35 | [JSON](data/json/wellness-checklist.json) · [MD](data/markdown/wellness-checklist.md) | [Free printable wellness checklist](https://checklistforge.com/checklist/wellness-checklist) |

### Teaching & Classroom

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Classroom Checklist | 37 | [JSON](data/json/classroom-checklist.json) · [MD](data/markdown/classroom-checklist.md) | [Free printable classroom checklist](https://checklistforge.com/checklist/classroom-checklist) |
| Classroom Organization Checklist | 36 | [JSON](data/json/classroom-organization-checklist.json) · [MD](data/markdown/classroom-organization-checklist.md) | [Free printable classroom organization checklist](https://checklistforge.com/checklist/classroom-organization-checklist) |
| Homeschool Checklist | 36 | [JSON](data/json/homeschool-checklist.json) · [MD](data/markdown/homeschool-checklist.md) | [Free printable homeschool checklist](https://checklistforge.com/checklist/homeschool-checklist) |
| Homeschool Supplies Checklist | 36 | [JSON](data/json/homeschool-supplies-checklist.json) · [MD](data/markdown/homeschool-supplies-checklist.md) | [Free printable homeschool supplies checklist](https://checklistforge.com/checklist/homeschool-supplies-checklist) |
| Lesson Planning Checklist | 36 | [JSON](data/json/lesson-planning-checklist.json) · [MD](data/markdown/lesson-planning-checklist.md) | [Free printable lesson planning checklist](https://checklistforge.com/checklist/lesson-planning-checklist) |
| Library Checklist | 36 | [JSON](data/json/library-checklist.json) · [MD](data/markdown/library-checklist.md) | [Free printable library checklist](https://checklistforge.com/checklist/library-checklist) |
| Substitute Teacher Checklist | 37 | [JSON](data/json/substitute-teacher-checklist.json) · [MD](data/markdown/substitute-teacher-checklist.md) | [Free printable substitute teacher checklist](https://checklistforge.com/checklist/substitute-teacher-checklist) |
| Teacher Checklist | 38 | [JSON](data/json/teacher-checklist.json) · [MD](data/markdown/teacher-checklist.md) | [Free printable teacher checklist](https://checklistforge.com/checklist/teacher-checklist) |
| Teacher Classroom Setup Checklist | 36 | [JSON](data/json/teacher-classroom-setup-checklist.json) · [MD](data/markdown/teacher-classroom-setup-checklist.md) | [Free printable teacher classroom setup checklist](https://checklistforge.com/checklist/teacher-classroom-setup-checklist) |
| Teacher Supplies Checklist | 37 | [JSON](data/json/teacher-supplies-checklist.json) · [MD](data/markdown/teacher-supplies-checklist.md) | [Free printable teacher supplies checklist](https://checklistforge.com/checklist/teacher-supplies-checklist) |

### Back to School

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Back to School Checklist | 34 | [JSON](data/json/back-to-school-checklist.json) · [MD](data/markdown/back-to-school-checklist.md) | [Free printable back to school checklist](https://checklistforge.com/checklist/back-to-school-checklist) |
| Field Trip Checklist | 30 | [JSON](data/json/field-trip-checklist.json) · [MD](data/markdown/field-trip-checklist.md) | [Free printable field trip checklist](https://checklistforge.com/checklist/field-trip-checklist) |
| First Day of School Checklist | 30 | [JSON](data/json/first-day-of-school-checklist.json) · [MD](data/markdown/first-day-of-school-checklist.md) | [Free printable first day of school checklist](https://checklistforge.com/checklist/first-day-of-school-checklist) |
| Kindergarten Readiness Checklist | 28 | [JSON](data/json/kindergarten-readiness-checklist.json) · [MD](data/markdown/kindergarten-readiness-checklist.md) | [Free printable kindergarten readiness checklist](https://checklistforge.com/checklist/kindergarten-readiness-checklist) |
| Preschool Checklist | 29 | [JSON](data/json/preschool-checklist.json) · [MD](data/markdown/preschool-checklist.md) | [Free printable preschool checklist](https://checklistforge.com/checklist/preschool-checklist) |
| School Backpack Checklist | 27 | [JSON](data/json/school-backpack-checklist.json) · [MD](data/markdown/school-backpack-checklist.md) | [Free printable school backpack checklist](https://checklistforge.com/checklist/school-backpack-checklist) |
| School Morning Checklist | 30 | [JSON](data/json/school-morning-checklist.json) · [MD](data/markdown/school-morning-checklist.md) | [Free printable school morning checklist](https://checklistforge.com/checklist/school-morning-checklist) |
| School Registration Checklist | 28 | [JSON](data/json/school-registration-checklist.json) · [MD](data/markdown/school-registration-checklist.md) | [Free printable school registration checklist](https://checklistforge.com/checklist/school-registration-checklist) |
| School Supplies Checklist | 34 | [JSON](data/json/school-supplies-checklist.json) · [MD](data/markdown/school-supplies-checklist.md) | [Free printable school supplies checklist](https://checklistforge.com/checklist/school-supplies-checklist) |

### Diet & Nutrition

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Diabetic Diet Checklist | 31 | [JSON](data/json/diabetic-diet-checklist.json) · [MD](data/markdown/diabetic-diet-checklist.md) | [Free printable diabetic diet checklist](https://checklistforge.com/checklist/diabetic-diet-checklist) |
| Healthy Eating Checklist | 32 | [JSON](data/json/healthy-eating-checklist.json) · [MD](data/markdown/healthy-eating-checklist.md) | [Free printable healthy eating checklist](https://checklistforge.com/checklist/healthy-eating-checklist) |
| Heart-Healthy Diet Checklist | 30 | [JSON](data/json/heart-healthy-diet-checklist.json) · [MD](data/markdown/heart-healthy-diet-checklist.md) | [Free printable heart-healthy diet checklist](https://checklistforge.com/checklist/heart-healthy-diet-checklist) |
| Hydration Checklist | 27 | [JSON](data/json/hydration-checklist.json) · [MD](data/markdown/hydration-checklist.md) | [Free printable hydration checklist](https://checklistforge.com/checklist/hydration-checklist) |
| Keto Grocery Checklist | 36 | [JSON](data/json/keto-grocery-checklist.json) · [MD](data/markdown/keto-grocery-checklist.md) | [Free printable keto grocery checklist](https://checklistforge.com/checklist/keto-grocery-checklist) |
| Low Carb Checklist | 33 | [JSON](data/json/low-carb-checklist.json) · [MD](data/markdown/low-carb-checklist.md) | [Free printable low carb checklist](https://checklistforge.com/checklist/low-carb-checklist) |
| Vegan Grocery Checklist | 35 | [JSON](data/json/vegan-grocery-checklist.json) · [MD](data/markdown/vegan-grocery-checklist.md) | [Free printable vegan grocery checklist](https://checklistforge.com/checklist/vegan-grocery-checklist) |
| Water Intake Checklist | 28 | [JSON](data/json/water-intake-checklist.json) · [MD](data/markdown/water-intake-checklist.md) | [Free printable water intake checklist](https://checklistforge.com/checklist/water-intake-checklist) |

### IT & Software

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Cybersecurity Checklist | 36 | [JSON](data/json/cybersecurity-checklist.json) · [MD](data/markdown/cybersecurity-checklist.md) | [Free printable cybersecurity checklist](https://checklistforge.com/checklist/cybersecurity-checklist) |
| IT Disaster Recovery Checklist | 36 | [JSON](data/json/it-disaster-recovery-checklist.json) · [MD](data/markdown/it-disaster-recovery-checklist.md) | [Free printable it disaster recovery checklist](https://checklistforge.com/checklist/it-disaster-recovery-checklist) |
| IT Security Checklist | 43 | [JSON](data/json/it-security-checklist.json) · [MD](data/markdown/it-security-checklist.md) | [Free printable it security checklist](https://checklistforge.com/checklist/it-security-checklist) |
| QA Checklist | 37 | [JSON](data/json/qa-checklist.json) · [MD](data/markdown/qa-checklist.md) | [Free printable qa checklist](https://checklistforge.com/checklist/qa-checklist) |
| Release Checklist | 36 | [JSON](data/json/release-checklist.json) · [MD](data/markdown/release-checklist.md) | [Free printable release checklist](https://checklistforge.com/checklist/release-checklist) |
| Software Deployment Checklist | 37 | [JSON](data/json/software-deployment-checklist.json) · [MD](data/markdown/software-deployment-checklist.md) | [Free printable software deployment checklist](https://checklistforge.com/checklist/software-deployment-checklist) |
| Software Testing Checklist | 36 | [JSON](data/json/software-testing-checklist.json) · [MD](data/markdown/software-testing-checklist.md) | [Free printable software testing checklist](https://checklistforge.com/checklist/software-testing-checklist) |
| Website Audit Checklist | 44 | [JSON](data/json/website-audit-checklist.json) · [MD](data/markdown/website-audit-checklist.md) | [Free printable website audit checklist](https://checklistforge.com/checklist/website-audit-checklist) |

### Project Management

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Daily Work Checklist | 31 | [JSON](data/json/daily-work-checklist.json) · [MD](data/markdown/daily-work-checklist.md) | [Free printable daily work checklist](https://checklistforge.com/checklist/daily-work-checklist) |
| Meeting Checklist | 31 | [JSON](data/json/meeting-checklist.json) · [MD](data/markdown/meeting-checklist.md) | [Free printable meeting checklist](https://checklistforge.com/checklist/meeting-checklist) |
| Project Checklist | 30 | [JSON](data/json/project-checklist.json) · [MD](data/markdown/project-checklist.md) | [Free printable project checklist](https://checklistforge.com/checklist/project-checklist) |
| Project Closeout Checklist | 31 | [JSON](data/json/project-closeout-checklist.json) · [MD](data/markdown/project-closeout-checklist.md) | [Free printable project closeout checklist](https://checklistforge.com/checklist/project-closeout-checklist) |
| Project Handover Checklist | 32 | [JSON](data/json/project-handover-checklist.json) · [MD](data/markdown/project-handover-checklist.md) | [Free printable project handover checklist](https://checklistforge.com/checklist/project-handover-checklist) |
| Project Kickoff Checklist | 30 | [JSON](data/json/project-kickoff-checklist.json) · [MD](data/markdown/project-kickoff-checklist.md) | [Free printable project kickoff checklist](https://checklistforge.com/checklist/project-kickoff-checklist) |
| Project Management Checklist | 33 | [JSON](data/json/project-management-checklist.json) · [MD](data/markdown/project-management-checklist.md) | [Free printable project management checklist](https://checklistforge.com/checklist/project-management-checklist) |
| Sprint Planning Checklist | 42 | [JSON](data/json/sprint-planning-checklist.json) · [MD](data/markdown/sprint-planning-checklist.md) | [Free printable sprint planning checklist](https://checklistforge.com/checklist/sprint-planning-checklist) |

### Recovery & Senior Care

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Caregiver Checklist | 35 | [JSON](data/json/caregiver-checklist.json) · [MD](data/markdown/caregiver-checklist.md) | [Free printable caregiver checklist](https://checklistforge.com/checklist/caregiver-checklist) |
| Estate Planning Checklist | 37 | [JSON](data/json/estate-planning-checklist.json) · [MD](data/markdown/estate-planning-checklist.md) | [Free printable estate planning checklist](https://checklistforge.com/checklist/estate-planning-checklist) |
| Fall Prevention Checklist | 33 | [JSON](data/json/fall-prevention-checklist.json) · [MD](data/markdown/fall-prevention-checklist.md) | [Free printable fall prevention checklist](https://checklistforge.com/checklist/fall-prevention-checklist) |
| Physical Therapy Checklist | 32 | [JSON](data/json/physical-therapy-checklist.json) · [MD](data/markdown/physical-therapy-checklist.md) | [Free printable physical therapy checklist](https://checklistforge.com/checklist/physical-therapy-checklist) |
| Rehab Checklist | 33 | [JSON](data/json/rehab-checklist.json) · [MD](data/markdown/rehab-checklist.md) | [Free printable rehab checklist](https://checklistforge.com/checklist/rehab-checklist) |
| Senior Care Checklist | 35 | [JSON](data/json/senior-care-checklist.json) · [MD](data/markdown/senior-care-checklist.md) | [Free printable senior care checklist](https://checklistforge.com/checklist/senior-care-checklist) |
| What to Do When Someone Dies Checklist | 35 | [JSON](data/json/what-to-do-when-someone-dies-checklist.json) · [MD](data/markdown/what-to-do-when-someone-dies-checklist.md) | [Free printable what to do when someone dies checklist](https://checklistforge.com/checklist/what-to-do-when-someone-dies-checklist) |

### Fitness & Exercise

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Exercise Checklist | 30 | [JSON](data/json/exercise-checklist.json) · [MD](data/markdown/exercise-checklist.md) | [Free printable exercise checklist](https://checklistforge.com/checklist/exercise-checklist) |
| Fitness Checklist | 35 | [JSON](data/json/fitness-checklist.json) · [MD](data/markdown/fitness-checklist.md) | [Free printable fitness checklist](https://checklistforge.com/checklist/fitness-checklist) |
| Gym Checklist | 31 | [JSON](data/json/gym-checklist.json) · [MD](data/markdown/gym-checklist.md) | [Free printable gym checklist](https://checklistforge.com/checklist/gym-checklist) |
| Marathon Checklist | 49 | [JSON](data/json/marathon-checklist.json) · [MD](data/markdown/marathon-checklist.md) | [Free printable marathon checklist](https://checklistforge.com/checklist/marathon-checklist) |
| Weight Loss Checklist | 32 | [JSON](data/json/weight-loss-checklist.json) · [MD](data/markdown/weight-loss-checklist.md) | [Free printable weight loss checklist](https://checklistforge.com/checklist/weight-loss-checklist) |
| Workout Checklist | 33 | [JSON](data/json/workout-checklist.json) · [MD](data/markdown/workout-checklist.md) | [Free printable workout checklist](https://checklistforge.com/checklist/workout-checklist) |

### Office Management

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Hotel Night Audit Checklist | 35 | [JSON](data/json/night-audit-checklist.json) · [MD](data/markdown/night-audit-checklist.md) | [Free printable hotel night audit checklist](https://checklistforge.com/checklist/night-audit-checklist) |
| Office Closing Checklist | 30 | [JSON](data/json/office-closing-checklist.json) · [MD](data/markdown/office-closing-checklist.md) | [Free printable office closing checklist](https://checklistforge.com/checklist/office-closing-checklist) |
| Office Opening Checklist | 30 | [JSON](data/json/office-opening-checklist.json) · [MD](data/markdown/office-opening-checklist.md) | [Free printable office opening checklist](https://checklistforge.com/checklist/office-opening-checklist) |
| Office Safety Checklist | 35 | [JSON](data/json/office-safety-checklist.json) · [MD](data/markdown/office-safety-checklist.md) | [Free printable office safety checklist](https://checklistforge.com/checklist/office-safety-checklist) |
| Office Supplies Checklist | 36 | [JSON](data/json/office-supplies-checklist.json) · [MD](data/markdown/office-supplies-checklist.md) | [Free printable office supplies checklist](https://checklistforge.com/checklist/office-supplies-checklist) |

### Sales & Customer

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Client Onboarding Checklist | 30 | [JSON](data/json/client-onboarding-checklist.json) · [MD](data/markdown/client-onboarding-checklist.md) | [Free printable client onboarding checklist](https://checklistforge.com/checklist/client-onboarding-checklist) |
| CRM Checklist | 30 | [JSON](data/json/crm-checklist.json) · [MD](data/markdown/crm-checklist.md) | [Free printable crm checklist](https://checklistforge.com/checklist/crm-checklist) |
| Customer Onboarding Checklist | 30 | [JSON](data/json/customer-onboarding-checklist.json) · [MD](data/markdown/customer-onboarding-checklist.md) | [Free printable customer onboarding checklist](https://checklistforge.com/checklist/customer-onboarding-checklist) |
| Customer Service Checklist | 30 | [JSON](data/json/customer-service-checklist.json) · [MD](data/markdown/customer-service-checklist.md) | [Free printable customer service checklist](https://checklistforge.com/checklist/customer-service-checklist) |
| Sales Checklist | 39 | [JSON](data/json/sales-checklist.json) · [MD](data/markdown/sales-checklist.md) | [Free printable sales checklist](https://checklistforge.com/checklist/sales-checklist) |

### Personal Care

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Acne Skincare Checklist | 29 | [JSON](data/json/acne-skincare-checklist.json) · [MD](data/markdown/acne-skincare-checklist.md) | [Free printable acne skincare checklist](https://checklistforge.com/checklist/acne-skincare-checklist) |
| Dental Care Checklist | 30 | [JSON](data/json/dental-care-checklist.json) · [MD](data/markdown/dental-care-checklist.md) | [Free printable dental care checklist](https://checklistforge.com/checklist/dental-care-checklist) |
| Oral Hygiene Checklist | 30 | [JSON](data/json/oral-hygiene-checklist.json) · [MD](data/markdown/oral-hygiene-checklist.md) | [Free printable oral hygiene checklist](https://checklistforge.com/checklist/oral-hygiene-checklist) |
| Skin Care Routine Checklist | 28 | [JSON](data/json/skin-care-routine-checklist.json) · [MD](data/markdown/skin-care-routine-checklist.md) | [Free printable skin care routine checklist](https://checklistforge.com/checklist/skin-care-routine-checklist) |

### School Operations

| Checklist | Items | Data | Printable PDF & editor |
|---|---|---|---|
| Lab Safety Checklist | 30 | [JSON](data/json/lab-safety-checklist.json) · [MD](data/markdown/lab-safety-checklist.md) | [Free printable lab safety checklist](https://checklistforge.com/checklist/lab-safety-checklist) |
| School Cleaning Checklist | 30 | [JSON](data/json/school-cleaning-checklist.json) · [MD](data/markdown/school-cleaning-checklist.md) | [Free printable school cleaning checklist](https://checklistforge.com/checklist/school-cleaning-checklist) |
| School Inspection Checklist | 30 | [JSON](data/json/school-inspection-checklist.json) · [MD](data/markdown/school-inspection-checklist.md) | [Free printable school inspection checklist](https://checklistforge.com/checklist/school-inspection-checklist) |
| School Safety Checklist | 30 | [JSON](data/json/school-safety-checklist.json) · [MD](data/markdown/school-safety-checklist.md) | [Free printable school safety checklist](https://checklistforge.com/checklist/school-safety-checklist) |

## License & credit

- Checklist data (`data/`): [CC BY 4.0](LICENSE-DATA.md). Use it anywhere, including commercially — please credit with a link:
  > Checklist: <name> by ChecklistForge (https://checklistforge.com/checklist/<id>)

  Each JSON file has a ready-made `credit` field.
- Code (JS API, CLI, MCP server): [MIT](LICENSE).

## Contributing

Found a wrong or missing item, or want a checklist that is not here? [Open an issue](https://github.com/comficker/checklist-templates/issues/new/choose). The lists are maintained on [ChecklistForge](https://checklistforge.com) and synced here.
