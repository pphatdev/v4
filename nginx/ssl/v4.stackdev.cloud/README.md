# SSL Certificates Directory

Place your SSL certificates here:
- `fullchain.pem` - Full certificate chain
- `privkey.pem` - Private key

## Obtaining Certificates

You can use Let's Encrypt with Certbot:

```bash
certbot certonly --webroot -w /var/www/html -d v4.stackdev.cloud
```

Or use your preferred SSL certificate provider.

## After Adding Certificates

1. Uncomment the SSL configuration in `nginx/conf.d/v4.stackdev.cloud.conf`
2. Restart the nginx container: `docker compose restart nginx`
