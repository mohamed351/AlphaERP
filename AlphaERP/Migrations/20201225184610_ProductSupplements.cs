using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class ProductSupplements : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ProductID",
                table: "SupplymentDetails",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SupplymentDetails_ProductID",
                table: "SupplymentDetails",
                column: "ProductID");

            migrationBuilder.AddForeignKey(
                name: "FK_SupplymentDetails_Products_ProductID",
                table: "SupplymentDetails",
                column: "ProductID",
                principalTable: "Products",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SupplymentDetails_Products_ProductID",
                table: "SupplymentDetails");

            migrationBuilder.DropIndex(
                name: "IX_SupplymentDetails_ProductID",
                table: "SupplymentDetails");

            migrationBuilder.AlterColumn<string>(
                name: "ProductID",
                table: "SupplymentDetails",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
