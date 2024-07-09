import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  console.log("Seeding...");

  // const user1 = await prisma.user.create({
  //   data: { email: "pikj.reyderman@gmail.com" },
  // });
  // console.log(user1);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
