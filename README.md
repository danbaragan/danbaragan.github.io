- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Is styled using [tailwind css](https://tailwindcss.com/)
- Please check package.json for other Open Source projects used in building this one.

Build:
- `NODE_ENV=production npm run build`
- `git add . && git commit`
- `git subtree push --prefix build origin master`
or
- ```git push origin `git subtree split --prefix build`:master --force```
