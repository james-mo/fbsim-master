import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const player = await prisma.player.create({
    data: {
      name: "Lionel Messi",
      position: {
        create: {
          name: "Right Winger",
        },
      },
      nation: {
        create: {
          name: "Argentina",
        },
      },
      club: {
        create: {
          name: "Inter Miami",
          venue: {
            create: {
              name: "DRV PNK Stadium",
              city: {
                create: {
                  name: "Fort Lauderdale",
                  nation: {
                    create: {
                      name: "United States",
                    },
                  },
                  population: 181668,
                },
              },
              capacity: 18000,
            },
          }
        },
      },
    },
  });
  console.log(player);

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })