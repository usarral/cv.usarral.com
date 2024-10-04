---
"title": "Deploying a LAMPP Stack in Docker"
"description": "This article provides a step-by-step guide on deploying a LAMPP (Linux, Apache, MySQL, PHP, phpMyAdmin) stack using Docker. You'll learn how to set up an Ubuntu container, install Apache, configure MariaDB, and run PHP applications. Ideal for both beginners and those looking to enhance their container development skills."
"pubDate": "2023-01-23"
---

<!--toc:start-->

- [Description](#description)
- [What is a LAMPP Stack?](#what-is-a-lampp-stack)
- [Installing the LAMP Stack](#installing-the-lamp-stack)
  - [Preparing the Container](#preparing-the-container)
  - [Installing Apache](#installing-apache)
  - [Installing MySQL](#installing-mysql)
    - [Create a Connection User for phpMyAdmin](#create-a-connection-user-for-phpmyadmin)
- [Installing PHP](#installing-php)
<!--toc:end-->

## Description

For this task, you are asked to install a LAMPP stack and run a PHP file on it.

## What is a LAMPP Stack?

A LAMP stack is a set of programs installed on a server to run web applications. These programs are:

- **L**inux: The server operating system.
- **A**pache: The web server.
- **M**ySQL: The database management system.
- **P**HP: The server-side programming language.
- **P**hpMyAdmin: A tool for managing MySQL databases.

<div style="page-break-after: always !important;"></div>

## Installing the LAMP Stack

In my case, I will install it in a Docker container. To do this, I will use the official Ubuntu 20.04 image.

### Preparing the Container

To prepare the container, the first step is to create it:

```sh
docker run -ti --name despliegue_lampp -p 3000:80 -v ~/docker/despliegue_lampp:/var/www/html ubuntu:20.04
```

![docker run](https://i.imgur.com/qHWzUHS.png)

Once created, we update the package repositories and the system:

```sh
apt update && apt upgrade
```

![apt update](https://i.imgur.com/yVUAvK4.png)

Once done, we can start installing the necessary packages for the LAMPP stack.

<div style="page-break-after: always !important;"></div>

### Installing Apache

To run Apache on Ubuntu, the first thing to do is install the `apache2` package:

```sh
apt install apache2
```

![apt install apache2](https://i.imgur.com/obgRtTY.png)

While it installs, it will prompt us to configure `tzdata`, which is the package responsible for timezone configuration. In my case, I will choose the Madrid timezone:

![tzdata](https://i.imgur.com/Nyvgx9n.png)

Once installed, we can check that the service is stopped:

```sh
service apache2 status
```

![service apache2 status](https://i.imgur.com/nOlmyul.png)

To start it, we run the following command and check that it has started correctly:

```sh
service apache2 start

service apache2 status
```

![service apache2 start](https://i.imgur.com/i1U57WB.png)

With this, we have Apache installed and running. Being a container, we can access it from our host machine's browser. To do this, we need to navigate to `http://localhost:3000`:

![apache2 in browser](https://i.imgur.com/wUuLlkr.png)

<div style="page-break-after: always !important;"></div>

### Installing MySQL

In my case, I will install MariaDB, which is a fork of MySQL. To install it, we execute the following command:

```sh
apt install mariadb-server
```

![apt install mariadb-server](https://i.imgur.com/ArA1ail.png)

Once installed, we can check that the service is stopped, and to start it we use the following command and check that it has started correctly:

```sh
service mysql status
service mysql start
service mysql status
```

![service mysql start](https://i.imgur.com/kMCJkvU.png)

With this, we have MySQL installed and running.

Now we will use the command `mysql_secure_installation` to set the root user's password and remove anonymous users, test users, and test databases. To do this, we execute the following command:

```sh
mysql_secure_installation
```

<div style="page-break-after: always !important;"></div>

It will ask us a series of questions, to which we must respond with `y` or `n`:

```sh
#Notes:
# - What is commented with # is what is written in the terminal
# - Comments that do not start with # are the questions asked by the command and the answers we should give
# - Comments between -- are my annotations

~: mysql_secure_installation

#NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
#      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

#In order to log into MariaDB to secure it, we'll need the current
#password for the root user.  If you've just installed MariaDB, and
#you haven't set the root password yet, the password will be blank,
#so you should just press enter here.

Enter current password for root (enter for none):
#--Since docker has no default password, we just hit enter--

# OK, successfully used password, moving on...

# Setting the root password ensures that nobody can log into the MariaDB
# root user without the proper authorisation.

Set root password? [Y/n] Y # We say yes
New password: # We enter the password we want (Remember it)
Re-enter new password: # We re-enter it
# Password updated successfully!
# Reloading privilege tables..
#  ... Success!


# By default, a MariaDB installation has an anonymous user, allowing anyone
# to log into MariaDB without having to have a user account created for
# them.  This is intended only for testing, and to make the installation
# go a bit smoother.  You should remove them before moving into a
# production environment.

Remove anonymous users? [Y/n] Y

# ... Success!

# Normally, root should only be allowed to connect from 'localhost'.  This
# ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] Y
# -- We say yes since we don't want remote access; to access remotely with phpMyAdmin, we will create a connection user --
# ... Success!

# By default, MariaDB comes with a database named 'test' that anyone can
# access.  This is also intended only for testing, and should be removed
# before moving into a production environment.

Remove test database and access to it? [Y/n] Y

#  - Dropping test database...
#  ... Success!
#  - Removing privileges on test database...
#  ... Success!

# Reloading the privilege tables will ensure that all changes made so far
# will take effect immediately.

Reload privilege tables now? [Y/n] Y
#  ... Success!

# Cleaning up...

# All done!  If you've completed all of the above steps, your MariaDB
# installation should now be secure.

# Thanks for using MariaDB!
```

With this, we have MySQL configured and secured.

<div style="page-break-after: always !important;"></div>

#### Create a Connection User for phpMyAdmin

Since we have disabled remote access for the root user, we will create a connection user for phpMyAdmin. To do this, we execute the following command:

```sh
mysql -u root -p
# -- It will ask for the password we set in the previous step --
```

This will take us to the MySQL console. Now we will create the connection user for phpMyAdmin. To do this, we execute the following command:

```sh
MariaDB [(none)]> CREATE USER 'webmanager'@'%' identified by 'password'; # Instead of password, we enter the password we want
Query OK, 0 rows affected (0.001 sec)

MariaDB [(none)]> GRANT ALL PRIVILEGES ON *.* TO 'webmanager'@'%';

MariaDB [(none)]> FLUSH PRIVILEGES;

MariaDB [(none)]> exit

# -- We exit the MySQL console --

# -- We check that we can access with the user we created --

~: mysql -u webmanager -p
Enter password: # We enter the password we set previously
# Welcome to the MariaDB monitor.  Commands end with ; or \g.
# Your MariaDB connection id is 75
# Server version: 10.3.37-MariaDB-0ubuntu0.20.04.1 Ubuntu 20.04

# Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

# Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

# -- With this, we can see that we can access with the user we created, so we exit --
MariaDB [(none)]> exit
# Bye
```

<div style="page-break-after: always !important;"></div>

## Installing PHP

The installation of PHP is very straightforward; we just need to execute the following command:

```sh
apt install php libapache2-mod-php php-mysql
```

![apt install php](https://i.imgur.com/hmURtTb.png)

With this, we have PHP installed and working. We can verify it with the following command:

```sh
php -v
```

![php -v](https://i.imgur.com/xmextmr.png)

To be able to run PHP files in Apache, we need to restart the service, as it was started before we had PHP installed. To restart the service, we execute the following command:

```sh
service apache2 restart
```

![service apache2 restart](https://i.imgur.com/Rmmboj6.png)

Once restarted, we can verify that we can run PHP files in the browser. To do this, we create an `index.php` file in the `/var/www/html` directory:

```sh
echo "<?php phpinfo(); ?>" > /var/www
```
