<h1 align="center">
    <font size="10">Motaphoto</font>
</h1>

<p align="center">Motaphoto un site developpé avec WordPress, Bedrock, Composer, Npm.</p>


<p align="center">
  <a href="https://packagist.org/packages/roots/wordpress">
    <img alt="roots/wordpress" src="https://img.shields.io/packagist/dt/roots/wordpress?label=roots%2Fwordpress%20downloads&logo=roots&logoColor=white&colorB=2b3072&colorA=525ddc&style=flat-square">
  </a>
  
  <img src="https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/roots/bedrock/master/composer.json&label=wordpress&logo=roots&logoColor=white&query=$.require[%22roots/wordpress%22]&colorB=2b3072&colorA=525ddc&style=flat-square">

  <a href="https://github.com/roots/bedrock/actions/workflows/ci.yml">
    <img alt="Build Status" src="https://img.shields.io/github/actions/workflow/status/roots/bedrock/ci.yml?branch=master&logo=github&label=CI&style=flat-square">
  </a>
</p>

## Why use Bedrock?

Bedrock is a WordPress boilerplate for developers that want to manage their projects with Git and Composer.

- Better folder structure
- Dependency management with [Composer](https://getcomposer.org)
- Easy WordPress configuration with environment specific files
- Environment variables with [Dotenv](https://github.com/vlucas/phpdotenv)
- Autoloader for mu-plugins (use regular plugins as mu-plugins)
- Enhanced security (separated web root and secure passwords with [wp-password-bcrypt](https://github.com/roots/wp-password-bcrypt))

## Getting Started
```bash
git clone
cd motaphoto
composer install
cd web/app/themes/motaphoto
npm install
npm run build
```

## Adding WordPress plugins with Composer
```bash
$ composer require wpackagist-plugin/query-monitor
```

## Updating WordPress and Plugins
```bash
$ composer require roots/wordpress -W
$ composer require wpackagist-plugin/query-monitor
$ composer require roots/wordpress:6.4.1 -W
```

