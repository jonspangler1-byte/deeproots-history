# Deep Roots Historical Research and Genealogy — preliminary website

Static HTML/CSS/JS site for Jonathan Spangler’s genealogy practice.  
Built November 5, 2026. No paid hosting stack required.

## Preview locally

From this directory:

```bash
cd /workspace/genealogy_business/website
python3 -m http.server 8765
```

Then open http://127.0.0.1:8765/ in a browser.

Or open `index.html` directly in a browser (mailto forms work either way; some browsers restrict file:// quirks).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — positioning, CTAs, process |
| `services.html` | All six services |
| `pricing.html` | $60/hr, packages, $500 deposit policy |
| `about.html` | Dedicated About Me |
| `start.html` | Free consult + project intake forms |
| `css/styles.css` | Parchment/ink theme |
| `js/main.js` | Nav toggle + mailto form packing |
| `images/` | Public-domain historical images + `credits.txt` |

## Forms (current behavior)

Both forms on `start.html`:

1. Intercept submit in `js/main.js`
2. Build a `mailto:rbsledmuseum@gmail.com` link with prefilled subject and body
3. Open the visitor’s email client

Each form also has `action="https://formspree.io/f/YOUR_FORM_ID"` as a placeholder.

### Wire Formspree later

1. Create a free form at https://formspree.io/
2. Replace `YOUR_FORM_ID` in both forms’ `action` attributes
3. In `js/main.js`, either remove the mailto submit handler or gate it so native POST to Formspree runs instead
4. Confirm submissions arrive at `rbsledmuseum@gmail.com`

Other options: Netlify Forms, Basin, Google Forms embed, or a simple Cloudflare Worker / serverless function.

## Pricing copy used (summary)

- Base **$60/hour**
- **Free 30-minute consultation**
- **$500 minimum deposit** before research starts
- Eligibility check **$175** (paid in full)
- Full lineage application **$950** (50% deposit)
- Family research hourly blocks (e.g. 10 hrs $575, 20 hrs $1,100)
- House history Essential **$450** / Full **$950**
- Retrieval **$60/hr** (2-hr min) or remote **$40** + fees
- Family book **from $2,500**
- Talks **$200** / workshop **$300**
- Society fees, record fees, mileage beyond 30 mi billed separately at cost

## Domain (optional future)

Earlier research noted `deeprootshistory.com` as a possible name check — treat as optional only. This preliminary site does not register or purchase any domain.

## Peer research

See `/workspace/genealogy_business/site_peer_notes.md` for patterns adopted from Legacy Tree, Charter Oak, Prairie Roots, Budget Genealogy, and APG guidance.

## Not on this site (by design)

- Street address
- Income goals
- Personal family photos
- Rosebud Sled Museum as the business (mentioned lightly on About only as collector/historian habit)
