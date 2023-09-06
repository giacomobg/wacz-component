
## Usage 

The index js and css files and then use

`<wacz-lightbox></wacz-lightbox>`

#### Attributes

filename - .wacz filename e.g. `mono-county-pdf-01-2023-08-25T15-57-33.wacz`
path - path to .wacz file, relative or absolute e.g. `/assets/` or `https://www.example.com/path/to/file/`
replayBase - path to sw.js, same as it would be for replay-web-page

## Svelte project compiled with Vite

Working in Svelte:

- Make sure node is installed  
- Navigate to the root directory in terminal  
- Run `pnpm install`  
- For development, run `pnpm run dev`  
- Open up the webpage at the link it gives you, something like `localhost:5173`, and every time you save a file, it will automatically recompile and reload the webpage.  
- To get the output, run `pnpm run build` and everything you need can be found in `dist/`.  

