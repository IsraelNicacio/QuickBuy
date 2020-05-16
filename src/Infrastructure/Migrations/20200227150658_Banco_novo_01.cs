using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Infrastructure.Migrations
{
    public partial class Banco_novo_01 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pessoas",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Nome = table.Column<string>(maxLength: 30, nullable: false),
                    Sobrenome = table.Column<string>(maxLength: 30, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    Senha = table.Column<string>(maxLength: 256, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pessoas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Produtos",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CodigoInterno = table.Column<string>(maxLength: 60, nullable: false),
                    Descricao = table.Column<string>(maxLength: 120, nullable: false),
                    UnidadeMedida = table.Column<string>(maxLength: 6, nullable: false),
                    ValoUnitario = table.Column<decimal>(type: "decimal(15,2)", nullable: false),
                    NomeArquivo = table.Column<string>(maxLength: 120, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Produtos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pedidos",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    DataPedido = table.Column<DateTime>(nullable: false),
                    DataPrevisaoEntrega = table.Column<DateTime>(nullable: false),
                    PessoaId = table.Column<long>(nullable: false),
                    EnderecoEntregaId = table.Column<long>(nullable: false),
                    Valor = table.Column<decimal>(type: "decimal(15,2)", nullable: false),
                    Observacao = table.Column<string>(maxLength: 520, nullable: true),
                    Status = table.Column<string>(type: "char", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_Pedido", x => x.Id);
                    table.ForeignKey(
                        name: "fk_Pedido_01",
                        column: x => x.PessoaId,
                        principalTable: "Pessoas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Enderecos",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    EntitiesId = table.Column<long>(nullable: false),
                    Logradouro = table.Column<string>(maxLength: 60, nullable: false),
                    Numero = table.Column<string>(maxLength: 30, nullable: true),
                    Complemento = table.Column<string>(maxLength: 30, nullable: true),
                    Bairro = table.Column<string>(maxLength: 60, nullable: false),
                    CEP = table.Column<string>(nullable: true),
                    Cidade = table.Column<string>(maxLength: 60, nullable: true),
                    Estado = table.Column<string>(maxLength: 60, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_Endereco", x => new { x.Id, x.EntitiesId });
                    table.ForeignKey(
                        name: "fk_Endereco_02",
                        column: x => x.EntitiesId,
                        principalTable: "Pedidos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_Endereco_01",
                        column: x => x.EntitiesId,
                        principalTable: "Pessoas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ItensPedido",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    PedidoId = table.Column<long>(nullable: false),
                    ProdutoId = table.Column<long>(nullable: false),
                    ValorUnitario = table.Column<decimal>(type: "decimal(15,2)", nullable: false),
                    Quantidade = table.Column<decimal>(type: "decimal(15,4)", nullable: false),
                    ValorSubTotal = table.Column<decimal>(type: "decimal(15,2)", nullable: false),
                    ValorDesconto = table.Column<decimal>(type: "decimal(15,2)", nullable: false),
                    ValorAcrescimo = table.Column<decimal>(type: "decimal(15,2)", nullable: false),
                    ValorTotal = table.Column<decimal>(type: "decimal(15,2)", nullable: false),
                    Observacoes = table.Column<string>(maxLength: 520, nullable: true),
                    Status = table.Column<string>(type: "char", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_ItemPedido", x => x.Id);
                    table.ForeignKey(
                        name: "fk_ItemPedido_01",
                        column: x => x.PedidoId,
                        principalTable: "Pedidos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_ItemPedido_02",
                        column: x => x.ProdutoId,
                        principalTable: "Produtos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Enderecos_EntitiesId",
                table: "Enderecos",
                column: "EntitiesId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ItensPedido_PedidoId",
                table: "ItensPedido",
                column: "PedidoId");

            migrationBuilder.CreateIndex(
                name: "IX_ItensPedido_ProdutoId",
                table: "ItensPedido",
                column: "ProdutoId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pedidos_PessoaId",
                table: "Pedidos",
                column: "PessoaId");

            migrationBuilder.CreateIndex(
                name: "pk_Pessoa",
                table: "Pessoas",
                column: "Id",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "pk_Produto",
                table: "Produtos",
                column: "Id",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Enderecos");

            migrationBuilder.DropTable(
                name: "ItensPedido");

            migrationBuilder.DropTable(
                name: "Pedidos");

            migrationBuilder.DropTable(
                name: "Produtos");

            migrationBuilder.DropTable(
                name: "Pessoas");
        }
    }
}
