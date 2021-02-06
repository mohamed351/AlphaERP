using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class addCustomerInvoice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Quantity",
                table: "ProductStores",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Quantity",
                table: "ProductStores",
                type: "int",
                nullable: false,
                oldClrType: typeof(decimal));
        }
    }
}
