import { PrismaClient } from "@prisma/client";
const client= global.prismadb || new PrismaClient();
if (process.env.NODE_ENV=='production') global.prismadb = client;

export default client ;
//c est pour utiliser prisma client dans un env de  nodejs et pour communiquer a la database -nb: ce fichier lié a le fichier global.d.ts pour eliminer l errreur de prisma db et la declaré
