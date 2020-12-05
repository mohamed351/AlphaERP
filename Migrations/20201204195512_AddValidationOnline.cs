using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class AddValidationOnline : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsValidOnline",
                table: "Products",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsValidOnline",
                table: "Products");
        }
    }
}
