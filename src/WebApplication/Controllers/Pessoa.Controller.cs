using System;
using System.Linq;
using System.Threading;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    [Route("api/[Controller]")]
    public class PessoaController : Controller
    {
        private readonly IPessoaAsyncRepository pessoaRepository;

        public PessoaController(IPessoaAsyncRepository pessoaRepository)
        {
            this.pessoaRepository = pessoaRepository;
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
                var pessoaReturn = this.pessoaRepository.RecuperarUsuarioAsync(pessoa.Email, pessoa.Senha);

                Thread.Sleep(2000);

                if (pessoaReturn != null)
                    return Ok(pessoaReturn);
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