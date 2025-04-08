import axios from "axios";
const apiKey = "wx0lkjub21yv50r7f";
const postApi = "https://techhk.aoscdn.com/api/tasks/visual/scale";
const getApi = "https://techhk.aoscdn.com/api/tasks/visual/scale/";

export const enhancedApical = async (imageUrl) => {
  try {
    const taskId = await postApiFunc(imageUrl);
    const enhancedImgresult = await getApiFunc(taskId);
    console.log(enhancedImgresult);
  } catch (error) {
    console.log(error);
  }
};

const postApiFunc = async (imageUrl) => {
    const formData = new FormData();
    formData.append("image_file", imageUrl);

      const { data } = await axios.post(`${postApi}`, formData, {
        headers: {
          "X-API-KEY": apiKey,
        },
      });
      console.log(data)
  };
  

const getApiFunc = async () => {
  console.log("Get!");
};
