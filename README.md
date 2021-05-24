# Strapi application

A quick description of your strapi application

## 开发环境

- `blog-backend\config\database.js`

```js
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
```

- 运行

```js
npm run develop
```

## 生产环境部署

- `blog-backend\config\database.js`

```js
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
      default: {
          connector: 'bookshelf',
          settings: {
              client: 'mysql',
              host: env('DATABASE_HOST', 'localhost'),
              port: env.int('DATABASE_PORT', 3306),
              // 你的数据库名称
              database: env('DATABASE_NAME', 'blog'),
              // 你的服务器中的数据库的用户名和密码
              username: env('DATABASE_USERNAME', 'blog'),
              password: env('DATABASE_PASSWORD', '123456Blog+'),
          },
          options: {},
      },
  },
});
```

项目部署文档（部署在ucloud中）：[Vue静态站点生成 -- Gridsome综合案例](https://eline302.github.io/2021/05/20/Vue%E9%9D%99%E6%80%81%E7%AB%99%E7%82%B9%E7%94%9F%E6%88%90-Gridsome%E7%BB%BC%E5%90%88%E6%A1%88%E4%BE%8B/)
