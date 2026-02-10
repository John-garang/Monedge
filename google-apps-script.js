function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById('1G_fxn3ZhH78wCX-lmhNalf_HVnOVWvFsF46qsO9lY3k');
    const sheet = ss.getSheets()[0];
    const data = JSON.parse(e.postData.contents);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp','Name','Phone','Email','Recipient Name','Recipient Age','Relationship','Recipient Address','Service Types','Start Date','End Date','Hours From','Hours To','Frequency','Scope of Service','Medical Conditions','Medication','Allergies/Risks','Agreed Rate','Billing Cycle','Payment Method','Primary Contact Name','Primary Contact Phone','Secondary Contact Name','Secondary Contact Phone','Preferred Clinic/Hospital']);
    }

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.recipientName || '',
      data.recipientAge || '',
      data.relationship || '',
      data.recipientAddress || '',
      data.serviceTypes || '',
      data.startDate || '',
      data.endDate || '',
      data.hoursFrom || '',
      data.hoursTo || '',
      data.frequency || '',
      data.scopeOfService || '',
      data.medicalConditions || '',
      data.medication || '',
      data.allergies || '',
      data.agreedRate || '',
      data.billingCycle || '',
      data.paymentMethod || '',
      data.primaryContactName || '',
      data.primaryContactPhone || '',
      data.secondaryContactName || '',
      data.secondaryContactPhone || '',
      data.preferredClinic || ''
    ]);

    MailApp.sendEmail({
      to: 'monedgehcs@gmail.com',
      subject: 'New Care Plan Booking - ' + (data.name || 'Unknown'),
      htmlBody: `<h2>New Booking</h2><p><strong>Name:</strong> ${data.name}<br><strong>Phone:</strong> ${data.phone}<br><strong>Email:</strong> ${data.email}</p><p><a href="${ss.getUrl()}">View Sheet</a></p>`
    });

    return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: err.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
