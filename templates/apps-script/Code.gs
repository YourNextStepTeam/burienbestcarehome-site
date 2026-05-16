/**
 * Burien Best Care Home — form submission webhook
 *
 * Receives JSON POST bodies from the site's ContactForm and OpenHouseForm,
 * writes a row to the appropriate sheet tab, and sends an email alert to
 * the right inbox.
 *
 * Setup (Becca):
 *   1. Create a new Google Sheet titled "Burien Best Care Home — Form Submissions".
 *      Add two tabs: "Contact" and "Open House" (rename Sheet1 to one of them
 *      and add a second tab for the other).
 *   2. Extensions > Apps Script. Replace the default Code.gs with this file.
 *   3. Save the script (give it a name like "BBCH Form Webhook").
 *   4. Deploy > New deployment > Type: Web app > Execute as: Me >
 *      Who has access: Anyone. Click Deploy. Authorize when prompted.
 *   5. Copy the resulting web app URL (looks like
 *      https://script.google.com/macros/s/AKfyc.../exec).
 *   6. Paste it as NEXT_PUBLIC_APPS_SCRIPT_WEBHOOK_URL in the Vercel project's
 *      env vars (Production + Preview + Development). Redeploy the site so the
 *      new env var bakes into the static build.
 *
 * Notes:
 *   - The site posts JSON in the body but uses Content-Type: text/plain so
 *     the browser skips the CORS preflight (Apps Script web apps don't
 *     respond to OPTIONS preflight requests). e.postData.contents is the
 *     raw JSON string regardless of declared Content-Type.
 *   - Honeypot field "botcheck" is checked first; if non-empty, the script
 *     returns success without writing anything. Real users leave it blank.
 *   - If the sheet tab name doesn't match, the script falls back to the
 *     first tab so submissions don't silently drop.
 */

const CONTACT_RECIPIENT = 'becca@burienbestcarehome.com';
const OPEN_HOUSE_RECIPIENT = 'info@burienbestcarehome.com';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Honeypot: bots fill every field including hidden ones. Real users
    // never touch this. Pretend success so the bot doesn't retry.
    if (data.botcheck) {
      return jsonResponse({ status: 'ok' });
    }

    const isOpenHouse = data.form_type === 'open_house_rsvp';
    const tabName = isOpenHouse ? 'Open House' : 'Contact';
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(tabName) || ss.getSheets()[0];

    const timestamp = new Date();
    const row = isOpenHouse
      ? [
          timestamp,
          data.name || '',
          data.email || '',
          data.phone || '',
          data.guests || '',
          data.form_type || '',
        ]
      : [
          timestamp,
          data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
          data.email || '',
          data.phone || '',
          data.relationship || '',
          data.careType || '',
          data.visitDate || '',
          data.visitTime || '',
          data.message || '',
          data.form_type || '',
        ];

    sheet.appendRow(row);

    const recipient = isOpenHouse ? OPEN_HOUSE_RECIPIENT : CONTACT_RECIPIENT;
    const subject = isOpenHouse
      ? `New Open House RSVP — ${data.name || 'Unknown'}`
      : `New Contact Form submission — ${data.name || `${data.firstName || ''} ${data.lastName || ''}`}`;

    const bodyLines = isOpenHouse
      ? [
          `Name: ${data.name || ''}`,
          `Email: ${data.email || ''}`,
          `Phone: ${data.phone || '(not provided)'}`,
          `Guests: ${data.guests || ''}`,
          '',
          `Submitted: ${timestamp.toString()}`,
        ]
      : [
          `Name: ${data.name || `${data.firstName || ''} ${data.lastName || ''}`}`,
          `Email: ${data.email || ''}`,
          `Phone: ${data.phone || '(not provided)'}`,
          `Relationship: ${data.relationship || ''}`,
          `Type of care: ${data.careType || ''}`,
          `Preferred visit date: ${data.visitDate || '(flexible)'}`,
          `Preferred time: ${data.visitTime || ''}`,
          '',
          `Message:`,
          data.message || '(none)',
          '',
          `Submitted: ${timestamp.toString()}`,
        ];

    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      body: bodyLines.join('\n'),
      replyTo: data.email || undefined,
    });

    return jsonResponse({ status: 'success' });
  } catch (err) {
    return jsonResponse({ status: 'error', message: String(err) });
  }
}

// Apps Script web apps can't satisfy CORS preflight, so this GET handler
// exists mainly as a health check. Open the deployment URL in a browser
// after deploying and you should see {"status":"ok"}.
function doGet() {
  return jsonResponse({ status: 'ok', message: 'BBCH form webhook is live.' });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
