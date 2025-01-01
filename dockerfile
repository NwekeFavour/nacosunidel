# Use the official PHP image
FROM php:8.1-apache

# Copy application files to the container
COPY . /var/www/html/

# Install dependencies (if any)
# Set the ServerName to suppress the warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Restart Apache to apply changes (if it's needed after building the image)
CMD ["apachectl", "-D", "FOREGROUND"]

# Expose port 80
EXPOSE 80


