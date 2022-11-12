<p align="center">
    <a href="https://github.com/etalab/etalab-website/actions">
      <img src="https://github.com/etalab/etalab-website/workflows/ci/badge.svg?branch=main">
    </a>
</p>

🏗 **This is a work in progress.**  

# Code source of www.etalab.gouv.fr  

This is a new implementation of the Etalab's website.  

[Figma](https://www.figma.com/proto/6uu0scYgj04sohMisvZVWn/MAQUETTES-SITE-ETALAB?page-id=134%3A80623&node-id=134%3A80624&viewport=738%2C427%2C0.07&scaling=min-zoom&starting-point-node-id=134%3A80624)

## Docker 

```bash
docker build -t etalab-website .
docker run -p 3000:3000 etalab-website
```