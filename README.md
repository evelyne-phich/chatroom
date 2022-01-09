# How to deploy on Heroku

https://blog.heroku.com/deploying-react-with-zero-configuration

- heroku create -b https://github.com/mars/create-react-app-buildpack.git
- git add .
- git commit -m "deploy on Heroku"
- git push heroku main
- heroku open