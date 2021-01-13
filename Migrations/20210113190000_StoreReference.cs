using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class StoreReference : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_supplymentInvoices_StoreID",
                table: "supplymentInvoices",
                column: "StoreID");

            migrationBuilder.AddForeignKey(
                name: "FK_supplymentInvoices_Stores_StoreID",
                table: "supplymentInvoices",
                column: "StoreID",
                principalTable: "Stores",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_supplymentInvoices_Stores_StoreID",
                table: "supplymentInvoices");

            migrationBuilder.DropIndex(
                name: "IX_supplymentInvoices_StoreID",
                table: "supplymentInvoices");
        }
    }
}
