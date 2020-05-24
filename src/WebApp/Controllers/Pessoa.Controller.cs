using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading;

namespace WebApp.Controllers
{
    [Route("api/[Controller]")]
    public class PessoaController : Controller
    {
        private readonly IPessoaAsyncRepository pessoaRepository;

        public PessoaController(IPessoaAsyncRepository pessoaRepository)
        {
            this.pessoaRepository = pessoaRepository;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public ActionResult Post([FromBody]Pessoa pessoa)
        {
            try
            {
                var pessoaReturn = this.pessoaRepository.RecuperarUsuarioAsync(pessoa.Email);

                Thread.Sleep(2000);

                if (pessoaReturn != null)
                    return BadRequest("Pessoa ja cadastrada");

                this.pessoaRepository.AdicionarAsync(pessoa);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("VerificarPessoa")]
        public ActionResult VerificarPessoa([FromBody]Pessoa pessoa)
        {
            try
            {
                //var pessoaReturn = this.pessoaRepository.RecuperarUsuarioAsync(pessoa.Email, pessoa.Senha);

                //Thread.Sleep(2000);

                //if (pessoaReturn != null)
                //    return Ok(pessoaReturn);
                //else
                //    return BadRequest("Pessoa nao encontrada");

                if (pessoa.Email == "israel.nicacio@gmail.com" && pessoa.Senha == "123456")
                    return Ok(pessoa);
                else
                    return BadRequest("Pessoa nao encontrada");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}