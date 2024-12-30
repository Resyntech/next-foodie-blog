# Next Foodie Blog

Convert JS to TS extensions
```javascript
    import fs from 'node:fs/promises'

    const baseURL = new URL("./", import.meta.url)
    const targetFileExts = ["jsx", "js"]
    const files = await fs.readdir(baseURL)

    for await (const f of files) {
        const fileNameArray = f.split(".")
        if (targetFileExts.includes(fileNameArray[1])) {
            const oldPath = new URL(`./${f}`, baseURL)
            const newPath = new URL(`./${f.replace(".j", ".t")}`, baseURL)
            await fs.rename(oldPath, newPath)
        }
    }

    console.log(`Rename ${files.length} file(s)!`)
```