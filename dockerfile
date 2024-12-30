# Use the official PHP image
FROM php:8.1-apache

# Copy application files to the container
COPY . /var/www/html/

# Install dependencies (if any)
RUN docker-php-ext-install mysqli

# Expose port 80
EXPOSE 80
