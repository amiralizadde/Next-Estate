import StateModels from "@/models/states";
import connectionToDB from "@/utils/db";
import {onError} from "@/utils/util";
import multer from "multer";
import nc from "next-connect";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc(onError);

let storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({ storage: storage });

let uploadfile = upload.single("file");
handler.use(uploadfile);
handler.post(async (req, res) => {
  connectionToDB();
  console.log("1");

  const data = JSON.parse(req.body.data);
  // console.log(" values -> ", values);
  console.log(" features -> ", data.features);
  // console.log("features  ->", features);

  // let url = "http://" + req.headers.host;
  let filename = req.file.filename;
  console.log(" filename-> ", filename);

  // let img = url + "/" + filename;

  // console.log("filename->", filename);
  // console.log('values' , body.data.values);
  // console.log('features' , req.body.data.features);
  // let values = {
  //   statusAd: "mortgage",
  //   typeState: "home",
  //   city: "tehran",
  // };

  const state = await StateModels.create({values:data.values,features:data.features,image:filename , creator:'65be79a649f3454f49445c2e'});
  console.log("state ->", state);

  //console.log('url -> ' , url , 'filename -> ' , filename );

  // let result = await executeQuery("inser into upload pic values(?)", [
  //   filename,
  // ]);
  // result = await executeQuery(
  //   `select * from upload where pic_id =${result.inserId}`
  // );

  return res.status(200).send({
    message: "ok",
    // result:result,
    // url:url + '/' + req.file.filename
  });
});

export default handler;
