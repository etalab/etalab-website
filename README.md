🏗 **This is a work in progress.**  

# Code source of www.etalab.gouv.fr  

This is a new implementation of the Etalab's website using the following tech stack:  

- [Next.js 13](https://nextjs.org/)
- [@codegouvfr/dsfr-react](https://github.com/codegouvfr/react-dsfr): French design system
- [i18nifty](https://www.i18nifty.dev/): Internationalization
- [tss-react](https://tss-react.dev): Style engine

## Docker 

```bash
docker build -t etalab_website .
docker run -p 3000:3000 etalab_website
```