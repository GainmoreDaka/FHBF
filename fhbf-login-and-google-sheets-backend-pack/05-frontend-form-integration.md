# Frontend Form Integration

In the FHBF website JavaScript, set:

```javascript
const FHBF_BACKEND_URL = 'PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
```

## Submit Membership Application

```javascript
async function submitMembershipForm(formData) {
  const payload = {
    type: 'membership',
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    membershipType: formData.membershipType,
    businessName: formData.businessName,
    industry: formData.industry,
    sevenMountain: formData.sevenMountain,
    province: formData.province,
    directoryConsent: formData.directoryConsent,
    paymentReference: formData.paymentReference
  };

  const res = await fetch(FHBF_BACKEND_URL, {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  return await res.json();
}
```

## Submit Business Village Booking

```javascript
async function submitVillageBooking(formData) {
  const payload = {
    type: 'village',
    applicantName: formData.applicantName,
    businessName: formData.businessName,
    email: formData.email,
    phone: formData.phone,
    isMember: formData.isMember,
    membershipNumber: formData.membershipNumber,
    spaceType: formData.spaceType,
    amountDue: formData.amountDue,
    paymentReference: formData.paymentReference
  };

  const res = await fetch(FHBF_BACKEND_URL, {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  return await res.json();
}
```
