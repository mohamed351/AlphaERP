using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class FinishMissingCustomerInvoiceDetails : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReturnedCustomerInvoice_CustomerInvoice_InvoiceReferenceID",
                table: "ReturnedCustomerInvoice");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ReturnedCustomerInvoice",
                table: "ReturnedCustomerInvoice");

            migrationBuilder.RenameTable(
                name: "ReturnedCustomerInvoice",
                newName: "ReturnedCustomerInvoices");

            migrationBuilder.RenameIndex(
                name: "IX_ReturnedCustomerInvoice_InvoiceReferenceID",
                table: "ReturnedCustomerInvoices",
                newName: "IX_ReturnedCustomerInvoices_InvoiceReferenceID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ReturnedCustomerInvoices",
                table: "ReturnedCustomerInvoices",
                column: "ID");

            migrationBuilder.CreateTable(
                name: "ReturnedCustomerInvoiceDetails",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductID = table.Column<string>(nullable: true),
                    InvoiceID = table.Column<int>(nullable: false),
                    Quantity = table.Column<decimal>(nullable: false),
                    UnitPrice = table.Column<decimal>(nullable: false),
                    ExpireDate = table.Column<DateTime>(nullable: true),
                    Serial = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReturnedCustomerInvoiceDetails", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ReturnedCustomerInvoiceDetails_ReturnedCustomerInvoices_InvoiceID",
                        column: x => x.InvoiceID,
                        principalTable: "ReturnedCustomerInvoices",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ReturnedCustomerInvoiceDetails_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ReturnedCustomerInvoiceDetails_InvoiceID",
                table: "ReturnedCustomerInvoiceDetails",
                column: "InvoiceID");

            migrationBuilder.CreateIndex(
                name: "IX_ReturnedCustomerInvoiceDetails_ProductID",
                table: "ReturnedCustomerInvoiceDetails",
                column: "ProductID");

            migrationBuilder.AddForeignKey(
                name: "FK_ReturnedCustomerInvoices_CustomerInvoice_InvoiceReferenceID",
                table: "ReturnedCustomerInvoices",
                column: "InvoiceReferenceID",
                principalTable: "CustomerInvoice",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReturnedCustomerInvoices_CustomerInvoice_InvoiceReferenceID",
                table: "ReturnedCustomerInvoices");

            migrationBuilder.DropTable(
                name: "ReturnedCustomerInvoiceDetails");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ReturnedCustomerInvoices",
                table: "ReturnedCustomerInvoices");

            migrationBuilder.RenameTable(
                name: "ReturnedCustomerInvoices",
                newName: "ReturnedCustomerInvoice");

            migrationBuilder.RenameIndex(
                name: "IX_ReturnedCustomerInvoices_InvoiceReferenceID",
                table: "ReturnedCustomerInvoice",
                newName: "IX_ReturnedCustomerInvoice_InvoiceReferenceID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ReturnedCustomerInvoice",
                table: "ReturnedCustomerInvoice",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_ReturnedCustomerInvoice_CustomerInvoice_InvoiceReferenceID",
                table: "ReturnedCustomerInvoice",
                column: "InvoiceReferenceID",
                principalTable: "CustomerInvoice",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
