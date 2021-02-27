using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class RemoveTableBarCodes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductBarCodes");

            migrationBuilder.AddColumn<string>(
                name: "BarCode",
                table: "Products",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsValidInPointOfSales",
                table: "Products",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsValidInStorage",
                table: "Products",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BarCode",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "IsValidInPointOfSales",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "IsValidInStorage",
                table: "Products");

            migrationBuilder.CreateTable(
                name: "ProductBarCodes",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    BarCodeDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BarCodeValue = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ProductID = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductBarCodes", x => x.ID);
                    table.ForeignKey(
                        name: "FK_ProductBarCodes_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductBarCodes_ProductID",
                table: "ProductBarCodes",
                column: "ProductID");
        }
    }
}
