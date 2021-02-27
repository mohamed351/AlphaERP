using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class ChangeForeignKeyToNonUnique : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ReturnSupplymentInvoices_InvoiceReferenceID",
                table: "ReturnSupplymentInvoices");

            migrationBuilder.DropIndex(
                name: "IX_ReturnedCustomerInvoices_InvoiceReferenceID",
                table: "ReturnedCustomerInvoices");

            migrationBuilder.CreateIndex(
                name: "IX_ReturnSupplymentInvoices_InvoiceReferenceID",
                table: "ReturnSupplymentInvoices",
                column: "InvoiceReferenceID");

            migrationBuilder.CreateIndex(
                name: "IX_ReturnedCustomerInvoices_InvoiceReferenceID",
                table: "ReturnedCustomerInvoices",
                column: "InvoiceReferenceID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ReturnSupplymentInvoices_InvoiceReferenceID",
                table: "ReturnSupplymentInvoices");

            migrationBuilder.DropIndex(
                name: "IX_ReturnedCustomerInvoices_InvoiceReferenceID",
                table: "ReturnedCustomerInvoices");

            migrationBuilder.CreateIndex(
                name: "IX_ReturnSupplymentInvoices_InvoiceReferenceID",
                table: "ReturnSupplymentInvoices",
                column: "InvoiceReferenceID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ReturnedCustomerInvoices_InvoiceReferenceID",
                table: "ReturnedCustomerInvoices",
                column: "InvoiceReferenceID",
                unique: true);
        }
    }
}
