using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class AddMakeInvoiceReferenceIsUnique : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ReturnedCustomerInvoice_InvoiceReferenceID",
                table: "ReturnedCustomerInvoice");

            migrationBuilder.CreateIndex(
                name: "IX_ReturnedCustomerInvoice_InvoiceReferenceID",
                table: "ReturnedCustomerInvoice",
                column: "InvoiceReferenceID",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_ReturnedCustomerInvoice_InvoiceReferenceID",
                table: "ReturnedCustomerInvoice");

            migrationBuilder.CreateIndex(
                name: "IX_ReturnedCustomerInvoice_InvoiceReferenceID",
                table: "ReturnedCustomerInvoice",
                column: "InvoiceReferenceID");
        }
    }
}
