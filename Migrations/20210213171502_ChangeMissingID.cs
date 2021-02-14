using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class ChangeMissingID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReturnSupplymentInvoiceDetails_ReturnSupplymentInvoices_ReturnSupplymentInvoiceID",
                table: "ReturnSupplymentInvoiceDetails");

            migrationBuilder.DropIndex(
                name: "IX_ReturnSupplymentInvoiceDetails_ReturnSupplymentInvoiceID",
                table: "ReturnSupplymentInvoiceDetails");

            migrationBuilder.DropColumn(
                name: "ReturnSupplymentInvoiceID",
                table: "ReturnSupplymentInvoiceDetails");

            migrationBuilder.AddColumn<int>(
                name: "InvoiceID",
                table: "ReturnSupplymentInvoiceDetails",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ReturnSupplymentInvoiceDetails_InvoiceID",
                table: "ReturnSupplymentInvoiceDetails",
                column: "InvoiceID");

            migrationBuilder.AddForeignKey(
                name: "FK_ReturnSupplymentInvoiceDetails_ReturnSupplymentInvoices_InvoiceID",
                table: "ReturnSupplymentInvoiceDetails",
                column: "InvoiceID",
                principalTable: "ReturnSupplymentInvoices",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReturnSupplymentInvoiceDetails_ReturnSupplymentInvoices_InvoiceID",
                table: "ReturnSupplymentInvoiceDetails");

            migrationBuilder.DropIndex(
                name: "IX_ReturnSupplymentInvoiceDetails_InvoiceID",
                table: "ReturnSupplymentInvoiceDetails");

            migrationBuilder.DropColumn(
                name: "InvoiceID",
                table: "ReturnSupplymentInvoiceDetails");

            migrationBuilder.AddColumn<int>(
                name: "ReturnSupplymentInvoiceID",
                table: "ReturnSupplymentInvoiceDetails",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ReturnSupplymentInvoiceDetails_ReturnSupplymentInvoiceID",
                table: "ReturnSupplymentInvoiceDetails",
                column: "ReturnSupplymentInvoiceID");

            migrationBuilder.AddForeignKey(
                name: "FK_ReturnSupplymentInvoiceDetails_ReturnSupplymentInvoices_ReturnSupplymentInvoiceID",
                table: "ReturnSupplymentInvoiceDetails",
                column: "ReturnSupplymentInvoiceID",
                principalTable: "ReturnSupplymentInvoices",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
