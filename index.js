//1
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  //this is taking url in name "url"
  .prompt([
    {
      message: "Enter URL: ",
      name: "url",
    },
  ])
  .then((answers) => {
    //this is making that text saved in "url" to png file of name qr_image.png
    const url = answers.url;
    var qr_svg = qr.image(url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream(`qr_image.png`));

    //create urltext file which will hold the url of which qr is being generated
    fs.writeFile("URLTEXT.txt", url, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File written successfully.");
    });
  });
