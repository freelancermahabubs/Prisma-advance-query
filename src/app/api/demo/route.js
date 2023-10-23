import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

// create data
// export async function POST(req, res) {
//   try {
//     const prisma = new PrismaClient();

//     const reqBody = await req.json();
//     const result = await prisma.employee.createMany({
//       data: reqBody,
//     });

//     // JSON Parse....
//     return NextResponse.json({status: "success", data: result});
//   } catch (e) {
//     return NextResponse.json({status: "fail", data: e});
//   }
// }

// aggration and groupBy
// export async function POST(req, res) {
//   try {
//     const prisma = new PrismaClient();

//     // const reqBody = await req.json();
//     const result = await prisma.employee.groupBy({
//       // data: reqBody,

//       //--- groupBy---
//       by: ["city"],
//       _count: {id: true},
//       _sum: {salary: true},
//       having: {city: "M"}

//       // --- aggreate ---
//       // _count: {id: true},
//       // _sum: {salary: true},
//       // _avg: {salary: true},
//       // _min: {salary: true},
//       // _max: {salary: true},
//     });

//     // JSON Parse....
//     return NextResponse.json({status: "success", data: result});
//   } catch (e) {
//     return NextResponse.json({status: "fail", data: e});
//   }
// }

// pagination
// export async function POST(req, res) {
//   try {
//     const prisma = new PrismaClient();

//     // const reqBody = await req.json();
//     const result = await prisma.employee.findMany({
//       // cursor: {id: 2},
//       // take: 1,
//       skip: 4,
//       take: 2,
//     });

//     // JSON Parse....
//     return NextResponse.json({status: "success", data: result});
//   } catch (e) {
//     return NextResponse.json({status: "fail", data: e});
//   }
// }

//--- Query time enable loggin---
// export async function POST(req, res) {
//   try {
//     const prisma = new PrismaClient({log: ["query", "info", "warn", "error"]});

//     const startTime = Date.now();

//     const result = await prisma.employee.findMany();
//     const excTime = Date.now() - startTime + "milliseconds";

//     // JSON Parse....
//     return NextResponse.json({
//       excTime: excTime,
//       status: "success",
//       data: result,
//     });
//   } catch (e) {
//     return NextResponse.json({status: "fail", data: e});
//   }
// }

//--- Raw Query ---
// export async function POST(req, res) {
//   try {
//     const prisma = new PrismaClient({log: ["query", "info", "warn", "error"]});

//     const startTime = Date.now();

//     const result = await prisma.$queryRaw`SELECT * FROM employee`;
//     const excTime = Date.now() - startTime + "milliseconds";

//     // JSON Parse....
//     return NextResponse.json({
//       excTime: excTime,
//       status: "success",
//       data: result,
//     });
//   } catch (e) {
//     return NextResponse.json({status: "fail", data: e});
//   }
// }

//--- Transactions & Rollback ---
// export async function POST(req, res) {
//   try {
//     const prisma = new PrismaClient({log: ["query", "info", "warn", "error"]});

//     const startTime = Date.now();

//     const createUser = await prisma.user.create({
//       data: {email: "mahabub@gmail.com", password: "123"},
//     });

//     const deleteComment = prisma.comment.delete({
//       where: {id: 1},
//     });
//     const excTime = Date.now() - startTime + "milliseconds";

//     const result = await prisma.$transaction(createUser, deleteComment);
//     // JSON Parse....
//     return NextResponse.json({
//       excTime: excTime,
//       status: "success",
//       data: result,
//     });
//   } catch (e) {
//     return NextResponse.json({status: "fail", data: e});
//   }
// }

// comparession oparator for query
// export async function POST(req, res) {
//   try {
//     // equals, not
//     // in, notIn
//     // let, lte, gt , gte
//     // contains , startsWith, endsWith
//     const prisma = new PrismaClient({log: ["query", "info", "warn", "error"]});

//     const startTime = Date.now();

//     const result = await prisma.employee.findMany({
//       // where: {salary: {gte: 542121}},
//       // where: {salary: {notIn: [4111, [542121]]}},
//       // where: {salary: {gt: 542121, lt: 80000}},
//       // where: {name: {contains: "mahabub"}},
//       // where: {name: {startsWith: "m"}},
//       where: {name: {endsWith: "1"}},
//     });

//     const excTime = Date.now() - startTime + "milliseconds";

//     // JSON Parse....
//     return NextResponse.json({
//       excTime: excTime,
//       status: "success",
//       data: result,
//     });
//   } catch (e) {
//     return NextResponse.json({status: "fail", data: e});
//   }
// }

// logical operators
// export async function POST(req, res) {
//   try {
//     // AND
//     // OR
//     // NOT
//     const prisma = new PrismaClient({log: ["query", "info", "warn", "error"]});

//     const startTime = Date.now();

//     const result = await prisma.employee.findMany({
//       // where: {
//       //   AND: [
//       //     {
//       //       name: {contains: "mahabub"},
//       //     },
//       //     {
//       //       salary: {gte: "542121"},
//       //     },
//       //   ],
//       // },
//       // where: {
//       //   OR: [
//       //     {
//       //       name: {contains: "mahabub"},
//       //     },
//       //     {
//       //       salary: {gte: "542121"},
//       //     },
//       //   ],
//       // },
//       where: {
//         NOT: [
//           {
//             name: {contains: "mahabub"},
//           },
//           {
//             salary: {gte: "542121"},
//           },
//         ],
//       },
//     });

//     const excTime = Date.now() - startTime + "milliseconds";

//     // JSON Parse....
//     return NextResponse.json({
//       excTime: excTime,
//       status: "success",
//       data: result,
//     });
//   } catch (e) {
//     return NextResponse.json({status: "fail", data: e});
//   }
// }

// date oprerators
export async function POST(req, res) {
  try {
    // working with date

    // lt, lte, gt , gte
    const prisma = new PrismaClient({log: ["query", "info", "warn", "error"]});

    const startTime = Date.now();

    const result = await prisma.employee.findMany({
      where: {
        birtdDay: {
          lt: new Date("2023-10-11"),
          gt: new Date("2018-10-11")
        },
      },
    });

    const excTime = Date.now() - startTime + "milliseconds";

    // JSON Parse....
    return NextResponse.json({
      excTime: excTime,
      status: "success",
      data: result,
    });
  } catch (e) {
    return NextResponse.json({status: "fail", data: e});
  }
}
