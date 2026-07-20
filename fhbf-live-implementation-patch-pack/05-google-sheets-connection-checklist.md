# Google Sheets Connection Checklist

1. Create Google Sheet: FHBF Platform Data.
2. Create tabs: Membership Applications, Business Village Bookings, Sponsors, Contact Messages, Members.
3. Add Google Apps Script from the previous backend pack.
4. Deploy Apps Script as Web App: Execute as Me, Access Anyone.
5. Copy Web App URL.
6. Add to FHBF JavaScript:

const FHBF_BACKEND_URL = "YOUR_WEB_APP_URL";

7. Test each form.
8. Check rows appear in Google Sheets.
