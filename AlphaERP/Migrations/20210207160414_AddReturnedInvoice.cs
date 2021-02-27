using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class AddReturnedInvoice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ReturnedCustomerInvoice",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InvoiceNumber = table.Column<int>(nullable: false),
                    InvoiceReferenceID = table.Column<int>(nullable: false),
                    Note = table.Column<string>(nullable: true),
                    InvoiceDate = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReturnedCustomerInvoice", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ReturnedCustomerInvoice_CustomerInvoice_InvoiceReferenceID",
                        column: x => x.InvoiceReferenceID,
                        principalTable: "CustomerInvoice",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ReturnedCustomerInvoice_InvoiceReferenceID",
                table: "ReturnedCustomerInvoice",
                column: "InvoiceReferenceID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ReturnedCustomerInvoice");
        }
    }
}
