using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class addUserToTableRefund : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserID",
                table: "ReturnSupplymentInvoices",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ReturnSupplymentInvoices_UserID",
                table: "ReturnSupplymentInvoices",
                column: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_ReturnSupplymentInvoices_AspNetUsers_UserID",
                table: "ReturnSupplymentInvoices",
                column: "UserID",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReturnSupplymentInvoices_AspNetUsers_UserID",
                table: "ReturnSupplymentInvoices");

            migrationBuilder.DropIndex(
                name: "IX_ReturnSupplymentInvoices_UserID",
                table: "ReturnSupplymentInvoices");

            migrationBuilder.DropColumn(
                name: "UserID",
                table: "ReturnSupplymentInvoices");
        }
    }
}
