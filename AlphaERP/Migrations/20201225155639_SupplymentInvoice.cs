using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RealApplication.Migrations
{
    public partial class SupplymentInvoice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "supplymentInvoices",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SupplierID = table.Column<string>(nullable: true),
                    EmployeeID = table.Column<string>(nullable: true),
                    InvoiceNumber = table.Column<int>(nullable: false),
                    SupplymentDate = table.Column<DateTime>(nullable: false),
                    IsCancelled = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_supplymentInvoices", x => x.ID);
                    table.ForeignKey(
                        name: "FK_supplymentInvoices_AspNetUsers_EmployeeID",
                        column: x => x.EmployeeID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_supplymentInvoices_Suppliers_SupplierID",
                        column: x => x.SupplierID,
                        principalTable: "Suppliers",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SupplymentDetails",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InvoiceID = table.Column<int>(nullable: false),
                    ProductID = table.Column<string>(nullable: true),
                    UnitPrice = table.Column<int>(nullable: false),
                    Quantity = table.Column<int>(nullable: false),
                    ExpireDate = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SupplymentDetails", x => x.ID);
                    table.ForeignKey(
                        name: "FK_SupplymentDetails_supplymentInvoices_InvoiceID",
                        column: x => x.InvoiceID,
                        principalTable: "supplymentInvoices",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SupplymentDetails_InvoiceID",
                table: "SupplymentDetails",
                column: "InvoiceID");

            migrationBuilder.CreateIndex(
                name: "IX_supplymentInvoices_EmployeeID",
                table: "supplymentInvoices",
                column: "EmployeeID");

            migrationBuilder.CreateIndex(
                name: "IX_supplymentInvoices_SupplierID",
                table: "supplymentInvoices",
                column: "SupplierID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SupplymentDetails");

            migrationBuilder.DropTable(
                name: "supplymentInvoices");
        }
    }
}
