### Config.env

create config.env in src->config with following credentials:

```bash
DB_URI= 'your mongodb url'
PORT= 'port num to run your server. eg:- 3000'
FRONTEND_URL= 'your frontend url. eg:- http://localhost:5173'

JWT_SECRET= 'your jwt secret key. eg:- sdbklhrjklugdjkghlugndgjhuigtgjkrhg;gnngxifsghjdgbhdgdfvbdiugb'
JWT_EXPIRES_IN = 'time in days to expire jwt token. eg:- 7d'

EMAIL_ADMIN_NAME= 'email sender name. eg:- Nischal'
EMAIL_HOST= 'email host name like:- smtp.gmail.com '
EMAIL_PORT= 'email port num. if gmail than use 465'
EMAIL= 'your email address to send mail'
EMAIL_PASS= 'your email pass'
```
