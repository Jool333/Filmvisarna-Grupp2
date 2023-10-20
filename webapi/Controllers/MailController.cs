using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace MailController.Controllers
{
    [Route("api/email")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        [HttpPost("sendMail")]
        public IActionResult SendMail(int bookingId, string userEmail)
        {
            try
            {

                string filePath = "Functions/mailsecret.json";
                string jsonString = System.IO.File.ReadAllText(filePath);
                var secrets = JsonConvert.DeserializeObject<dynamic>(jsonString)!;


                string smtpServer = "smtp.gmail.com";
                int smtpPort = 587;
                string fromEmail = secrets.ServerEmail;
                string password = secrets.ServerPassword;


                using (SmtpClient client = new SmtpClient(smtpServer, smtpPort))
                {
                    client.UseDefaultCredentials = false;
                    client.Credentials = new NetworkCredential(fromEmail, password);
                    client.EnableSsl = true;


                    using (MailMessage mailMessage = new MailMessage())
                    {
                        mailMessage.From = new MailAddress(fromEmail);
                        mailMessage.To.Add("fvisarna@gmail.com");
                        mailMessage.Subject = "Bokningsbekräftelse";
                        mailMessage.Body = $"Din bokning med ID {bookingId} är bekräftad.";

                        client.Send(mailMessage);
                    }
                }

                return Ok("Email sent successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Email sending failed. Error: {ex.Message}");
            }
        }
    }
}
