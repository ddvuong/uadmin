Set up the Development Environment
The Laravel framework has a few system requirements. Of course, all of these requirements are satisfied by the Laravel Homestead virtual machine, so it's highly recommended that you use Homestead as your local Laravel development environment.

However, if you are not using Homestead, you will need to make sure your server meets the following requirements:

- PHP >= 7.2.5
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension


Installation
1. Open up command prompt and navigate to the vadmin folder (where you have extracted the folder). E.g.
```ruby
cd xampp/htdos/vadmin
```

2. Next, run the following commands to install all dependencies

```ruby
composer install
```
```ruby
npm install
```
3. Now rename the .env.example to .env and modify the values for database in it as per your local environment

4. Run the following command to generate the key
```ruby
php artisan key:generate
```
5. Run the following command to run database migration to create tables
```ruby
php artisan migrate
```
6. Run the following command to compile all assets
```ruby
npm run dev
```
7. And Done, now you are ready to start development server
```ruby
php artisan server
```
Open http://127.0.0.1:8000 to see it live there.

