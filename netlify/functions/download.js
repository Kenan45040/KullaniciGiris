const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const user = context.clientContext && context.clientContext.user;
  if (!user) {
    return {
      statusCode: 401,
      body: "Unauthorized"
    };
  }

  // Burada dosya yolunu alabilir veya sabit belirtebilirsin
  // Örnek: Sabit PDF dosyası (kullanıcılara göre daha dinamik de yapabilirsin)
  const fileUrl = 'https://kulanicigiris.netlify.app/ornek.pdf';

  // Dosyayı fetch ile çekip stream olarak dönmek mümkün değil Netlify Functions'ta
  // Bu yüzden yönlendirme yapıyoruz (Proxy mantığı için başka çözümler gerekir)
  
  return {
    statusCode: 302,
    headers: {
      Location: fileUrl
    }
  };
};
