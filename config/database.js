// 部署到服务器上的配置
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
// 开发环境
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

