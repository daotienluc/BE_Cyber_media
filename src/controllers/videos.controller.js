import { responseSuccess } from "../common/helpers/response.helper.js";
import videoService from "../services/videos.service.js";

const videoController = {
  videoList: async (req, res, next) => {
    try {
      const videos = await videoService.videoList();
      const resData = responseSuccess(
        videos,
        "Lấy danh sách video thành công !",
        200
      );
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};
export default videoController;
