import axios from "axios";

const API_KEY = "wx6kvwrz2ktuoyphe";
const BASE_URL = "https://techhk.aoscdn.com/";
const MAXIMUM_RETRISE = 20;

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    // console.log("Image Uploaded Task_ID : ", taskId);

    //Polling Methord
    const enhancedImageData = await PollForEnhanceImg(taskId);
    console.log("Enhanced Image Data", enhancedImageData);
    return enhancedImageData;
  } catch (error) {
    console.log("Error come from enhance Inage : ", error.message);
  }
};

const uploadImage = async (file) => {
  //Code to upload the image
  const formdata = new FormData();
  formdata.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formdata,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  //   console.log(data);
  if (!data?.data?.task_id) {
    throw new Error("Faild to upoload Image! TaskID not Found");
  }
  return data.data.task_id;
};

const PollForEnhanceImg = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);
  
    if (result.state === 4) {
      console.log(`Processing...${retries}/${MAXIMUM_RETRISE}`);
  
      if (retries >= MAXIMUM_RETRISE) {
        throw new Error("Max Retries reached, Please try again later");
      }
  
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      return PollForEnhanceImg(taskId, retries + 1);
    }
       console.log("Enhanced Image URL : ", result.result)
       return result;
  };

const fetchEnhancedImage = async (taskId) => {
  //code for fetch the image
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data) {
    throw new Error("Faild to upoload Image! TaskID not Found");
  }
  return data.data;
};



// // {status: 200, message: 'success', data: {…}}
// // data
// // :
// // {task_id: 'ad049ed5-050c-4eaa-8f60-90c86ae749d1'}
// // message
// // :
// // "success"
// // status
// // :
// // 200

