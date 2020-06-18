using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System;
using System.IO;
using System.Linq;
using System.Threading;

namespace WebApp.Controllers
{
    [Route("api/[Controller]")]
    public class ProdutoController : Controller
    {
        private readonly IProdutoAsyncRepository produtoAsyncRepository;
        private IHttpContextAccessor httpContextAcessor;
        private IHostEnvironment hostEnvironment;
        private IFormFile formFile;

        public ProdutoController(IProdutoAsyncRepository produtoAsyncRepository, IHttpContextAccessor httpContextAcessor, IHostEnvironment hostEnvironment)
        {
            this.produtoAsyncRepository = produtoAsyncRepository;
            this.httpContextAcessor = httpContextAcessor;
            this.hostEnvironment = hostEnvironment;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var result =  this.produtoAsyncRepository.RecuperarColecao().Result;
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
                throw;
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Produto produto)
        {
            try
            {
                //Verifica se existe produto cadastrado
                var produtoResult = this.produtoAsyncRepository.RecuperarCodigoProdutoAsync(produto.CodigoInterno);

                Thread.Sleep(2000);

                if (produtoResult != null)
                    return BadRequest("Produto com mesmo código já cadastrado na base de dados");

                this.produtoAsyncRepository.AdicionarAsync(produto);

                return Created("api/produto", produto);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("Excluir")]
        public IActionResult Excluir([FromBody]Produto produto)
        {
            try
            {
                this.produtoAsyncRepository.RemoverAsync(produto);
                return Json(this.produtoAsyncRepository.RecuperarColecao());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("EnviarArquivo")]
        public IActionResult EnviarArquivo()
        {
            try
            {
                using (var streamFile = new FileStream(FormatFile(), FileMode.Create))
                    formFile.CopyTo(streamFile);

                return Json(new FileInfo(FormatFile()).Name);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        private string FormatFile()
        {
            formFile        = this.httpContextAcessor.HttpContext.Request.Form.Files["arquivoEnviado"];
            var fileName    = formFile.FileName;
            var extensao    = fileName.Split(".").Last();
            var arryName    = Path.GetFileNameWithoutExtension(fileName).Take(10).ToArray();
            var newFileName = $"{new string(arryName).Replace(" ", "-")}{DateTime.Now.Year}{DateTime.Now.Month.ToString().PadLeft(2,'0')}{DateTime.Now.Day.ToString().PadLeft(2, '0')}.{extensao}";
            var pathFile    = $"{this.hostEnvironment.ContentRootPath}\\wwwroot\\arquivos";
            //Retorna formatacao
            return $"{pathFile}\\{newFileName}";
        }
    }
}