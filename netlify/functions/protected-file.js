const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  const user = context.clientContext && context.clientContext.user;

  if (!user) {
    return {
      statusCode: 401,
      body: "Unauthorized",
    };
  }

  const filePath = path.resolve(__dirname, "../../protected/ornek.pdf");

  try {
    const fileContent = fs.readFileSync(filePath);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=ornek.pdf",
      },
      body: fileContent.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Dosya okunamadı",
    };
  }
};
