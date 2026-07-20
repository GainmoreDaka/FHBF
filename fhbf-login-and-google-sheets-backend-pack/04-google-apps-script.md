# Google Apps Script Backend

Open the Google Sheet, then go to:

Extensions → Apps Script

Paste the script below and deploy as a Web App.

## Apps Script

```javascript
const SHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const type = data.type || 'contact';
    const ss = SpreadsheetApp.openById(SHEET_ID);

    let sheetName = 'Contact Messages';

    if (type === 'membership') sheetName = 'Membership Applications';
    if (type === 'village') sheetName = 'Business Village Bookings';
    if (type === 'sponsor') sheetName = 'Sponsors';
    if (type === 'contact') sheetName = 'Contact Messages';

    const sheet = ss.getSheetByName(sheetName);
    const reference = data.reference || makeReference(type);

    if (type === 'membership') {
      sheet.appendRow([
        new Date(),
        reference,
        data.fullName || '',
        data.email || '',
        data.phone || '',
        data.membershipType || '',
        data.businessName || '',
        data.industry || '',
        data.sevenMountain || '',
        data.province || '',
        data.directoryConsent || '',
        data.paymentReference || '',
        'Submitted',
        ''
      ]);
    }

    if (type === 'village') {
      sheet.appendRow([
        new Date(),
        reference,
        data.applicantName || '',
        data.businessName || '',
        data.email || '',
        data.phone || '',
        data.isMember || '',
        data.membershipNumber || '',
        data.spaceType || '',
        data.amountDue || '',
        data.paymentReference || '',
        'Submitted',
        '',
        ''
      ]);
    }

    if (type === 'sponsor') {
      sheet.appendRow([
        new Date(),
        reference,
        data.organisation || '',
        data.contactPerson || '',
        data.email || '',
        data.phone || '',
        data.sponsorshipLevel || '',
        data.notes || '',
        'Submitted',
        data.paymentReference || '',
        ''
      ]);
    }

    if (type === 'contact') {
      sheet.appendRow([
        new Date(),
        reference,
        data.name || '',
        data.email || '',
        data.phone || '',
        data.message || '',
        'New',
        ''
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, reference }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function makeReference(type) {
  const prefix = {
    membership: 'FHBF-MEM',
    village: 'FHBF-VIL',
    sponsor: 'FHBF-SP',
    contact: 'FHBF-CON'
  }[type] || 'FHBF';

  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return prefix + '-' + new Date().getFullYear() + '-' + random;
}
```

## Deploy
1. Click Deploy
2. New Deployment
3. Select Web App
4. Execute as: Me
5. Who has access: Anyone
6. Copy the Web App URL
