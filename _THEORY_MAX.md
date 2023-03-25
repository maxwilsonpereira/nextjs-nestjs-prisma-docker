#### Articles

- 6 reasons why we chose Nx as our monorepo management tool
  https://medium.com/purplebricks-digital/6-reasons-why-we-chose-nx-as-our-monorepo-management-tool-1fe5274a008e

- NestJs x Prisma: Made for each other
  https://dev.to/majiyd/nestjs-x-prisma-made-for-each-other-2ad7

- Creating a Project with Nest.js + Next.js
  https://dev.to/yakovlev_alexey/creating-a-project-with-nestjs-nextjs-3i1i

- NestJS vs. ASP.NET: Comparing web frameworks
  https://blog.logrocket.com/nestjs-vs-asp-net-comparing-web-frameworks/

---

#### NX Workspace

https://nx.dev/

There are several advantages to using an Nx workspace instead of just creating your own folders:

Code Sharing: Nx allows you to share code between multiple projects easily. By using an Nx workspace, you can create libraries that can be used by multiple applications. This can significantly reduce the amount of code duplication in your project, making it easier to maintain and update.

Dependency Management: Nx manages dependencies between your projects automatically. This means that you don't have to worry about installing and updating dependencies for each project individually. Nx will manage dependencies for all projects in the workspace, ensuring that they are consistent across all projects.

Consistent Tooling: Nx provides consistent tooling across all projects in the workspace. This means that you don't have to worry about configuring each project individually. Nx provides a set of standard tools that can be used across all projects, making it easier to maintain and update your project.

Scalability: Nx is designed to be scalable. As your project grows, Nx can help you manage the complexity of your project by providing tools for managing large codebases. Nx allows you to break your project down into smaller, more manageable pieces, making it easier to maintain and update your project over time.

Overall, Nx provides a set of tools and practices that can help you manage the complexity of your project more effectively. By using an Nx workspace, you can reduce code duplication, manage dependencies more effectively, and scale your project more easily over time.

---

#### NestJS

https://nestjs.com/

NestJS is a backend framework for building scalable, server-side applications using Node.js. It is built on top of Express, a popular web application framework for Node.js, and provides a set of features and architectural patterns to make it easier to develop enterprise-grade applications.

NestJS uses TypeScript, a strongly-typed superset of JavaScript, to provide features such as type-checking, interfaces, and decorators, which make it easier to write and maintain complex applications. It also provides a modular architecture that allows developers to organize their code into modules, each with its own set of controllers, services, and providers.

NestJS provides several built-in modules, such as the HTTP module for handling HTTP requests and the WebSocket module for building real-time applications. It also supports other popular Node.js frameworks, such as Fastify, and integrates with other tools and libraries, such as Swagger and Passport.

NestJS follows the SOLID principles of object-oriented programming and promotes a modular, testable, and scalable code structure. It also provides a robust set of testing tools, including unit tests, end-to-end tests, and integration tests, to help developers ensure the quality and reliability of their applications.

Overall, NestJS provides a powerful and flexible platform for building complex, scalable, and maintainable server-side applications using Node.js.

---

#### Prisma

https://www.prisma.io/

Prisma is a database toolkit for building scalable and performant server-side applications. It abstracts databases like PostgreSQL, MySQL, and SQLite, providing a type-safe and intuitive API. Developers define their data models in a schema file, and Prisma generates a database schema, client library, and API documentation.

Prisma offers features such as data validation, real-time data synchronization, and query performance optimization. Its data modeling capabilities make it easier to maintain data consistency over time. Prisma is open-source and can be used with any programming language or framework.

Prisma is an ORM (Object-Relational Mapping) tool. It generates SQL queries automatically based on data models defined in a schema file. It offers advantages such as improved performance, type-safety, and a more intuitive API.

Migrations in Prisma manage changes to the database schema over time. A migration is a change script that modifies the schema to reflect a change in the data model. These migration files are fully customizable so that you can configure any additional features of the underlying database or include additional commands, e.g. for seeding. To generate a migration, run a command in the Prisma CLI. Applying a migration modifies the schema to match the updated Prisma schema file. Migrations allow for changes to the schema without losing data or requiring manual updates to the database.
