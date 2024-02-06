import onError from "@/utils/util";
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
    console.log('file ->' , file);
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

let upload = multer({ storage: storage });

let uploadfile = upload.single("file");
handler.use(uploadfile);
handler.post(async (req, res) => {

    console.log('req.headers.host -> ' , req.headers.host);
    console.log('req.file.filenamereq -> ' , req.file);
    console.log('req data-> ' , req.body);

//   let url = "http://" + req.headers.host;
//   let filename = req.file.filename;

//   console.log('url -> ' , url , 'filename -> ' , filename );

  // let result = await executeQuery("inser into upload pic values(?)", [
  //   filename,
  // ]);
  // result = await executeQuery(
  //   `select * from upload where pic_id =${result.inserId}`
  // );
  return res.status(200).send({
    message:"ok"
    // result:result,
    // url:url + '/' + req.file.filename
  });
});

export default handler;
