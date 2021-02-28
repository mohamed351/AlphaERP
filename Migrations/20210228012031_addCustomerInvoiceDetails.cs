using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class addCustomerInvoiceDetails : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserID",
                table: "ReturnedCustomerInvoices",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DetailReference",
                table: "ReturnedCustomerInvoiceDetails",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ReturnedCustomerInvoices_UserID",
                table: "ReturnedCustomerInvoices",
                column: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_ReturnedCustomerInvoices_AspNetUsers_UserID",
                table: "ReturnedCustomerInvoices",
                column: "UserID",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReturnedCustomerInvoices_AspNetUsers_UserID",
                table: "ReturnedCustomerInvoices");

            migrationBuilder.DropIndex(
                name: "IX_ReturnedCustomerInvoices_UserID",
                table: "ReturnedCustomerInvoices");

            migrationBuilder.DropColumn(
                name: "UserID",
                table: "ReturnedCustomerInvoices");

            migrationBuilder.DropColumn(
                name: "DetailReference",
                table: "ReturnedCustomerInvoiceDetails");
        }
    }
}
