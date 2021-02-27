using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class ConvertQuantityFromIntToDecimal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Quantity",
                table: "SupplymentDetails",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Quantity",
                table: "SupplymentDetails",
                type: "int",
                nullable: false,
                oldClrType: typeof(decimal));
        }
    }
}
