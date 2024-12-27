import { prisma } from "../common/prisma/init.prisma.js";
import models from "../common/sequelize/init.sequelize.js";

const videoService = {
  videoList: async () => {
    // Sử dụng sequelize
    // const videos = await models.videos.findAll({ raw: true });

    // Sử dụng prisma
    const videos = await prisma.videos.findMany();
    return videos;
  },
};

export default videoService;
