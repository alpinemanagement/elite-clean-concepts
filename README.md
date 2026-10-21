# Elite Clean Concepts — static website starter

Responsive multi-page implementation based on the Figma frames inspected for:
- Desktop homepage (`5:8637`) and mobile homepage (`5:8813`)
- Desktop services (`5:10043`) and mobile services (`5:10225`)
- Desktop Our Approach (`5:10399`) and mobile Our Approach (`5:10530`)

## Pages
- `index.html` — homepage, service previews and FAQ accordion
- `services.html` — services page
- `approach.html` — approach/process page
- `quote.html` — quote enquiry form demo

## Run locally
Open `index.html` in a browser, or serve this folder with any static HTTP server. Bootstrap 5.3.3 and Manrope are loaded from CDNs.

## Important implementation notes
- CSS and JavaScript are shared across pages in `css/style.css` and `js/main.js`.
- The quote form is front-end only. It opens the visitor's email app with a prepared draft and does not send data to a backend.
- Figma image assets are referenced from Figma's asset endpoint because this runtime could not download them locally. Before production, download the original logo/photos/icons from Figma Dev Mode and replace the external `src` URLs with local files under `assets/images/`.
- FAQ and quote are implemented as supporting site pages/sections; the Figma metadata surfaced explicit desktop/mobile frames for Home, Services and Our Approach only.
