using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class ReturnedInvoiceSupplyment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ReturnSupplymentInvoices",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InvoiceDate = table.Column<DateTime>(nullable: false),
                    InvoiceReferenceID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReturnSupplymentInvoices", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ReturnSupplymentInvoices_supplymentInvoices_InvoiceReferenceID",
                        column: x => x.InvoiceReferenceID,
                        principalTable: "supplymentInvoices",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ReturnSupplymentInvoiceDetails",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductID = table.Column<string>(nullable: true),
                    Quantity = table.Column<decimal>(nullable: false),
                    Price = table.Column<decimal>(nullable: false),
                    ExpireDate = table.Column<DateTime>(nullable: true),
                    Serial = table.Column<string>(nullable: true),
                    ReturnSupplymentInvoiceID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReturnSupplymentInvoiceDetails", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ReturnSupplymentInvoiceDetails_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ReturnSupplymentInvoiceDetails_ReturnSupplymentInvoices_ReturnSupplymentInvoiceID",
                        column: x => x.ReturnSupplymentInvoiceID,
                        principalTable: "ReturnSupplymentInvoices",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ReturnSupplymentInvoiceDetails_ProductID",
                table: "ReturnSupplymentInvoiceDetails",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_ReturnSupplymentInvoiceDetails_ReturnSupplymentInvoiceID",
                table: "ReturnSupplymentInvoiceDetails",
                column: "ReturnSupplymentInvoiceID");

            migrationBuilder.CreateIndex(
                name: "IX_ReturnSupplymentInvoices_InvoiceReferenceID",
                table: "ReturnSupplymentInvoices",
                column: "InvoiceReferenceID",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ReturnSupplymentInvoiceDetails");

            migrationBuilder.DropTable(
                name: "ReturnSupplymentInvoices");
        }
    }
}
