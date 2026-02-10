# Google Apps Script Setup Instructions

## Step 1: Create Google Sheet
1. Go to Google Sheets (https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Monedge Care Plan Bookings"

## Step 2: Open Apps Script Editor
1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any default code in the editor

## Step 3: Add the Script
1. Copy the code from `google-apps-script.js` file
2. Paste it into the Apps Script editor
3. Click **Save** (disk icon)

## Step 4: Deploy as Web App
1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - Description: "Monedge Booking Form Handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** > **Go to [project name] (unsafe)**
9. Click **Allow**
10. **COPY THE WEB APP URL** (looks like: https://script.google.com/macros/s/...../exec)

## Step 5: Update Website
1. Open `js/booking-form.js`
2. Find line: `const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL_HERE', {`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your copied Web App URL
4. Save the file

## Step 6: Test
1. Open your website
2. Go to the Book page
3. Fill out the form
4. Submit
5. Check your Google Sheet for the new entry
6. Check monedgehcs@gmail.com for the notification email

## Troubleshooting
- If form doesn't submit: Check browser console (F12) for errors
- If no email received: Check spam folder
- If data not in sheet: Verify Web App URL is correct
- If authorization error: Redeploy and reauthorize

## Email Notification
The script sends an email to: **monedgehcs@gmail.com**

To change the email address:
1. Edit the Apps Script
2. Find: `to: 'monedgehcs@gmail.com'`
3. Change to your desired email
4. Save and redeploy
